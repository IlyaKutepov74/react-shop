import { createContext, useState, useContext, useEffect } from 'react';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('favorites');
    if (stored) {
      try {
        setFavorites(JSON.parse(stored));
      } catch(e) { console.error(e); }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  function addToFavorites(product) {
    setFavorites(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }

  function removeFromFavorites(productId) {
    setFavorites(prev => prev.filter(item => item.id !== productId));
  }

  function updateQuantity(productId, delta) {
    setFavorites(prev =>
      prev.map(item => {
        if (item.id === productId) {
          const newQuantity = item.quantity + delta;
          if (newQuantity <= 0) return null;
          return { ...item, quantity: newQuantity };
        }
        return item;
      }).filter(Boolean)
    );
  }

  function isFavorite(productId) {
    return favorites.some(item => item.id === productId);
  }

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, updateQuantity, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}