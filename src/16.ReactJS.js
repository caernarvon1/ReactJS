// src/16.ReactJS.js

import React from 'react'; // Mengimpor library React untuk digunakan dalam komponen
import ReactDOM from 'react-dom'; // Mengimpor ReactDOM untuk merender komponen ke DOM
import Header from './component/Header'; // Pastikan path ini benar
import Navbar from './component/Navbar'; // Pastikan path ini benar

import 'bootstrap/dist/css/bootstrap.min.css'; // Mengimpor stylesheet Bootstrap untuk styling
import CommentsSection from './component/CommentsSection'; // Mengimpor komponen CommentsSection

// Komponen Utama App
function App() {
  return (
    <div>
      <Header /> {/* Memanggil komponen Header */}
      <Navbar /> {/* Memanggil komponen Navbar */}
      <div className="container mt-4">
        <h1>This is React</h1>
        <CommentsSection /> {/* Memanggil komponen CommentsSection */}
      </div>
    </div>
  );
}

// Ekspor komponen App sebagai default
export default App;

// Merender komponen App ke dalam DOM
const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
}