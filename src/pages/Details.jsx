import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useFavorites } from '../contexts/FavoritesContext';
import Spinner from '../components/Spinner';

function Details() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Товар не найден');
        return res.json();
      })
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const handleFavoriteToggle = () => {
    if (isFavorite(product.id)) {
      removeFavorite(product.id);
    } else {
      addFavorite(product);
    }
  };

  if (loading) return <Spinner />;
  if (error) return <div className="error">❌ {error}</div>;

  return (
    <div>
      <h2>{product.title}</h2>
      <div className="details-container">
        <img src={product.thumbnail} alt={product.title} />
        <div className="details-info">
          <p><strong>Цена:</strong> ${product.price}</p>
          <p><strong>Рейтинг:</strong> ⭐ {product.rating}</p>
          <p><strong>Бренд:</strong> {product.brand}</p>
          <p><strong>Категория:</strong> {product.category}</p>
          <p><strong>Описание:</strong> {product.description}</p>
          <button 
            onClick={handleFavoriteToggle}
            className={isFavorite(product.id) ? 'favorited' : ''}
          >
            {isFavorite(product.id) ? '❤️ В избранном' : '🤍 Добавить в избранное'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;