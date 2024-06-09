// src/components/SearchBar.js
import React, { useState, useEffect, useRef } from 'react';
import SearchResults from './SearchResults';
import { loadPostFiles, loadPosts } from '../utils';

function SearchBar({ setSearchTerm }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const searchInputRef = useRef(null);

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

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchQuery(term);
    setSearchTerm(term);

    if (term.length > 0) {
      const results = posts.filter(post =>
        post.id.toLowerCase().includes(term.toLowerCase()) ||
        post.content.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(results);
      setIsSearchActive(true);
    } else {
      setSearchResults([]);
      setIsSearchActive(false);
    }
  };

  const handleResultClick = () => {
    setIsSearchActive(false);
  };

  const handleSearchKeyPress = (event) => {
    if (event.key === 'Enter') {
      setIsSearchActive(false);
      searchInputRef.current.blur(); // 검색창 포커스 아웃
    }
  };

  const handleSearchClick = () => {
    setSearchQuery(''); // 검색어 초기화
    setSearchTerm(''); // 검색어 초기화
    setSearchResults([]); // 검색 결과 초기화
  };

  return (
    <div className="relative">
      <input
        ref={searchInputRef}
        type="text"
        placeholder="Search"
        className="border rounded py-1 px-3"
        value={searchQuery}
        onChange={handleSearchChange}
        onKeyPress={handleSearchKeyPress}
        onClick={handleSearchClick}
      />
      {isSearchActive && searchResults.length > 0 && (
        <SearchResults results={searchResults} onResultClick={handleResultClick} />
      )}
    </div>
  );
}

export default SearchBar;
