import { NextResponse } from 'next/server'

const GITHUB_USERNAME = 'Pugazh0602'
const GITHUB_API_BASE = 'https://api.github.com'

export async function GET() {
  try {
    console.log('Fetching GitHub repos for:', GITHUB_USERNAME)
    
    const response = await fetch(
      `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'portfolio-app'
        }
      }
    )

    console.log('GitHub API response status:', response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.error('GitHub API error response:', errorText)
      throw new Error(`GitHub API error: ${response.status} - ${errorText}`)
    }

    const repos = await response.json()
    console.log('Fetched repos count:', repos.length)

    // Filter and transform repos - temporarily allowing repos without descriptions
    const excludedRepos = ['portfolio', 'Pugazh0602', '.github', 'test', 'temp', 'backup', 'demo', 'example']
    
    const filteredRepos = repos
      .filter((repo: any) => 
        !repo.private && 
        !excludedRepos.includes(repo.name) &&
        repo.name !== 'Portfolio-main' // Exclude this portfolio repo
      )
      .map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description || `A ${repo.language || 'software'} project showcasing development skills.`,
        html_url: repo.html_url,
        homepage: repo.homepage,
        topics: repo.topics || [],
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        updated_at: repo.updated_at,
        created_at: repo.created_at,
        private: repo.private
      }))
      .sort((a: any, b: any) => {
        if (b.stargazers_count !== a.stargazers_count) {
          return b.stargazers_count - a.stargazers_count
        }
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      })

    console.log('Filtered repos count:', filteredRepos.length)

    return NextResponse.json(filteredRepos)
  } catch (error) {
    console.error('Error fetching GitHub repos:', error)
    return NextResponse.json(
      { 
        error: 'Failed to fetch projects',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
} 