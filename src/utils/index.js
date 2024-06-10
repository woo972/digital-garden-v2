const GITHUB_API_URL = 'https://api.github.com/repos/woo972/personal-knowledge/contents';
const GITHUB_RAW_URL = 'https://raw.githubusercontent.com/woo972/personal-knowledge/main';


export const loadPostFiles = async () => {
  try {
    const response = await fetch(GITHUB_API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch post files');
    }

    const files = await response.json();
    // .md 파일만 필터링
    const postFiles = files.filter(file => file.name.endsWith('.md')).map(file => file.name);
    console.log('Post Files:', postFiles); // fetch 결과 로그 출력
    return postFiles;
  } catch (error) {
    console.error('Error fetching post files:', error);
    return [];
  }
};

export const loadPosts = async (postFiles) => {
  const loadedPosts = await Promise.all(
    postFiles.map(async (filename) => {
      const response = await fetch(`${GITHUB_RAW_URL}/${filename}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${filename}`);
      }
      const content = await response.text();
      return { id: filename.replace('.md', ''), content };
    })
  );

  return loadedPosts;
};