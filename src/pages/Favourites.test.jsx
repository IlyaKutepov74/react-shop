import { render, screen, fireEvent } from '@testing-library/react';
import { FavoritesProvider } from '../contexts/FavoritesContext';
import Favourites from '../pages/Favourites';
import { BrowserRouter } from 'react-router-dom';

const mockFavorites = [
  { id: 1, title: 'Тестовый товар', price: 100, thumbnail: 'test.jpg', quantity: 2 }
];

// Мокаем localStorage
beforeEach(() => {
  localStorage.setItem('favorites', JSON.stringify(mockFavorites));
});

afterEach(() => {
  localStorage.clear();
});

test('отображает список избранных товаров', () => {
  render(
    <BrowserRouter>
      <FavoritesProvider>
        <Favourites />
      </FavoritesProvider>
    </BrowserRouter>
  );
  expect(screen.getByText(/Тестовый товар/i)).toBeInTheDocument();
  expect(screen.getByText(/Количество: 2/i)).toBeInTheDocument();
});

test('удаление товара из избранного', () => {
  render(
    <BrowserRouter>
      <FavoritesProvider>
        <Favourites />
      </FavoritesProvider>
    </BrowserRouter>
  );
  const deleteButton = screen.getByText(/Удалить/i);
  fireEvent.click(deleteButton);
  expect(screen.queryByText(/Тестовый товар/i)).not.toBeInTheDocument();
});