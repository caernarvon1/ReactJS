import React, { Component } from 'react';

class LikeButton extends Component {
  // Fungsi yang akan dijalankan saat tombol "Like" ditekan
  handleLikeClick = () => {
    const { index, likes, onLikeChange } = this.props; 
    // 'index' adalah nomor komentar, 'likes' adalah jumlah like saat ini
    // 'onLikeChange' adalah fungsi dari komponen induk untuk mengubah jumlah likes
    
    const newLikes = likes + 1; // Tambah 1 like setiap kali tombol ditekan
    onLikeChange(index, newLikes); // Kirim jumlah like yang baru ke komponen induk
  };

  render() {
    const { likes } = this.props; // Menerima jumlah likes dari komponen induk

    return (
      <button onClick={this.handleLikeClick} className="ui blue button">
        {/* Jika likes lebih dari 0, tampilkan "Liked", kalau tidak tetap "Like" */}
        {likes > 0 ? 'Liked' : 'Like'}
      </button>
    );
  }
}

export default LikeButton;


// Ternary Condition ({likes > 0 ? 'Liked' : 'Like'}): Ini adalah cara singkat untuk mengatakan, 
// "Jika likes lebih dari 0, tampilkan tulisan 'Liked'. Jika tidak, tampilkan 'Like'." 
// Jadi, ketika tombol ditekan dan jumlah likes bertambah, teksnya akan berubah dari "Like" menjadi "Liked".