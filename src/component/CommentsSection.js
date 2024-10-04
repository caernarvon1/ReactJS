import React, { Component } from 'react';
import commentsData from './commentsData'; // Mengimpor data komentar
import LikeButton from './LikeButton'; // Mengimpor komponen LikeButton

class CommentsSection extends Component {
  constructor(props) {
    super(props);
    // State untuk menyimpan jumlah likes setiap komentar dan komentar baru
    this.state = {
      likes: commentsData.map(() => 0), // Inisialisasi jumlah likes = 0 untuk setiap komentar
      newComment: '' // Menyimpan komentar baru yang akan ditambahkan
    };
  }

  // Fungsi untuk memperbarui jumlah likes di state
  handleLikeChange = (index, newLikes) => {
    const updatedLikes = [...this.state.likes]; // Membuat salinan array likes
    updatedLikes[index] = newLikes; // Memperbarui jumlah likes pada komentar tertentu
    this.setState({ likes: updatedLikes }); // Menyimpan perubahan likes di state
  };

  // Fungsi untuk menangani perubahan input komentar
  handleInputChange = (event) => {
    this.setState({ newComment: event.target.value }); // Memperbarui state dengan nilai input
  };

  // Fungsi untuk menambah komentar baru
  handleAddComment = (event) => {
    event.preventDefault(); // Mencegah reload halaman
    if (this.state.newComment.trim()) { // Mengecek apakah input tidak kosong
      console.log('New Comment:', this.state.newComment); // Menampilkan komentar baru di konsol
      this.setState({ newComment: '' }); // Mengosongkan input setelah komentar ditambahkan
    }
  };

  render() {
    return (
      <div className="ui comments">
        <h3 className="ui dividing header">Comments</h3>

        {/* Loop melalui data komentar dan tampilkan setiap komentar */}
        {commentsData.map((comment, index) => (
          <div className="comment" key={index}>
            {/* Menampilkan avatar dari pengirim komentar */}
            <a className="avatar">
              <img src={comment.avatar} alt={`${comment.author}'s avatar`} />
            </a>
            <div className="content">
              <a className="author">{comment.author}</a> {/* Nama pengirim komentar */}
              <div className="metadata">
                <span className="date">{comment.date}</span> {/* Tanggal komentar */}
                <span style={{ margin: '0 5px' }}>|</span> {/* Tanda pemisah */}
                {/* Menampilkan jumlah likes untuk setiap komentar */}
                <span style={{ float: 'right', fontWeight: 'bold' }}>
                  {this.state.likes[index]} likes
                </span>
              </div>
              <div className="text">{comment.text}</div> {/* Isi komentar */}
              <div className="actions">
                {/* Komponen LikeButton, untuk menangani fitur like */}
                <LikeButton
                  index={index} // Indeks komentar
                  likes={this.state.likes[index]} // Jumlah likes
                  onLikeChange={this.handleLikeChange} // Fungsi untuk memperbarui likes
                />
              </div>
            </div>
          </div>
        ))}

        {/* Form untuk menambahkan komentar baru */}
        <form className="ui reply form" onSubmit={this.handleAddComment}>
          <div className="field">
            {/* Input textarea untuk menulis komentar baru */}
            <textarea
              placeholder="Add a comment..."
              rows="2"
              value={this.state.newComment} // Nilai input komentar
              onChange={this.handleInputChange} // Menangani perubahan input
            ></textarea>
          </div>
          {/* Tombol untuk mengirim komentar baru */}
          <button className="ui blue labeled submit icon button" type="submit">
            <i className="icon edit"></i> Add Reply
          </button>
        </form>
      </div>
    );
  }
}

export default CommentsSection;
