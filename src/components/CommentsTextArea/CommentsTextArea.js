import React, { useContext } from "react";

import AuthContext from "../../context/AuthContext";

import "./CommentsTextArea.css";
import { Link } from "react-router-dom";

const CommentsTextArea = ({ comments }) => {
  const authContext = useContext(AuthContext);

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
        <textarea className="comments__content-textarea"></textarea>
      </div>
      {authContext.isLoggedIn === true ? (
        <button
          type="submit"
          className="comments__button"
          onClick={() => console.log("set comments")}
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
