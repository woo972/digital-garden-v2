// src/components/SearchResults.js
import React from 'react';
import { Link } from 'react-router-dom';

function SearchResults({ results, onResultClick }) {
  return (
    <div className="absolute bg-white border rounded shadow-lg mt-1 w-full z-10">
      <p className="p-2 text-sm text-gray-500 border-b">FROM THIS PROFILE</p>
      {results.map(result => (
        <Link
          to={`/post/${result.id}`}
          key={result.id}
          className="block p-2 hover:bg-gray-100"
          onClick={onResultClick}
        >
          <p className="font-semibold">{result.title}</p>
          <p className="text-sm text-gray-500">{new Date(result.date).toDateString()}</p>
        </Link>
      ))}
    </div>
  );
}

export default SearchResults;
