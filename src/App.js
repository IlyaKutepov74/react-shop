import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom'; // убрали BrowserRouter
import { FavoritesProvider } from './contexts/FavoritesContext';
import Navigation from './components/Navigation';
import Spinner from './components/Spinner';

const Home = lazy(() => import('./pages/Home'));
const List = lazy(() => import('./pages/List'));
const Details = lazy(() => import('./pages/Details'));
const About = lazy(() => import('./pages/About'));
const Favourites = lazy(() => import('./pages/Favourites'));

function App() {
  return (
    <FavoritesProvider>
      <Navigation />
      <div className="container">
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<List />} />
            <Route path="/list/:id" element={<Details />} />
            <Route path="/about" element={<About />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </Suspense>
      </div>
    </FavoritesProvider>
  );
}

export default App;