// src/component/CommentsSection.js

import React, { Component } from 'react'; // Mengimpor React dan Component untuk menggunakan class
import commentsData from './commentsData'; // Mengimpor data komentar dari commentsData.js

class CommentsSection extends Component {
  render() {
    return (
      <div className="ui comments">
        <h3 className="ui dividing header">Comments</h3>

        {commentsData.map((comment, index) => (
          <div className="comment" key={index}>
            <a className="avatar">
              <img src={comment.avatar} alt={`${comment.author}'s avatar`} />
            </a>
            <div className="content">
              <a className="author">{comment.author}</a>
              <div className="metadata">
                <span className="date">{comment.date}</span>
              </div>
              <div className="text">
                {comment.text}
              </div>
              <div className="actions">
                <a className="reply">Reply</a>
              </div>
            </div>
          </div>
        ))}

        {/* Form untuk menambahkan komentar baru */}
        <form className="ui reply form">
          <div className="field">
            <textarea placeholder="Add a comment..." rows="2"></textarea>
          </div>
          <button className="ui blue labeled submit icon button">
            <i className="icon edit"></i> Add Reply
          </button>
        </form>
      </div>
    );
  }
}

// Mengekspor komponen CommentsSection agar bisa digunakan di tempat lain
export default CommentsSection;
