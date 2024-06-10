// src/components/PostList.js
import React from 'react';
import { Link } from 'react-router-dom';

function PostList({ posts }) {
  return (
    <div className="space-y-4">
      {posts.map(post => (
        <div key={post.id} className="p-4 border rounded shadow-sm">
          <Link to={`/post/${post.id}`}>
            <h2 className="text-2xl font-bold">{post.id}</h2>
            <p className="mt-2 text-gray-600">{post.summary}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default PostList;
