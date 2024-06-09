export const loadPostFiles = async () => {
  const response = await fetch('/.netlify/functions/getPostFiles');
  if (!response.ok) {
    throw new Error('Failed to fetch post files');
  }
  const postFiles = await response.json();
  return postFiles;
};

export const loadPosts = async (postFiles) => {
  const loadedPosts = await Promise.all(postFiles.map(async (filename) => {
    const response = await fetch(`/posts/${filename}.md`);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${filename}`);
    }
    const content = await response.text();
    return { id: filename, content };
  }));

  return loadedPosts;
};
