import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch product details.');
      setLoading(false);
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!product) return <ErrorMessage message="Product not found" />;

  return (
    <div className="product-detail">
      <div className="product-detail-content">
        <button 
          onClick={() => navigate(-1)}
          className="back-btn"
        >
          ← Back to Products
        </button>

        <div className="product-detail-image-container">
          <img 
            src={product.image} 
            alt={product.title}
            className="product-detail-image"
          />
        </div>

        <div className="product-detail-info">
          <div className="product-detail-category">{product.category}</div>
          <h1>{product.title}</h1>
          <div className="product-detail-price">${product.price.toFixed(2)}</div>
          
          <div className="product-rating" style={{ marginBottom: '1.5rem' }}>
            ⭐ {product.rating?.rate} / 5 ({product.rating?.count} reviews)
          </div>

          <p className="product-detail-description">{product.description}</p>

          <div className="product-detail-actions">
            <button className="btn btn-primary" style={{ flex: 1 }}>
              🛒 Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
