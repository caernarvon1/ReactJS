// src/component/CommentsSection.js

import React from 'react'; // Mengimpor React untuk dapat menggunakan JSX
import commentsData from './commentsData'; // Mengimpor data komentar dari commentsData.js

const CommentsSection = () => (
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

        {/* Render sub-comments jika ada */}
        {comment.subComments && comment.subComments.length > 0 && (
          <div className="comments">
            {comment.subComments.map((subComment, subIndex) => (
              <div className="comment" key={subIndex}>
                <a className="avatar">
                  <img src={subComment.avatar} alt={`${subComment.author}'s avatar`} />
                </a>
                <div className="content">
                  <a className="author">{subComment.author}</a>
                  <div className="metadata">
                    <span className="date">{subComment.date}</span>
                  </div>
                  <div className="text">{subComment.text}</div>
                  <div className="actions">
                    <a className="reply">Reply</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    ))}

    <form className="ui reply form">
      <div className="field">
        <textarea></textarea>
      </div>
      <button className="ui blue labeled submit icon button">
        <i className="icon edit"></i> Add Reply
      </button>
    </form>
  </div>
);

// Mengekspor komponen CommentsSection agar bisa digunakan di tempat lain
export default CommentsSection;
