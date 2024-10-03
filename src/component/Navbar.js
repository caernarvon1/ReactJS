import React from 'react'; // Mengimpor React

// Komponen Navbar
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom shadow p-3 mb-0"> {/* Navbar dengan Bootstrap */}
      <a className="navbar-brand ms-3" href="#">Alpenfohn</a> {/* Nama brand di navbar */}
      <button
        className="navbar-toggler" // Tombol untuk toggle navbar di perangkat kecil
        type="button"
        data-toggle="collapse" // Menggunakan data-toggle untuk mengontrol kolaps
        data-target="#navbarNav" // Target untuk kolaps navbar
        aria-controls="navbarNav"
        aria-expanded="false" // Status awal kolaps
        aria-label="Toggle navigation" // Label aksesibilitas
      >
        <span className="navbar-toggler-icon"></span> {/* Ikon toggle */}
      </button>
      <div className="collapse navbar-collapse" id="navbarNav"> {/* Konten navbar yang bisa dikolaps */}
        <ul className="navbar-nav"> {/* Daftar item navbar */}
          <li className="nav-item">
            <a className="nav-link active ms-3" href="/">Home</a> {/* Link Home */}
          </li>
          <li className="nav-item">
            <a className="nav-link ms-3" href="/about">About</a> {/* Link About */}
          </li>
          <li className="nav-item">
            <a className="nav-link ms-3" href="/contact">Contact</a> {/* Link Contact */}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar; // Mengekspor komponen Navbar
