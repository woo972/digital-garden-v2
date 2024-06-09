const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
  const postsDir = path.join(__dirname, '../../public/posts');

  try {
    const files = fs.readdirSync(postsDir);
    const markdownFiles = files.filter(file => path.extname(file) === '.md').map(file => path.basename(file, '.md'));

    return {
      statusCode: 200,
      body: JSON.stringify(markdownFiles)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to list files' })
    };
  }
};
