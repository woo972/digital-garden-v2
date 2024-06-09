export const loadPosts = async (postFiles) => {
    const loadedPosts = await Promise.all(postFiles.map(async (post) => {
      const response = await fetch(post.file);
      const content = await response.text();
      return { ...post, content };
    }));
    return loadedPosts;
  };
  