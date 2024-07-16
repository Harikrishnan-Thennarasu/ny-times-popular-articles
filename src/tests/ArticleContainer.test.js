import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticleContainer from '../containers/ArticleContainer';

jest.mock('../api', () => ({
  fetchArticles: jest.fn(() => Promise.resolve({ results: [{ title: 'Test Article', url: 'url' }] }))
}));

test('renders ArticleContainer', async () => {
  render(<ArticleContainer />);

  expect(document.body).toBeInTheDocument();
});
