import { useFavorites } from '../contexts/FavoritesContext';
import FavouriteCard from '../components/FavouriteCard';

function Favourites() {
  const { favorites, removeFromFavorites, updateQuantity } = useFavorites();

  if (favorites.length === 0) {
    return <h2>В избранном пока ничего нет</h2>;
  }

  return (
    <div>
      <h2>Избранные товары</h2>
      <div className="products-grid">
        {favorites.map(item => (
          <FavouriteCard
            key={item.id}
            product={item}
            onRemove={removeFromFavorites}
            onUpdateQuantity={updateQuantity}
          />
        ))}
      </div>
    </div>
  );
}

export default Favourites;