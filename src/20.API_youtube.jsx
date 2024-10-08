import React, { createRef, useState } from 'react';

// Komponen utama aplikasi
const App = () => {
  const searchInputRef = createRef();
  const [videos, setVideos] = useState([]); // State videos diinisialisasi dengan array kosong
  const [selectedVideo, setSelectedVideo] = useState(null); // State untuk menyimpan video yang dipilih

  const handleSearch = async (event) => {
    event.preventDefault();
    const query = searchInputRef.current.value;
    const apiKey = 'AIzaSyAlBa2c7mIX2i0rZdl_FwblGpMgdEUSJW8'; // Ganti dengan API Key Anda
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${query}&key=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setVideos(data.items || []); // Menyimpan hasil pencarian
      setSelectedVideo(data.items[0] || null); // Memilih video pertama setelah pencarian
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  // Fungsi untuk memotong judul menjadi dua bagian
  const truncateTitle = (title, maxWords) => {
    const words = title.split(' '); // Memisahkan judul menjadi array kata
    const firstPart = words.slice(0, maxWords).join(' '); // Kata-kata pertama
    const remainingPart = words.slice(maxWords).join(' '); // Sisa kata-kata
    return { firstPart, remainingPart }; // Mengembalikan dua bagian
  };

  // Fungsi untuk memilih video saat thumbnail diklik
  const handleThumbnailClick = (video) => {
    setSelectedVideo(video); // Mengubah video yang dipilih
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ color: '#333', fontSize: '2rem', textAlign: 'center' }}>YouTube Video Search</h1>
      <form onSubmit={handleSearch} style={{ marginBottom: '20px', textAlign: 'center' }}>
        <input
          type="text"
          ref={searchInputRef}
          placeholder="Search for videos (e.g., music, tutorials, etc.)"
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
            backgroundColor: '#FF0000',
            color: 'white',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          Search
        </button>
      </form>

      <div style={{ display: 'flex', marginBottom: '20px' }}>
        {/* Bagian untuk pemutar video */}
        <div style={{ flex: '2', marginRight: '20px' }}>
          {selectedVideo && (
            <div>
              <iframe
                width="100%" // Mengatur lebar pemutar video agar responsif
                height="400"
                src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
                title={selectedVideo.snippet.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              {/* Judul video dan penulis berada di sini */}
              <h3 style={{ margin: '10px 0 0', textAlign: 'left' }}>{selectedVideo.snippet.title}</h3>
              <p style={{ margin: '0', textAlign: 'left' }}>By {selectedVideo.snippet.channelTitle}</p>
            </div>
          )}
        </div>

        {/* Bagian untuk thumbnail yang bisa di-scroll */}
        <div
          style={{
            flex: '1',
            overflowY: videos.length > 0 ? 'auto' : 'hidden', // Atur overflowY menjadi 'auto' hanya jika ada video
            height: '400px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {videos.map((video) => {
              const { firstPart, remainingPart } = truncateTitle(video.snippet.title, 5); // Mendapatkan dua bagian judul
              return (
                <div
                  key={video.id.videoId}
                  style={{
                    display: 'flex',
                    alignItems: 'center', // Mengatur agar gambar dan teks berada dalam satu baris
                    marginBottom: '10px',
                    justifyContent: 'flex-start', // Mengatur agar thumbnail dan judul berada di sebelah kiri
                    width: '100%',
                    cursor: 'pointer', // Menambahkan cursor pointer
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Menambahkan shadow pada thumbnail
                    padding: '10px', // Menambahkan padding untuk efek shadow
                    borderRadius: '5px', // Menambahkan border radius untuk sudut
                    backgroundColor: 'white', // Menambahkan latar belakang putih
                    transition: 'transform 0.2s', // Efek transisi saat hover
                  }}
                  onClick={() => handleThumbnailClick(video)} // Menambahkan onClick untuk thumbnail
                >
                  <img
                    src={`https://img.youtube.com/vi/${video.id.videoId}/0.jpg`}
                    alt={video.snippet.title}
                    style={{
                      width: '120px',
                      height: '90px',
                      borderRadius: '5px',
                      marginRight: '10px', // Menambahkan jarak antara gambar dan teks
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      margin: 0,
                      fontSize: '1rem',
                      textAlign: 'left',
                      overflow: 'hidden',
                      whiteSpace: 'normal', // Allow wrapping to the next line
                      maxHeight: '4.5em', // Limit the height to three lines (3 * 1.5em)
                      lineHeight: '1.5em', // Set line height for readability
                    }}>
                      {firstPart}<br /> {/* Menampilkan kata pertama */}
                      {remainingPart} {/* Menampilkan sisa kata */}
                    </h3>
                    <p style={{ margin: 0, fontSize: '0.8rem', textAlign: 'left', color: '#555' }}>
                      By {video.snippet.channelTitle} {/* Menampilkan penulis di bawah thumbnail */}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
