// src/components/PostList.js
import React from 'react';
import { Link } from 'react-router-dom';

function PostList({ posts }) {
  return (
    <div className="space-y-4">
      {posts.map(post => (
        <div key={post.id} className="p-4 border rounded-lg hover:bg-gray-100 flex justify-between items-center">
          <div>
            <Link to={`/post/${post.id}`}>
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p>{post.summary}</p>
              <p className="text-sm text-gray-600">{post.date}</p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostList;
