import { memo } from 'react';

const FavouriteCard = memo(({ product, onRemove, onUpdateQuantity }) => {
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>💰 ${product.price}</p>
      <p>Количество: {product.quantity}</p>
      <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
        <button onClick={() => onUpdateQuantity(product.id, 1)}>+</button>
        <button onClick={() => onUpdateQuantity(product.id, -1)}>-</button>
        <button onClick={() => onRemove(product.id)}>Удалить</button>
      </div>
    </div>
  );
});

export default FavouriteCard;