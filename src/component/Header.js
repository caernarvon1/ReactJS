import React from 'react'; // Mengimpor React

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

export default Header; // Mengekspor komponen Header
