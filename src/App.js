import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FavoritesProvider } from './contexts/FavoritesContext';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import List from './pages/List';
import Details from './pages/Details';
import About from './pages/About';

function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Navigation />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<List />} />
            <Route path="/list/:id" element={<Details />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </FavoritesProvider>
  );
}

export default App;