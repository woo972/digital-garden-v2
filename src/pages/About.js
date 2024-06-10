// src/pages/About.js
import React from 'react';

function About() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="mb-4">
        LinkedIn: <a href="https://www.linkedin.com/in/woosk/" className="text-blue-500 underline">https://www.linkedin.com/in/woosk/</a>
      </p>
      <p className="mb-4">
        Team-oriented, ever-evolving problem solver.<br />
        With over 8 years of software engineering experience, I have been leading and driving the organization’s success. I understand trade-offs and always find the optimal solution. I set high standards for myself to consistently deliver outstanding results.
      </p>
      <p>
        This page is created with React and hosted using Netlify.
      </p>
    </div>
  );
}

export default About;
