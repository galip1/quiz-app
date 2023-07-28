import React, { useEffect, useState } from "react";
import "./quiz.css";
import { useParams } from "react-router-dom";
import * as api from "../../api/api";
import QuestionCard from "../../components/question-card/question-card";
import Modal from "../../components/modal/modal";

const Quiz = () => {
  const { difficulty, amount } = useParams();
  const [questionsData, setQuestionsData] = useState([]);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [modal, setModal] = useState(false);
  useEffect(() => {
    const getData = async () => {
      const data = await api.fetchQuizData(difficulty, amount);
      setQuestionsData(data);
    };
    getData();
  }, []);
  console.log(questionsData);
  return (
    <div className="quiz">
      {modal ? (
        <Modal score={score} />
      ) : (
        <QuestionCard
          questionsData={questionsData}
          count={count}
          setCount={setCount}
          score={score}
          modal={modal}
          setModal={setModal}
          setScore={setScore}
        />
      )}
    </div>
  );
};

export default Quiz;
