// src/index.js

import React from 'react'; // Mengimpor library React untuk membangun komponen
import ReactDOM from 'react-dom/client'; // Mengimpor ReactDOM untuk merender komponen ke dalam DOM
import { Provider } from 'react-redux'; // Mengimpor Provider dari react-redux untuk menghubungkan Redux store
import store from './store'; // Mengimpor store yang telah dikonfigurasi
//import Form from './component/FinalForm';

import App from './16.ReactJS'; // Mengimpor komponen utama aplikasi

// Mendapatkan elemen root dari DOM
const root = ReactDOM.createRoot(document.getElementById('root')); // Mengambil elemen dengan id 'root' dan membuat root React

// Merender komponen App ke dalam elemen root
root.render(
    <Provider store={store}>  {/* Bungkus dengan Provider untuk mengakses Redux store di seluruh aplikasi */}
        <App />  {/* Merender komponen App */}
    </Provider>
);
