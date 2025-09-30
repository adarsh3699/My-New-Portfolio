import { NextResponse } from "next/server";

const LEETCODE_API_URL = "https://leetcode.com/graphql";
const USERNAME = "adarsh3699";

const LEETCODE_QUERY = `
  query userProfileCalendar($username: String!) {
    matchedUser(username: $username) {
      submissionCalendar
    }
  }
`;

const getContributionLevel = (count: number): 0 | 1 | 2 | 3 => {
	if (count === 0) return 0;
	if (count <= 3) return 1;
	if (count <= 5) return 2;
	return 3;
};

const processLeetCodeCalendar = (submissionCalendar: string) => {
	const calendar = JSON.parse(submissionCalendar);
	const weeks = [];
	let totalSubmissions = 0;

	// Date range: last year from today, starting from Sunday
	const today = new Date();
	today.setHours(23, 59, 59, 999);

	const startDate = new Date();
	startDate.setFullYear(startDate.getFullYear() - 1);
	startDate.setDate(startDate.getDate() + 1);
	startDate.setDate(startDate.getDate() - startDate.getDay()); // Align to Sunday

	// Generate 53 weeks of contribution data
	for (let week = 0; week < 53; week++) {
		const contributionDays = [];

		for (let day = 0; day < 7; day++) {
			const currentDate = new Date(startDate);
			currentDate.setDate(startDate.getDate() + week * 7 + day);

			// Stop at future dates
			if (currentDate > today) break;

			// Get submission count for this date
			const utcTimestamp = Math.floor(
				Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) / 1000
			).toString();
			const count = calendar[utcTimestamp] || 0;
			totalSubmissions += count;

			contributionDays.push({
				date: currentDate.toISOString().split("T")[0],
				count,
				level: getContributionLevel(count),
			});
		}

		weeks.push({ contributionDays });
	}

	return { totalSubmissions, weeks };
};

export async function GET() {
	try {
		const response = await fetch(LEETCODE_API_URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Referer: "https://leetcode.com",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
			},
			body: JSON.stringify({
				query: LEETCODE_QUERY,
				variables: { username: USERNAME },
			}),
			next: { revalidate: 3600 },
		});

		if (!response.ok) {
			throw new Error(`LeetCode API error: ${response.status}`);
		}

		const { data, errors } = await response.json();

		if (errors) {
			throw new Error("GraphQL errors occurred");
		}

		if (!data?.matchedUser?.submissionCalendar) {
			throw new Error("No submission data found");
		}

		return NextResponse.json(processLeetCodeCalendar(data.matchedUser.submissionCalendar));
	} catch (error) {
		console.error("LeetCode API error:", error);

		// Return empty data on error to prevent UI breaks
		return NextResponse.json({
			totalSubmissions: 0,
			weeks: Array.from({ length: 53 }, () => ({ contributionDays: [] })),
		});
	}
}
