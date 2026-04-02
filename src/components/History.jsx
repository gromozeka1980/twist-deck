import { useState } from 'react';
import Card from './Card';
import './History.css';

export default function History({ history, onDelete, onFavourite }) {
  const [longPressId, setLongPressId] = useState(null);
  let pressTimer = null;

  const handlePointerDown = (cardId) => {
    pressTimer = setTimeout(() => {
      setLongPressId((prev) => (prev === cardId ? null : cardId));
    }, 500);
  };

  const handlePointerUp = () => {
    clearTimeout(pressTimer);
  };

  if (history.length === 0) {
    return (
      <div className="history-page">
        <p className="history-empty">No cards drawn yet. Go draw one!</p>
      </div>
    );
  }

  return (
    <div className="history-page">
      <div className="history-list">
        {history.map((card) => (
          <div
            key={card.id}
            className={`history-card-wrap ${longPressId === card.id ? 'actions-visible' : ''}`}
            onPointerDown={() => handlePointerDown(card.id)}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
          >
            {longPressId === card.id && (
              <div className="history-actions">
                <button
                  className="action-btn delete-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(card.id);
                    setLongPressId(null);
                  }}
                >
                  &minus;
                </button>
                <button
                  className="action-btn fav-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onFavourite(card);
                    setLongPressId(null);
                  }}
                >
                  &#9733;
                </button>
              </div>
            )}
            <Card card={card} interactive={false} />
          </div>
        ))}
      </div>

      <p className="history-hint">
        Long press a card and tap <strong>&minus;</strong> to delete it from
        history, or <strong>&#9733;</strong> to save it to Favourites.
      </p>
    </div>
  );
}
