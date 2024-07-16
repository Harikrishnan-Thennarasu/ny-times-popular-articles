import React from 'react';
import Divider from './Divider';

const ArticleDetail = ({ article }) => {
  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.abstract}</p>
      {article.media && article.media.length > 0 && (
        <div className='imgContainer'>
          <img
            src={article.media[0]["media-metadata"][2].url}
            alt={article.title}
          />
        </div>
      )}
      <a href={article.url}>Read more</a>
      <Divider />
    </div>
  );
};

export default ArticleDetail;
