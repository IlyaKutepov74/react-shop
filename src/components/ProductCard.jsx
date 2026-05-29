import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>💰 ${product.price}</p>
      <p>⭐ {product.rating}</p>
      <Link to={`/list/${product.id}`}>Подробнее →</Link>
    </div>
  );
}

export default ProductCard;