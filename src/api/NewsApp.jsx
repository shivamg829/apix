import { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const NewsApp = () => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState('general');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
  const categories = ['general', 'business', 'technology', 'entertainment', 'health', 'science', 'sports'];

  useEffect(() => {
    fetchNews();
  }, [category]);

  const fetchNews = async () => {
    setLoading(true);
    setError('');
    
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
      );
      
      if (response.data.articles) {
        setNews(response.data.articles.filter(article => article.title !== '[Removed]'));
      }
    } catch (err) {
      setError('Failed to fetch news. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-page">
      <div className="page-header">
        <h1>📰 News Hub</h1>
        <p>Stay updated with the latest headlines</p>
      </div>

      <div className="app-content">
        <div className="app-card search-card">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="form-control"
            style={{ cursor: 'pointer' }}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {loading && <LoadingSpinner />}
        
        {error && <ErrorMessage message={error} />}
        
        {!loading && !error && (
          <div className="products-grid">
            {news.map((article, index) => (
              article.urlToImage && article.title && (
                <a 
                  href={article.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  key={index}
                  className="news-card"
                  style={{ textDecoration: 'none' }}
                >
                  <img 
                    src={article.urlToImage} 
                    alt={article.title}
                    className="news-image"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x200?text=No+Image';
                    }}
                  />
                  <div className="news-content">
                    <div className="news-source">{article.source.name}</div>
                    <h3 className="news-title">{article.title}</h3>
                    <div className="news-date">
                      {new Date(article.publishedAt).toLocaleDateString()}
                    </div>
                  </div>
                </a>
              )
            ))}
          </div>
        )}

        {!loading && !error && news.length === 0 && (
          <p className="text-center" style={{ color: 'var(--text-secondary)', marginTop: '2rem' }}>
            No news articles found.
          </p>
        )}
      </div>
    </div>
  );
};

export default NewsApp;
