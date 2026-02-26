import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const EcommerceApp = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
      setFilteredProducts(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch products. Please try again later.');
      setLoading(false);
    }
  };

  useEffect(() => {
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="app-page">
      <div className="page-header">
        <h1>🛒 E-Commerce Store</h1>
        <p>Browse our collection of products</p>
      </div>

      <div className="app-content">
        <div className="app-card search-card">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="products-grid">
          {filteredProducts.map(product => (
            <Link to={`/product/${product.id}`} key={product.id} className="product-card" style={{ textDecoration: 'none' }}>
              <img 
                src={product.image} 
                alt={product.title}
                className="product-image"
              />
              <div className="product-info">
                <div className="product-category">{product.category}</div>
                <h3 className="product-title">{product.title}</h3>
                <div className="product-price">${product.price.toFixed(2)}</div>
                <div className="product-rating">
                  ⭐ {product.rating.rate} ({product.rating.count})
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center" style={{ color: 'var(--text-secondary)', marginTop: '2rem' }}>
            No products found matching your search.
          </p>
        )}
      </div>
    </div>
  );
};

export default EcommerceApp;
