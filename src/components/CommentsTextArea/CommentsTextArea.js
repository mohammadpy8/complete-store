import React from "react";

import "./CommentsTextArea.css";

const CommentsTextArea = ({comments}) => {
  return (
    <div className="comments">
      <span className="comments__title">دیدگاهتان را بنویسید</span>
      <span className="comments__text">
        <a href="#">با عنوان محمدامین سعیدی راد وارد شده اید.</a>
        <a href="#">خارج میشوید? </a>
        بخش های موردنیاز علامت گذاری شده اند *
      </span>
      <div className="comments_content">
        {
          comments.map(comment => (
            <>
              <div>
                
              </div>
            </>
          ))
        }
        <span className="comments__content-title">دیدگاه *</span>
        <textarea className="comments__content-textarea"></textarea>
      </div>
      <button type="submit" className="comments__button" onClick={() => console.log("set comments")}>
        فرستادن دیدگاه
      </button>
    </div>
  );
};

export default CommentsTextArea;
