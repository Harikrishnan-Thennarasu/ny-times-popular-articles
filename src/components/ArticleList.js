import React from 'react';

const ArticleList = ({ articles, onSelectArticle }) => {
  return (
    <ul>
      {articles.map(article => (
        <li key={article.url} onClick={() => onSelectArticle(article)}>
          <a href={article.url} style={{ pointerEvents: 'none' }}>{article.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default ArticleList;
