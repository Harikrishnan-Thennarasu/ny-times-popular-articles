import React from 'react';

const ArticleDetail = ({ article }) => {
  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.abstract}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
    </div>
  );
};

export default ArticleDetail;
