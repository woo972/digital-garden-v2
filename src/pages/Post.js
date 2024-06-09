import React from 'react';
import { useParams } from 'react-router-dom';
import MarkdownRenderer from '../components/MarkdownRenderer';

const postFiles = {
  '1': '/posts/README.md',
  '2': '/posts/README.md',
  // 추가 포스트 파일을 여기에 매핑
};

function Post() {
  const { postId } = useParams();
  const file = postFiles[postId];

  return (
    <div className="max-w-4xl mx-auto">
      <MarkdownRenderer file={file} />
    </div>
  );
}

export default Post;
