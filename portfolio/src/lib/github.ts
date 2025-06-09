export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  created_at: string;
  private: boolean;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github: string;
  stars: number;
  forks: number;
  language: string;
  updatedAt: string;
}

// Custom image mapping for specific repositories
const customRepoImages: Record<string, string> = {
  'budget-buddy-joy': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&q=80', // Finance/Budget
  'EyeDiseaseRecognitionCNN': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=400&q=80', // AI/Medical
  'ecommerce-platform': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&q=80', // E-commerce
  'weather-forecast-app': 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', // Weather
  'invisible-apps-haven': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80', // Web Development
  'neon-legal-minder': 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80', // Legal/Business
}

// Default images for different project types
const getDefaultImage = (topics: string[], language: string | null, repoName: string): string => {
  // First, check if we have a custom image for this specific repository
  if (customRepoImages[repoName]) {
    return customRepoImages[repoName];
  }
  
  // Then check topics for specific project types
  if (topics.includes('ai') || topics.includes('machine-learning') || topics.includes('deep-learning')) {
    return 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=400&q=80';
  }
  if (topics.includes('web') || topics.includes('frontend') || topics.includes('react')) {
    return 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80';
  }
  if (topics.includes('mobile') || topics.includes('app')) {
    return 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80';
  }
  if (topics.includes('api') || topics.includes('backend') || topics.includes('node')) {
    return 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80';
  }
  if (topics.includes('ecommerce') || topics.includes('shopping')) {
    return 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&q=80';
  }
  if (topics.includes('finance') || topics.includes('budget') || topics.includes('money')) {
    return 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&q=80';
  }
  if (topics.includes('weather') || topics.includes('climate')) {
    return 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80';
  }
  if (topics.includes('legal') || topics.includes('law') || topics.includes('business')) {
    return 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80';
  }
  
  // Default images based on language
  switch (language?.toLowerCase()) {
    case 'python':
      return 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=400&q=80';
    case 'javascript':
    case 'typescript':
      return 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=400&q=80';
    case 'java':
      return 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=400&q=80';
    default:
      return 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80';
  }
};

// Fallback projects in case API fails
const fallbackProjects: Project[] = [
  {
    title: 'Eye Disease Recognition CNN',
    description: 'A deep learning project using Convolutional Neural Networks (CNN) for the detection and classification of various eye diseases. Built with Python and TensorFlow, this project demonstrates the application of AI in medical image analysis.',
    image: getDefaultImage(['ai', 'machine-learning', 'deep-learning'], 'Python', 'EyeDiseaseRecognitionCNN'),
    tags: ['Python', 'TensorFlow', 'CNN', 'Deep Learning', 'Computer Vision'],
    link: 'https://github.com/Pugazh0602/EyeDiseaseRecognitionCNN',
    github: 'https://github.com/Pugazh0602/EyeDiseaseRecognitionCNN',
    stars: 0,
    forks: 0,
    language: 'Python',
    updatedAt: new Date().toISOString()
  },
  {
    title: 'Budget Buddy Joy',
    description: 'A personal finance management application built with TypeScript, helping users track expenses, set budgets, and manage their financial goals. Features include expense categorization, budget planning, and financial analytics.',
    image: getDefaultImage(['finance', 'budget', 'typescript'], 'TypeScript', 'budget-buddy-joy'),
    tags: ['TypeScript', 'React', 'Node.js', 'MongoDB', 'Full Stack'],
    link: 'https://github.com/Pugazh0602/budget-buddy-joy',
    github: 'https://github.com/Pugazh0602/budget-buddy-joy',
    stars: 0,
    forks: 0,
    language: 'TypeScript',
    updatedAt: new Date().toISOString()
  },
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with features like product management, shopping cart, payment integration, and order tracking. Built with a focus on scalability and user experience.',
    image: getDefaultImage(['ecommerce', 'shopping', 'typescript'], 'TypeScript', 'ecommerce-platform'),
    tags: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB', 'Redux'],
    link: 'https://github.com/Pugazh0602/ecommerce-platform',
    github: 'https://github.com/Pugazh0602/ecommerce-platform',
    stars: 0,
    forks: 0,
    language: 'TypeScript',
    updatedAt: new Date().toISOString()
  }
];

// Convert GitHub topics to display tags
const getDisplayTags = (topics: string[], language: string | null): string[] => {
  const tags = new Set<string>();
  
  // Add language
  if (language) {
    tags.add(language);
  }
  
  // Add relevant topics as tags
  const relevantTopics = topics.filter(topic => 
    !['portfolio', 'personal', 'demo', 'test', 'example'].includes(topic.toLowerCase())
  );
  
  relevantTopics.forEach(topic => {
    // Convert topic names to display names
    const displayName = topic
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    tags.add(displayName);
  });
  
  // Add framework/technology tags based on topics
  if (topics.includes('react')) tags.add('React');
  if (topics.includes('nextjs') || topics.includes('next.js')) tags.add('Next.js');
  if (topics.includes('typescript')) tags.add('TypeScript');
  if (topics.includes('nodejs') || topics.includes('node.js')) tags.add('Node.js');
  if (topics.includes('python')) tags.add('Python');
  if (topics.includes('tensorflow')) tags.add('TensorFlow');
  if (topics.includes('mongodb')) tags.add('MongoDB');
  if (topics.includes('firebase')) tags.add('Firebase');
  if (topics.includes('tailwind')) tags.add('Tailwind CSS');
  if (topics.includes('fullstack') || topics.includes('full-stack')) tags.add('Full Stack');
  
  return Array.from(tags).slice(0, 6); // Limit to 6 tags
};

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const response = await fetch('/api/projects', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const repos: GitHubRepo[] = await response.json();
    return repos;
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    throw error;
  }
}

export function transformRepoToProject(repo: GitHubRepo): Project {
  const tags = getDisplayTags(repo.topics, repo.language);
  const image = getDefaultImage(repo.topics, repo.language, repo.name);
  
  return {
    title: repo.name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' '),
    description: repo.description || 'A software project showcasing various technologies and development skills.',
    image,
    tags,
    link: repo.homepage || repo.html_url,
    github: repo.html_url,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    language: repo.language || 'Other',
    updatedAt: repo.updated_at
  };
}

export async function getProjects(): Promise<Project[]> {
  try {
    const repos = await fetchGitHubRepos();
    const projects = repos.map(transformRepoToProject);
    return projects;
  } catch (error) {
    console.error('Error getting projects:', error);
    console.log('Using fallback projects');
    // Return fallback projects on error
    return fallbackProjects;
  }
} 