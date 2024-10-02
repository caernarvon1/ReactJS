// src/index.js

import React from 'react'; // Mengimpor library React untuk membangun komponen
import ReactDOM from 'react-dom/client'; // Mengimpor ReactDOM untuk merender komponen ke dalam DOM
import App from './16.ReactJS'; // Mengimpor komponen App dari file 16.ReactJS.js

// Mendapatkan elemen root dari DOM
const root = ReactDOM.createRoot(document.getElementById('root')); // Mengambil elemen dengan id 'root' dan membuat root React

// Merender komponen App ke dalam elemen root
root.render(<App />); // Menggunakan metode render untuk menampilkan komponen App
