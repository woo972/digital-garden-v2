// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import PostList from '../components/PostList';
import { loadPostFiles, loadPosts } from '../utils';

function Home({ searchTerm }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postFiles = await loadPostFiles();
        const loadedPosts = await loadPosts(postFiles);
        setPosts(loadedPosts);
      } catch (error) {
        console.error('Failed to load posts', error);
      }
    };
    fetchData();
  }, []);

  // 검색어에 따라 필터링된 포스트 목록 생성
  const filteredPosts = searchTerm.length > 0
    ? posts.filter(post =>
        post.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : posts;

  return (
    <div className="max-w-4xl mx-auto">
      <PostList posts={filteredPosts} />
    </div>
  );
}

export default Home;
