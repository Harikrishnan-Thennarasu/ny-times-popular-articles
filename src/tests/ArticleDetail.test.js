import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticleDetail from '../components/ArticleDetail';

test('renders article details', () => {
  const article = { title: 'Article Title', abstract: 'Article abstract', url: 'url' };

  render(<ArticleDetail article={article} />);
  
  expect(screen.getByText(/Article Title/i)).toBeInTheDocument();
  expect(screen.getByText(/Article abstract/i)).toBeInTheDocument();
});
