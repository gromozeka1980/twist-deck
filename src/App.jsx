import { useState, useCallback, useEffect } from 'react';
import NavBar from './components/NavBar';
import YourCard from './components/YourCard';
import History from './components/History';
import Favourites from './components/Favourites';
import About from './components/About';
import './App.css';

const MAX_HISTORY = 10;
const FAV_KEY = 'twist-deck-favourites';

function loadFavourites() {
  try {
    return JSON.parse(localStorage.getItem(FAV_KEY)) || [];
  } catch {
    return [];
  }
}

function saveFavourites(favs) {
  localStorage.setItem(FAV_KEY, JSON.stringify(favs));
}

export default function App() {
  const [tab, setTab] = useState('card');
  const [history, setHistory] = useState([]);
  const [favourites, setFavourites] = useState(loadFavourites);

  useEffect(() => {
    saveFavourites(favourites);
  }, [favourites]);

  const handleCardDrawn = useCallback((card) => {
    setHistory((prev) => {
      const next = [card, ...prev];
      return next.slice(0, MAX_HISTORY);
    });
  }, []);

  const handleDeleteHistory = useCallback((cardId) => {
    setHistory((prev) => prev.filter((c) => c.id !== cardId));
  }, []);

  const handleAddFavourite = useCallback((card) => {
    setFavourites((prev) => {
      if (prev.some((f) => f.card.id === card.id)) return prev;
      return [...prev, { card, note: '' }];
    });
  }, []);

  const handleUpdateNote = useCallback((cardId, note) => {
    setFavourites((prev) =>
      prev.map((f) => (f.card.id === cardId ? { ...f, note } : f)),
    );
  }, []);

  const handleDeleteFavourite = useCallback((cardId) => {
    setFavourites((prev) => prev.filter((f) => f.card.id !== cardId));
  }, []);

  return (
    <div className="app">
      <main className="app-content">
        {tab === 'card' && <YourCard onCardDrawn={handleCardDrawn} />}
        {tab === 'history' && (
          <History
            history={history}
            onDelete={handleDeleteHistory}
            onFavourite={handleAddFavourite}
          />
        )}
        {tab === 'favourites' && (
          <Favourites
            favourites={favourites}
            onUpdateNote={handleUpdateNote}
            onDelete={handleDeleteFavourite}
          />
        )}
        {tab === 'about' && <About />}
      </main>
      <NavBar active={tab} onChange={setTab} />
    </div>
  );
}
