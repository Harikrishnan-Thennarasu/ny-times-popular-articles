import { render, screen } from '@testing-library/react';
import { act } from 'react';
import ArticleContainer from '../components/ArticleContainer';

test('renders ArticleContainer', async () => {
  await act(async () => {
    render(<ArticleContainer />);
  });

  expect(document.body).toBeInTheDocument();
});
