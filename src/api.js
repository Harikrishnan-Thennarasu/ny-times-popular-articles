const API_KEY = 'SyFGeKfnlfYdpr85Ie51BuMcqN2ZC1eL';
const BASE_URL = 'https://api.nytimes.com/svc/mostpopular/v2/viewed';

export const fetchArticles = async (period) => {
  const response = await fetch(`${BASE_URL}/${period}.json?api-key=${API_KEY}`);
  if (!response.ok) {
    throw new Error('Failed to fetch articles');
  }
  return await response.json();
};
