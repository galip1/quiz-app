import React, { useState } from "react";
import "./question-card.css";

const QuestionCard = ({
  questionsData,
  score,
  setScore,
  count,
  setCount,
  modal,
  setModal,
}) => {
  const [timer, setTimer] = useState(30);

  const approveChoice = (e) => {
    console.log(e.currentTarget.value);
    const checkAnswer =
      e.currentTarget.value == questionsData[count]?.correct.answer;
    console.log(checkAnswer);
  };

  return (
    <div className="question-card">
      <div className="question-card-timer">{timer}</div>
      <div className="question-card-title">
        {count + 1}/10 - {questionsData[count]?.question}
      </div>
      {questionsData[count]?.answers?.map((answer, i) => (
        <button key={i} onClick={approveChoice} value={answer}>
          {answer}
        </button>
      ))}
    </div>
  );
};

export default QuestionCard;
