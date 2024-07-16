import React from 'react';
import ArticleContainer from './containers/ArticleContainer';

const App = () => {
  return (
    <div className="centered">
      <h1 className="textCentered">NY Times Most Popular Articles</h1>
      <ArticleContainer />
    </div>
  );
};

export default App;
