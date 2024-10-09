import React, { useState } from 'react';
import axios from 'axios'; // Mengimpor axios

// Komponen untuk menampilkan pencarian video YouTube
const Youtube = () => {
  const [searchTerm, setSearchTerm] = useState(''); // State untuk menyimpan input pencarian
  const [videos, setVideos] = useState([]); // State untuk menyimpan video hasil pencarian
  const [selectedVideo, setSelectedVideo] = useState(null); // State untuk menyimpan video yang dipilih

  const handleSearch = async (event) => {
    event.preventDefault();
    const apiKey = 'AIzaSyAlBa2c7mIX2i0rZdl_FwblGpMgdEUSJW8'; // Ganti dengan API Key Anda
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${searchTerm}&key=${apiKey}`;

    try {
      const response = await axios.get(url); // Menggunakan axios untuk melakukan GET request
      setVideos(response.data.items || []); // Menyimpan hasil pencarian
      setSelectedVideo(response.data.items[0] || null); // Memilih video pertama setelah pencarian
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  const handleThumbnailClick = (video) => {
    setSelectedVideo(video); // Mengubah video yang dipilih
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ color: '#333', fontSize: '2rem', textAlign: 'center' }}>YouTube Video Search</h1>
      <form onSubmit={handleSearch} style={{ marginBottom: '20px', textAlign: 'center' }}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Mengupdate state saat input berubah
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
                width="100%"
                height="400"
                src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
                title={selectedVideo.snippet.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <h3 style={{ margin: '10px 0 0', textAlign: 'left' }}>{selectedVideo.snippet.title}</h3>
              <p style={{ margin: '0', textAlign: 'left' }}>By {selectedVideo.snippet.channelTitle}</p>
            </div>
          )}
        </div>

        {/* Bagian untuk thumbnail yang bisa di-scroll */}
        <div
          style={{
            flex: '1',
            overflowY: videos.length > 0 ? 'auto' : 'hidden',
            height: '400px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {videos.map((video) => (
              <div
                key={video.id.videoId}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '10px',
                  cursor: 'pointer',
                  padding: '10px',
                  borderRadius: '5px',
                  backgroundColor: 'white',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                }}
                onClick={() => handleThumbnailClick(video)}
              >
                <img
                  src={`https://img.youtube.com/vi/${video.id.videoId}/0.jpg`}
                  alt={video.snippet.title}
                  style={{
                    width: '120px',
                    height: '90px',
                    borderRadius: '5px',
                    marginRight: '10px',
                  }}
                />
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: 0, fontSize: '1rem' }}>{video.snippet.title}</h3>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: '#555' }}>
                    By {video.snippet.channelTitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
