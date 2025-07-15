import { NextResponse } from 'next/server';

const GITHUB_API_URL = 'https://api.github.com/graphql';

// GitHub GraphQL query to get profile stats
const PROFILE_STATS_QUERY = `
  query($username: String!) {
    user(login: $username) {
      repositories(privacy: PUBLIC) {
        totalCount
      }
      followers {
        totalCount
      }
      following {
        totalCount
      }
      bio
      websiteUrl
      avatarUrl
    }
  }
`;

interface GitHubUser {
  repositories: { totalCount: number };
  followers: { totalCount: number };
  following: { totalCount: number };
  bio: string;
  websiteUrl: string;
  avatarUrl: string;
}

interface GitHubResponse {
  data: {
    user: GitHubUser;
  };
  errors?: Array<{ message: string }>;
}

export async function GET() {
  try {
    const { username, token } = getEnvironmentVariables();

    const response = await fetchGitHubData(username, token);
    const data: GitHubResponse = await response.json();

    validateResponse(data);

    return NextResponse.json(formatResponse(data.data.user));
  } catch (error) {
    console.error('Error fetching GitHub profile stats:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch GitHub profile stats' },
      { status: 500 }
    );
  }
}

function getEnvironmentVariables() {
  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  if (!username || !token) {
    throw new Error('Missing GitHub username or token in environment variables');
  }

  return { username, token };
}

async function fetchGitHubData(username: string, token: string) {
  const response = await fetch(GITHUB_API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: PROFILE_STATS_QUERY,
      variables: { username },
    }),
  });

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }

  return response;
}

function validateResponse(data: GitHubResponse) {
  if (data.errors) {
    throw new Error(`GitHub GraphQL error: ${JSON.stringify(data.errors)}`);
  }

  if (!data.data?.user) {
    throw new Error('Invalid response structure from GitHub API');
  }
}

function formatResponse(user: GitHubUser) {
  return {
    repositories: user.repositories.totalCount,
    followers: user.followers.totalCount,
    following: user.following.totalCount,
    bio: user.bio,
    websiteUrl: user.websiteUrl,
    avatarUrl: user.avatarUrl,
  };
}
