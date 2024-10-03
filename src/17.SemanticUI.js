import React from 'react'; // Mengimpor React untuk dapat menggunakan JSX

// Komponen stateless (functional component) bernama CommentsSection
const CommentsSection = () => (
  // Dimulai dengan div utama dengan class "ui comments" dari Semantic UI
  <div className="ui comments">
    
    {/* Header untuk bagian komentar */}
    <h3 className="ui dividing header">Comments</h3>

    {/* Komentar pertama */}
    <div className="comment">
      {/* Gambar avatar untuk komentar pertama */}
      <a className="avatar">
      <img src="./images/matt.jpg" alt="Matt's avatar" /> {/* Tag img ditutup dengan benar */}
      </a>
      <div className="content">
        {/* Nama penulis komentar */}
        <a className="author">Matt</a>
        {/* Metadata untuk tanggal dan waktu komentar */}
        <div className="metadata">
          <span className="date">Today at 5:42PM</span>
        </div>
        {/* Isi komentar */}
        <div className="text">How artistic!</div>
        {/* Tindakan seperti membalas komentar */}
        <div className="actions">
          <a className="reply">Reply</a>
        </div>
      </div>
    </div>

    {/* Komentar kedua */}
    <div className="comment">
      <a className="avatar">
        <img src="./images/elliot.jpg" alt="Elliot's avatar" />
      </a>
      <div className="content">
        <a className="author">Elliot Fu</a>
        <div className="metadata">
          <span className="date">Yesterday at 12:30AM</span>
        </div>
        <div className="text">
          <p>This has been very useful for my research. Thanks as well!</p>
        </div>
        <div className="actions">
          <a className="reply">Reply</a>
        </div>
      </div>

      {/* Komentar yang terdapat di dalam komentar kedua (sub-comment) */}
      <div className="comments">
        <div className="comment">
          <a className="avatar">
            <img src="./images/jenny.jpg" alt="Jenny's avatar" />
          </a>
          <div className="content">
            <a className="author">Jenny Hess</a>
            <div className="metadata">
              <span className="date">Just now</span>
            </div>
            <div className="text">Elliot you are always so right :)</div>
            <div className="actions">
              <a className="reply">Reply</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Komentar ketiga */}
    <div className="comment">
      <a className="avatar">
        <img src="./images/joe.jpg" alt="Joe's avatar" />
      </a>
      <div className="content">
        <a className="author">Joe Henderson</a>
        <div className="metadata">
          <span className="date">5 days ago</span>
        </div>
        <div className="text">Dude, this is awesome. Thanks so much</div>
        <div className="actions">
          <a className="reply">Reply</a>
        </div>
      </div>
    </div>

    {/* Komentar kekempat */}
    <div className="comment">
      <a className="avatar">
        <img src="/images/avatar/small/Raha.jpg" alt="Raha's avatar" />
      </a>
      <div className="content">
        <a className="author">Raha</a>
        <div className="metadata">
          <span className="date">4 days ago</span>
        </div>
        <div className="text">Good Game</div>
        <div className="actions">
          <a className="reply">Reply</a>
        </div>
      </div>
    </div>

    {/* Form untuk menambahkan balasan komentar */}
    <form className="ui reply form">
      <div className="field">
        <textarea></textarea> {/* Area input teks untuk menulis balasan */}
      </div>
      <button className="ui blue labeled submit icon button">
        <i className="icon edit"></i> Add Reply {/* Tombol submit */}
      </button>
    </form>
  </div>
);

// Mengekspor komponen CommentsSection agar bisa digunakan di tempat lain
export default CommentsSection;
