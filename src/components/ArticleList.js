import React from 'react';
import ArticleDetail from './ArticleDetail';

const ArticleList = ({ articles }) => {
  return (
    <div>
      {articles.map((item, index) => (
        <div key={index}>
          <ArticleDetail article={item} />
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
