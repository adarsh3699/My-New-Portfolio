import { NextResponse } from "next/server";

const LEETCODE_API_URL = "https://leetcode.com/graphql";
const USERNAME = "adarsh3699";

// Type definitions for LeetCode API response
interface LeetCodeSubmissionStat {
	difficulty: string;
	count: number;
	submissions: number;
}

interface LeetCodeQuestionCount {
	difficulty: string;
	count: number;
}

interface LeetCodeAPIResponse {
	data: {
		allQuestionsCount: LeetCodeQuestionCount[];
		matchedUser: {
			submitStats: {
				acSubmissionNum: LeetCodeSubmissionStat[];
			};
		};
	};
	errors?: Array<{ message: string }>;
}

const LEETCODE_STATS_QUERY = `
  query userProblemsSolved($username: String!) {
    allQuestionsCount {
      difficulty
      count
    }
    matchedUser(username: $username) {
      submitStats {
        acSubmissionNum {
          difficulty
          count
          submissions
        }
      }
    }
  }
`;

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
				query: LEETCODE_STATS_QUERY,
				variables: { username: USERNAME },
			}),
			next: { revalidate: 3600 },
		});

		if (!response.ok) {
			throw new Error(`LeetCode API error: ${response.status}`);
		}

		const { data, errors } = await response.json() as LeetCodeAPIResponse;

		if (errors) {
			throw new Error("GraphQL errors occurred");
		}

		if (!data?.matchedUser?.submitStats?.acSubmissionNum) {
			throw new Error("No submission stats found");
		}

		// Process the data to get solved problems by difficulty
		const solvedStats = data.matchedUser.submitStats.acSubmissionNum;
		const allQuestionsCount = data.allQuestionsCount;

		// Create a map for easy lookup
		const solvedMap = new Map<string, number>();
		solvedStats.forEach((stat: LeetCodeSubmissionStat) => {
			solvedMap.set(stat.difficulty, stat.count);
		});

		const allQuestionsMap = new Map<string, number>();
		allQuestionsCount.forEach((stat: LeetCodeQuestionCount) => {
			allQuestionsMap.set(stat.difficulty, stat.count);
		});

		// Extract solved counts by difficulty
		const easySolved = solvedMap.get("Easy") || 0;
		const mediumSolved = solvedMap.get("Medium") || 0;
		const hardSolved = solvedMap.get("Hard") || 0;
		const totalSolved = easySolved + mediumSolved + hardSolved;

		// Extract total questions by difficulty
		const totalEasy = allQuestionsMap.get("Easy") || 0;
		const totalMedium = allQuestionsMap.get("Medium") || 0;
		const totalHard = allQuestionsMap.get("Hard") || 0;
		const totalQuestions = totalEasy + totalMedium + totalHard;

		return NextResponse.json({
			totalSolved,
			totalQuestions,
			easySolved,
			mediumSolved,
			hardSolved,
			totalEasy,
			totalMedium,
			totalHard,
		});
	} catch (error) {
		console.error("LeetCode stats API error:", error);

		// Return empty data on error to prevent UI breaks
		return NextResponse.json({
			totalSolved: 0,
			totalQuestions: 0,
			easySolved: 0,
			mediumSolved: 0,
			hardSolved: 0,
			totalEasy: 0,
			totalMedium: 0,
			totalHard: 0,
		});
	}
}
