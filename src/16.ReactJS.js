// src/16.ReactJS.js

import React from 'react'; // Mengimpor library React untuk digunakan dalam komponen
import ReactDOM from 'react-dom'; // Mengimpor ReactDOM untuk merender komponen ke DOM
import 'bootstrap/dist/css/bootstrap.min.css'; // Mengimpor stylesheet Bootstrap untuk styling

// Komponen Header
function Header() {
  return (
    <header className="bg-light py-2 mb-0"> {/* Menggunakan kelas Bootstrap untuk styling */}
      <div className="container"> {/* Kontainer Bootstrap untuk pengaturan lebar */}
        <h1 className="text-center">Alpenfohn Black Ridge</h1> {/* Judul di tengah */}
      </div>
    </header>
  );
}

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

// Komponen Utama App
function App() {
  return (
    <div>
      <Header /> {/* Memanggil komponen Header */}
      <Navbar /> {/* Memanggil komponen Navbar */}
      <div className="container mt-4"> {/* Kontainer untuk konten utama */}
        <h1>This is React</h1> {/* Konten utama */}
      </div>
    </div>
  );
}

// Ekspor komponen App sebagai default
export default App;

// Merender komponen App ke dalam DOM
const root = document.getElementById('root'); // Mendapatkan elemen dengan id 'root'
if (root) {
  ReactDOM.render(<App />, root); // Merender komponen App ke dalam elemen root
}
