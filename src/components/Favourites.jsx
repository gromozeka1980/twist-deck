import Card from './Card';
import './Favourites.css';

export default function Favourites({ favourites, onUpdateNote, onDelete }) {
  if (favourites.length === 0) {
    return (
      <div className="fav-page">
        <p className="fav-empty">
          No favourites yet. Long-press a card in History and tap &#9733; to
          save it here.
        </p>
      </div>
    );
  }

  return (
    <div className="fav-page">
      <div className="fav-list">
        {favourites.map((fav) => (
          <div key={fav.card.id} className="fav-item">
            <div className="fav-card-header">
              <button
                className="fav-delete-btn"
                onClick={() => onDelete(fav.card.id)}
                title="Remove from favourites"
              >
                &times;
              </button>
            </div>
            <Card card={fav.card} interactive={true} />
            <textarea
              className="fav-note"
              value={fav.note}
              onChange={(e) => onUpdateNote(fav.card.id, e.target.value)}
              placeholder="Tap here to write down your interpretation of this card in the context of your game and the story beat it helped generate."
              rows={3}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
