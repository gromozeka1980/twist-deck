import './NavBar.css';

const TABS = [
  { id: 'card', label: 'Your Card', icon: '🂠' },
  { id: 'history', label: 'History', icon: '⏱' },
  { id: 'favourites', label: 'Favourites', icon: '★' },
  { id: 'about', label: 'About', icon: 'ℹ' },
];

export default function NavBar({ active, onChange }) {
  return (
    <nav className="navbar">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          className={`nav-tab ${active === tab.id ? 'active' : ''}`}
          onClick={() => onChange(tab.id)}
        >
          <span className="nav-icon">{tab.icon}</span>
          <span className="nav-label">{tab.label}</span>
        </button>
      ))}
    </nav>
  );
}
