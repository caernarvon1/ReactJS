import { Link, useLocation } from 'react-router-dom';
import Clock from './clock'; // Mengimpor komponen Clock dari file Clock.js

// Komponen Navbar
function Navbar() {
  const location = useLocation(); // Mendapatkan lokasi saat ini

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom shadow p-3 mb-0">
      <a className="navbar-brand ms-3" href="#">Alpenfohn</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className={`nav-link ms-3 ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ms-3 ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ms-3 ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ms-3 ${location.pathname === '/Youtube' ? 'active' : ''}`} to="/Youtube">Youtube</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ms-3 ${location.pathname === '/Form' ? 'active' : ''}`} to="/Form">Form</Link>
          </li>
        </ul>
        <div className="ms-auto">
          <Clock />
        </div>
      </div>
    </nav>
  );
}

export default Navbar; // Mengekspor komponen Navbar
