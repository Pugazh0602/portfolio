# Dynamic Project Loading

This portfolio automatically fetches and displays projects from your GitHub account without requiring manual updates.

## How It Works

### 1. GitHub API Integration
- The portfolio uses the GitHub API to fetch your public repositories
- Projects are automatically sorted by stars and update date
- Only repositories with descriptions are displayed

### 2. Smart Filtering
- Excludes private repositories
- Filters out common non-project repositories (portfolio, test, demo, etc.)
- Only shows repositories that have descriptions

### 3. Automatic Tag Generation
- Converts GitHub topics to display tags
- Automatically detects and adds technology tags (React, TypeScript, etc.)
- Limits tags to 6 per project for clean display

### 4. Dynamic Images
- Automatically assigns relevant images based on project topics and language
- Uses Unsplash images for different project types (AI, web, mobile, etc.)

## Configuration

Edit `src/lib/config.ts` to customize:

```typescript
export const config = {
  github: {
    username: 'YourGitHubUsername', // Change this to your username
    excludedRepos: [
      'portfolio',
      'test',
      'demo',
      // Add more repos to exclude
    ]
  }
}
```

## API Endpoint

The portfolio includes a server-side API route (`/api/projects`) that:
- Fetches data from GitHub API
- Handles rate limiting and CORS
- Caches results for 1 hour
- Filters and transforms repository data

## Features

- **Real-time Updates**: Projects update automatically when you add new repositories
- **Smart Sorting**: Projects are sorted by popularity (stars) and recency
- **Responsive Design**: Works on all devices
- **Error Handling**: Graceful fallbacks if GitHub API is unavailable
- **Loading States**: Shows loading spinner while fetching data
- **GitHub Stats**: Displays star and fork counts for each project

## Customization

### Adding Custom Project Images
Edit the `getDefaultImage` function in `src/lib/github.ts` to add custom image logic for specific topics or languages.

### Modifying Tag Logic
Edit the `getDisplayTags` function to customize how GitHub topics are converted to display tags.

### Changing Sort Order
Modify the sorting logic in the API route to change how projects are ordered.

## Benefits

1. **No Manual Updates**: Projects automatically sync with your GitHub
2. **Always Current**: Shows your latest work without maintenance
3. **Professional**: Displays real GitHub stats and metadata
4. **Scalable**: Works with any number of repositories
5. **Fast**: Cached API responses for better performance 