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
  const [isCorrect, setIsCorrect] = useState(null);
  const [selectedChoice, setSelectedChoice] = useState(null);

  const approveChoice = (e) => {
    const selectedAnswer = e.currentTarget.value;
    const checkAnswer = selectedAnswer === questionsData[count]?.correct_answer;
    setIsCorrect(checkAnswer);
    setSelectedChoice(selectedAnswer);

    // Diğer soruya geçiş için 2 saniye bekleyin ve sonra state'i sıfırlayın
    setTimeout(() => {
      setIsCorrect(null);
      setSelectedChoice(null);
      setCount(count + 1);
      if (count === 9) setModal(true);
      setTimer(30);
    }, 2000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
      if (timer === 0 && count < 30) {
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
      {questionsData[count]?.answers?.map((answer, i) => {
        const isCorrectAnswer = answer === questionsData[count]?.correct_answer;
        const isWrongChoice = selectedChoice === answer && !isCorrectAnswer;

        let className = "";
        if (isCorrectAnswer && selectedChoice) {
          className = "correct-answer";
        } else if (isWrongChoice) {
          className = "wrong-answer";
        }

        return (
          <button
            key={i}
            onClick={approveChoice}
            value={answer}
            className={className}
            disabled={selectedChoice !== null} // Kullanıcının bir şık seçtikten sonra diğer şıklara tıklanmasını engellemek için
          >
            {answer}
            {/* {isWrongChoice && (
              <span className="correct-answer-msg">
                Doğru Cevap: {questionsData[count]?.correct_answer}
              </span>
            )}
            {isCorrectAnswer && selectedChoice && (
              <span className="correct-answer-msg">Doğru Cevap</span>
            )} */}
          </button>
        );
      })}
    </div>
  );
};

export default QuestionCard;
