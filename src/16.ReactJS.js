// src/16.ReactJS.js

import React from 'react'; // Mengimpor library React untuk digunakan dalam komponen
import ReactDOM from 'react-dom'; // Mengimpor ReactDOM untuk merender komponen ke DOM
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Mengimpor Router dan Route dari react-router-dom

import Header from './component/Header'; // Pastikan path ini benar
import Navbar from './component/Navbar'; // Pastikan path ini benar
import CommentsSection from './component/CommentsSection'; // Mengimpor komponen CommentsSection
import About from './component/About'; // Mengimpor komponen About (pastikan path ini benar)
import Youtube from './component/Youtube'; // Mengimpor komponen About (pastikan path ini benar)
import Form from './component/Form'; // Mengimpor komponen About (pastikan path ini benar)

import 'bootstrap/dist/css/bootstrap.min.css'; // Mengimpor stylesheet Bootstrap untuk styling

// Komponen Utama App
function App() {
  return (
    <Router> {/* Menambahkan Router */}
      <Header /> {/* Memanggil komponen Header */}
      <Navbar /> {/* Memanggil komponen Navbar */}
      <div className="container mt-4">
        <Routes> {/* Menggunakan Routes sebagai pengganti Switch */}
          <Route path="/" element={<><h1>This is React</h1><CommentsSection /></>} /> {/* Halaman Utama */}
          <Route path="/about" element={<About />} /> {/* Menampilkan komponen About */}
          <Route path="/contact" element={<h1>Halaman Kontak</h1>} /> {/* Halaman Kontak */}
          <Route path="/youtube" element={<Youtube />}/> {/* Menampilkan komponen Youtube */}
          <Route path="/Form" element={<Form />}/>
          {/* Tambahkan Route lain sesuai kebutuhan */}
        </Routes>
      </div>
    </Router>
  );
}

// Ekspor komponen App sebagai default
export default App;

// Merender komponen App ke dalam DOM
const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
}
