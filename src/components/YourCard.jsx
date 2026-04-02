import { useState, useCallback, useEffect } from 'react';
import Card from './Card';
import { generateCard } from '../data/cardEngine';
import useSwipeUp from '../hooks/useSwipeUp';
import './YourCard.css';

export default function YourCard({ onCardDrawn }) {
  const [card, setCard] = useState(null);
  const [animClass, setAnimClass] = useState('');

  const drawCard = useCallback(() => {
    setAnimClass('card-exit');
    setTimeout(() => {
      const newCard = generateCard();
      setCard(newCard);
      onCardDrawn(newCard);
      setAnimClass('card-enter');
      setTimeout(() => setAnimClass(''), 350);
    }, 250);
  }, [onCardDrawn]);

  // Draw on first mount
  useEffect(() => {
    const newCard = generateCard();
    setCard(newCard);
    onCardDrawn(newCard);
    setAnimClass('card-enter');
    setTimeout(() => setAnimClass(''), 350);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const swipeHandlers = useSwipeUp(drawCard);

  return (
    <div className="your-card-page" {...swipeHandlers}>
      <div className={`card-wrapper ${animClass}`}>
        <Card card={card} />
      </div>
      <p className="draw-hint">Swipe the card up to draw a new one</p>
      <button className="draw-btn" onClick={drawCard}>
        Draw a card
      </button>
    </div>
  );
}
