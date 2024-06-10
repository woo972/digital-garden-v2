// src/components/SearchResults.js
import React from 'react';
import { Link } from 'react-router-dom';

function SearchResults({ results, onResultClick }) {
  return (
    <div className="absolute bg-white border rounded w-full mt-1">
      {results.map(result => (
        <Link key={result.id} to={`/post/${result.id}`} onClick={onResultClick}>
          <div className="p-2 hover:bg-gray-100">
            <h2 className="text-lg font-medium">{result.id}</h2> 
            <p className="text-sm text-gray-600">{result.summary}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default SearchResults;
