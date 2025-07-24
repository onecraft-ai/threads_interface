export interface GitHubRelease {
  id: number;
  tag_name: string;
  name: string;
  published_at: string;
  assets: Array<{
    id: number;
    name: string;
    browser_download_url: string;
    size: number;
    download_count: number;
  }>;
}

export async function GET() {
  try {
    const response = await fetch(
      'https://api.github.com/repos/kagan-roman/threads_helper_public/releases',
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'ThreadsHelper-Website'
        },
        next: { revalidate: 300 } // Кэшируем на 5 минут
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const releases: GitHubRelease[] = await response.json();
    
    // Берем только последний релиз
    const latestRelease = releases[0];
    
    if (!latestRelease) {
      return Response.json({ error: 'No releases found' }, { status: 404 });
    }

    // Фильтруем нужные файлы по платформам
    const platformAssets = latestRelease.assets.filter(asset => {
      const name = asset.name.toLowerCase();
      return (
        name.endsWith('.exe') ||     // Windows
        name.endsWith('.dmg') ||     // macOS
        name.endsWith('.rpm') ||     // Linux RPM
        name.endsWith('.zip')        // Portable versions
      );
    });

    return Response.json({
      version: latestRelease.tag_name,
      name: latestRelease.name,
      publishedAt: latestRelease.published_at,
      assets: platformAssets
    });

  } catch (error) {
    console.error('Error fetching releases:', error);
    return Response.json(
      { error: 'Failed to fetch releases' }, 
      { status: 500 }
    );
  }
} 