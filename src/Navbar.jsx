// Navbar.jsx
import { useNavigate } from 'react-router-dom';

export default function Navbar({ onSelect }) {
  const menu = [
    { id: "webdev", label: "Web Developer" },
    { id: "content", label: "Content Writer" },
    { id: "designer", label: "Designer" },
    { id: "tutor", label: "Tutor" },
  ];
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-sm flex justify-center gap-6 py-4 z-50">
      <button
        onClick={() => navigate('/')}
        className="px-5 py-2 bg-blue-600 text-white rounded-2xl hover:bg-blue-400 transition"
      >
        Go Back to Home
      </button>
      {menu.map((item) => (
        <button
          key={item.id}
          onClick={() => onSelect(item.id)}
          className="border border-white/70 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-300"
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}
