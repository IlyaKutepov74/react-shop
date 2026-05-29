import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <NavLink to="/" end>🏠 Главная</NavLink>
      <NavLink to="/list">📦 Товары</NavLink>
      <NavLink to="/about">ℹ️ О нас</NavLink>
    </nav>
  );
}

export default Navigation;