// GitHub repository interface
export interface GitHubRepo {
  owner: string;
  name: string;
  branch?: string;
}

/**
 * Fetches README.md content from GitHub repository using raw URL
 */
export async function fetchGitHubReadme(repo: GitHubRepo): Promise<string | null> {
  try {
    const { owner, name, branch = "main" } = repo;
    
    // Primary README.md URL
    const url = `https://raw.githubusercontent.com/${owner}/${name}/${branch}/README.md`;
    
    const response = await fetch(url, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      // Try common README variations
      const fallbacks = ['readme.md', 'Readme.md', 'README.rst', 'README.txt'];
      
      for (const filename of fallbacks) {
        const fallbackUrl = `https://raw.githubusercontent.com/${owner}/${name}/${branch}/${filename}`;
        const fallbackResponse = await fetch(fallbackUrl, {
          next: { revalidate: 3600 }
        });
        
        if (fallbackResponse.ok) {
          return processMarkdownContent(await fallbackResponse.text());
        }
      }
      
      return null; // No README found
    }

    const content = await response.text();
    return processMarkdownContent(content);
    
  } catch (error) {
    console.error(`Error fetching README for ${repo.owner}/${repo.name}:`, error);
    return null;
  }
}

/**
 * Basic markdown content processing
 */
export function processMarkdownContent(content: string): string {
  return content
    .replace(/<!--[\s\S]*?-->/g, '') // Remove HTML comments
    .replace(/\n{3,}/g, '\n\n')      // Clean excessive newlines
    .trim();
} 