// src/pages/Post.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadPostFiles, loadPosts } from '../utils';
import ReactMarkdown from 'react-markdown';

function Post() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postFiles = await loadPostFiles();
        const loadedPosts = await loadPosts(postFiles);
        const selectedPost = loadedPosts.find(p => p.id === postId);
        setPost(selectedPost);
      } catch (error) {
        console.error('Failed to load posts', error);
      }
    };
    fetchData();
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{post.id}</h1>
      <div className="prose">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </div>
  );
}

export default Post;
