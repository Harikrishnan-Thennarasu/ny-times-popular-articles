import React, { useEffect, useState } from 'react';
import { fetchArticles } from '../api';
import ArticleList from './ArticleList';
import TabSelector from './TabComponent';
import Divider from './Divider';

const ArticleContainer = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [period, setPeriod] = useState(1);


  useEffect(() => {
    const loadArticles = async () => {
      try {
        const data = await fetchArticles(period);
        setArticles(data?.results || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  const onTabChnage = async (value) => {
    try {
      setLoading(true);
      setPeriod(value);
      const data = await fetchArticles(value);
      setArticles(data?.results || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }


  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <TabSelector value={period} onSelect={onTabChnage} />
          <Divider />
          <ArticleList articles={articles} />
        </div>
      )}
    </div>
  );
};

export default ArticleContainer;
