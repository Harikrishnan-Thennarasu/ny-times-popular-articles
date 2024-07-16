import React, { useEffect, useState } from 'react';
import { fetchArticles } from '../api';
import ArticleList from '../components/ArticleList';
import ArticleDetail from '../components/ArticleDetail';
import TabSelector from '../components/TabComponent';

const ArticleContainer = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
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
    setPeriod(period);
    try {
      const data = await fetchArticles(value);
      setArticles(data?.results || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const handleSelectArticle = (article) => {
    setSelectedArticle(article);
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <TabSelector onSelect={onTabChnage} />
          <ArticleList articles={articles} onSelectArticle={handleSelectArticle} />
          {selectedArticle && <ArticleDetail article={selectedArticle} />}
        </div>
      )}
    </div>
  );
};

export default ArticleContainer;
