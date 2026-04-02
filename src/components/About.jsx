import './About.css';

export default function About() {
  return (
    <div className="about-page">
      <h1 className="about-title">Twist Deck</h1>
      <p className="about-version">v0.1.0</p>

      <section className="about-section">
        <h2>How to use</h2>
        <p>
          Twist Deck is a random event generator for solo tabletop RPGs. Each
          card is a 2&times;7 grid of randomly-rolled prompts drawn from 14
          independent tables: Element, Number, Mythos, Theme, Dungeon, Weather,
          Terrain, Twist, Parity, Symbol, Letter, Phrase, Archetype, and Oracle.
        </p>
        <p>
          <strong>Draw a card</strong> &mdash; open the app or swipe up on the
          current card. Each cell shows a random result; tap any cell to see an
          expanded description.
        </p>
        <p>
          <strong>History</strong> &mdash; your last 10 drawn cards are kept for
          the current session. Long-press a card to delete it or save it to
          Favourites.
        </p>
        <p>
          <strong>Favourites</strong> &mdash; cards you want to keep permanently.
          Add notes to remember what story beat or encounter the card inspired.
        </p>
      </section>

      <section className="about-section">
        <h2>Credits &amp; License</h2>
        <p>
          Card tables and concept by the original author. This web app is a
          companion tool built for personal use.
        </p>
        <p className="about-license">
          Content and army mechanics &copy; their respective creators. App code
          provided as-is for personal, non-commercial use.
        </p>
      </section>
    </div>
  );
}
