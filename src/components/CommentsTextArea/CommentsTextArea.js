import React, { useContext, useState } from "react";

import AuthContext from "../../context/AuthContext";

import "./CommentsTextArea.css";
import { Link } from "react-router-dom";

const CommentsTextArea = ({ comments, submitComment }) => {
  const authContext = useContext(AuthContext);

  const [newComment, setNewComment] = useState("");

  const changeHandler = (event) => setNewComment(event.target.value); 

  return (
    <div className="comments">
      <span className="comments__title">دیدگاهتان را بنویسید</span>
      <span className="comments__text">
        <a href="#">با عنوان محمدامین سعیدی راد وارد شده اید.</a>
        <a href="#">خارج میشوید? </a>
        بخش های موردنیاز علامت گذاری شده اند *
      </span>
      <div className="comments_content">
        {comments.map((comment) => (
          <>
            <div>{comment}</div>
          </>
        ))}
        <span className="comments__content-title">دیدگاه *</span>
        <textarea className="comments__content-textarea" valu={newComment} onChange={changeHandler}></textarea>
      </div>
      {authContext.isLoggedIn === true ? (
        <button
          type="submit"
          className="comments__button"
          onClick={() => submitComment(newComment)}
        >
          فرستادن دیدگاه
        </button>
      ) : (
        <div className="alert alert-danger">
          login konid
          <Link to="/login">Login</Link>
        </div>
      )}
    </div>
  );
};

export default CommentsTextArea;
