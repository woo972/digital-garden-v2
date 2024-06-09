import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const MarkdownRenderer = ({ file }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(file)
      .then((response) => response.text())
      .then((text) => setContent(text));
  }, [file]);

  return (
    <article className="prose lg:prose-xl mx-auto">
      <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
    </article>
  );
};

export default MarkdownRenderer;