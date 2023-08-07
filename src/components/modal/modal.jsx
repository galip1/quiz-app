import React from "react";
import "./modal.css";

const Modal = ({ score, correctAnswers, incorrectAnswers, blankAnswers }) => {
  return (
    <div className="modal">
      <div className="modal-title">Score: {score}</div>
      <div className="modal-result">Correct Answers: {correctAnswers}</div>
      <div className="modal-result">Incorrect Answers: {incorrectAnswers}</div>
      <div className="modal-result">Blank Answers: {blankAnswers}</div>
      <div onClick={() => (window.location = "/")} className="modal-btn">
        Yeniden Başla
      </div>
    </div>
  );
};

export default Modal;
