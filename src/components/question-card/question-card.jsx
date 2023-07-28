import React, { useEffect, useState } from "react";
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
      e.currentTarget.value == questionsData[count]?.correct_answer;
    console.log(checkAnswer);
    if (checkAnswer) {
      setScore(score + 100);
    }
    setCount(count + 1);
    if (count == 9) setModal(true);
    setTimer(30);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
      if (timer == 0 && count < 30) {
        setCount(count + 1);
        setTimer(30);
      } else if (count >= 30) {
        setModal(true);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timer]);

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
