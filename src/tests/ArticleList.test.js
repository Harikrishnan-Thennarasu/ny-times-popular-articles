import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticleList from '../components/ArticleList';

test('renders article titles', () => {
  const articles = [
    { title: 'Article 1', url: 'url1' },
    { title: 'Article 2', url: 'url2' },
  ];
  
  render(<ArticleList articles={articles} onSelectArticle={() => {}} />);
  
  expect(screen.getByText(/Article 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Article 2/i)).toBeInTheDocument();
});
