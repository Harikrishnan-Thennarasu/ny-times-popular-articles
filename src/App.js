import React from 'react';
import ArticleContainer from './components/ArticleContainer';
import './App.css';
const App = () => {
  return (
    <div className="App">
      <h1>NY Times Most Popular Articles</h1>
      <ArticleContainer />
    </div>
  );
};

export default App;
