import React, { useState } from 'react'; // Mengimpor React dan useState dari React

// Komponen utama aplikasi
const App = () => {
  // State untuk menyimpan input pencarian dan hasil gambar
  const [query, setQuery] = useState(''); // State untuk menyimpan input pencarian
  const [images, setImages] = useState([]); // State untuk menyimpan hasil gambar

  // Fungsi untuk menghandle perubahan input
  const handleInputChange = (event) => {
    setQuery(event.target.value); // Memperbarui state query dengan input pengguna
  };

  // Fungsi untuk menghandle pencarian gambar
  const handleSearch = async (event) => {
    event.preventDefault(); // Mencegah refresh halaman ketika form disubmit
    const accessKey = 'FSjPTiZoWfnbAHKN1Eysq2puHR2hM_UD_9OxpZXMhs0'; // Ganti dengan Access Key Anda
    // URL untuk mengambil gambar dari API Unsplash berdasarkan query pencarian
    const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`;

    try {
      const response = await fetch(url); // Mengambil data dari API
      const data = await response.json(); // Mengonversi respons menjadi format JSON
      setImages(data.results); // Mengatur state images dengan hasil pencarian
    } catch (error) {
      console.error('Error fetching images:', error); // Menangani error jika terjadi
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '20px' }}>
      <h1 style={{ color: '#333', fontSize: '2rem' }}>Image Search</h1> {/* Judul aplikasi */}
      <form onSubmit={handleSearch} style={{ marginBottom: '20px' }}> {/* Form untuk pencarian gambar */}
        <input
          type="text" // Input untuk pencarian
          placeholder="Search for images (e.g., cat, flower)" // Placeholder untuk input
          value={query} // Nilai input berasal dari state query
          onChange={handleInputChange} // Menghandle perubahan input
          style={{
            padding: '10px',
            width: '70%',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '1rem',
          }}
        />
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
        </button> {/* Tombol untuk mengirim pencarian */}
      </form>

      {images.length > 0 && ( // Jika ada gambar hasil pencarian
        <h2 style={{ color: '#555', fontSize: '1.5rem' }}>Results:</h2> // Menampilkan judul hasil
      )}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}> {/* Kontainer untuk hasil gambar */}
        {images.map((image) => ( // Mengiterasi setiap gambar dalam hasil pencarian
          <div key={image.id} style={{ margin: '10px' }}> {/* Kontainer untuk masing-masing gambar */}
            <img
              src={image.urls.small}
              alt={image.alt_description}
              style={{
                width: '150px',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
              }} 
            /> {/* Menampilkan gambar */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App; // Mengekspor komponen App agar bisa digunakan di file lain
