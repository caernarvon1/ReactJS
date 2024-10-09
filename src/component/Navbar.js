import React from 'react'; // Mengimpor React
import Clock from './clock'; // Mengimpor komponen Clock dari file Clock.js

// Komponen Navbar
function Navbar() {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom shadow p-3 mb-0">
      <a className="navbar-brand ms-3 font-weight-bold" href="#">Alpenfohn</a> {/* Nama brand di navbar */}
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
            <a className="nav-link active ms-3" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link ms-3" href="/about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link ms-3" href="/contact">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link ms-3" href="/Youtube">Youtube</a>
          </li>
        </ul>
        {/* Jam ditampilkan di sebelah kanan dengan ms-auto */}
        <div className="ms-auto">
          <Clock /> {/* Menampilkan jam dengan komponen Clock */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar; // Mengekspor komponen Navbar
