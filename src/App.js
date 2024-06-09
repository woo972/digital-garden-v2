// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Post from './pages/Post';
import SearchBar from './components/SearchBar';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="border-b border-gray-200">
          <div className="container mx-auto p-4 flex justify-between items-center">
            <Link to="/" className="text-3xl font-bold">Sookeun's Digital Garden</Link>
            <SearchBar setSearchTerm={setSearchTerm} />
          </div>
        </header>
        <main className="container mx-auto p-4">
          <h1 className="text-4xl font-bold text-center my-8">SooKeun Woo</h1>
          <nav className="flex justify-center space-x-4 mb-8">
            <Link to="/" className="text-xl">Home</Link>
            <Link to="/about" className="text-xl">About</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home searchTerm={searchTerm} />} />
            <Route path="/about" element={<About />} />
            <Route path="/post/:postId" element={<Post />} />
          </Routes>
        </main>
        <footer className="border-t border-gray-200 mt-8">
          <div className="container mx-auto p-4 text-center">
            <p>© 2024 Sookeun's Digital Garden</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
