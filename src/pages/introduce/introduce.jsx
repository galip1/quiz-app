import React, { useState } from "react";
import "./introduce.css";
import Dropdown from "../../components/dropdown/dropdown";
import { useNavigate } from "react-router-dom";
const Introduce = () => {
  const difficulty = ["easy", "medium", "hard"];
  const [difficultyChange, setDifficultyChange] = useState("");
  const navigate = useNavigate();
  const totalQuestions = 10;
  const startQuiz = () => {
    if (difficultyChange) {
      navigate(`/quiz/${difficultyChange}/${totalQuestions}`);
    }
  };

  return (
    <div className="introduce">
      <div className="introduce-container">
        <img
          src="https://img.freepik.com/premium-vector/quiz-text-speech-symbols-concept_149152-641.jpg"
          alt=""
          width="100"
          height="100"
        />
        <Dropdown data={difficulty} setDifficultyChange={setDifficultyChange} />
        <div onClick={startQuiz} className="introduce-btn">
          Quiz'e başla
        </div>
      </div>
    </div>
  );
};

export default Introduce;
