import React, { createRef, useState } from 'react'; // Mengimpor React, createRef, dan hook useState dari React

// Komponen utama aplikasi
const App = () => {
  // Menggunakan createRef untuk input pencarian
  const searchInputRef = createRef(); // Membuat referensi untuk elemen input pencarian

  // State untuk menyimpan hasil gambar yang dikembalikan dari API Unsplash
  const [images, setImages] = useState([]); // State untuk menyimpan array gambar hasil pencarian

  // Fungsi untuk meng-handle pencarian gambar saat form dikirim
  const handleSearch = async (event) => {
    event.preventDefault(); // Mencegah halaman di-refresh saat form dikirim

    const query = searchInputRef.current.value; // Mengambil nilai input dari ref
    const accessKey = 'FSjPTiZoWfnbAHKN1Eysq2puHR2hM_UD_9OxpZXMhs0'; // Access Key dari Unsplash API
    const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=20&client_id=${accessKey}`; // Menyiapkan URL untuk API

    try {
      const response = await fetch(url); // Mengirim request GET ke API Unsplash
      const data = await response.json(); // Mengonversi respons dari API menjadi format JSON
      setImages(data.results); // Menyimpan hasil pencarian (array gambar) ke state images
    } catch (error) {
      console.error('Error fetching images:', error); // Jika ada error saat fetch, tampilkan di console
    }
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', padding: '20px' }}>
      {/* Judul aplikasi */}
      <h1 style={{ color: '#333', fontSize: '2rem' }}>Image Search</h1> 

      {/* Form untuk pencarian gambar */}
      <form onSubmit={handleSearch} style={{ marginBottom: '20px' }}>
        {/* Input untuk pengguna memasukkan kata kunci pencarian gambar */}
        <input
          type="text" // Tipe input teks
          ref={searchInputRef} // Mengaitkan input dengan ref
          placeholder="Search for images (e.g., cat, flower, or anything you like)" // Placeholder input
          style={{
            padding: '10px',
            width: '70%',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '1rem',
          }}
        />
        {/* Tombol untuk mengirim form pencarian */}
        <button
          type="submit"
          style={{
            padding: '10px 15px',
            marginLeft: '10px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#007bff',
            color: 'white',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          Search
        </button>
      </form>

      {/* Jika ada hasil gambar, tampilkan judul "Results" */}
      {images.length > 0 && ( 
        <h2 style={{ color: '#555', fontSize: '1.5rem' }}>Results:</h2>
      )}

      {/* Bagian ini menampilkan gambar-gambar hasil pencarian dalam layout kolom */}
      <div style={{
        columnCount: 3, // Mengatur jumlah kolom menjadi 3
        columnGap: '10px', // Memberi jarak antar kolom sebesar 10px
      }}>
        {/* Melakukan iterasi melalui array images dan menampilkan setiap gambar */}
        {images.map((image) => (
          <div key={image.id} style={{ breakInside: 'avoid', marginBottom: '10px' }}> 
            {/* Menghindari gambar terpotong antar kolom */}
            <img
              src={image.urls.small} // URL gambar ukuran kecil dari API Unsplash
              alt={image.alt_description} // Alternatif teks untuk gambar, diambil dari deskripsi
              style={{
                width: '100%', // Gambar mengambil lebar 100% dari kolom
                height: 'auto', // Tinggi otomatis untuk menjaga proporsi gambar
                borderRadius: '8px', // Sudut gambar dibulatkan dengan radius 8px
                boxShadow: '0 2px 5px rgba(0,0,0,0.2)', // Memberi efek bayangan ringan pada gambar
              }} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App; // Mengekspor komponen App agar bisa digunakan di file lain
