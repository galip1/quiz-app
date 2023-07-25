import React from "react";
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
  const approveChoice = (e) => {
    console.log(e.currentTarget.value);
    const checkAnswer = e.currentTarget.value;
  };

  return (
    <div className="question-card">
      <div>
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
