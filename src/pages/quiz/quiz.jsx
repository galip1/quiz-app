import React, { useEffect, useState } from "react";
import "./quiz.css";
import { useParams } from "react-router-dom";
import * as api from "../../api/api";
import QuestionCard from "../../components/question-card/question-card";
import Modal from "../../components/modal/modal";
import Loading from "../../components/loading/loading";

const Quiz = () => {
  const { difficulty, amount } = useParams();
  const [questionsData, setQuestionsData] = useState([]);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const data = await api.fetchQuizData(difficulty, amount);
      setQuestionsData(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="quiz">
      {loading ? (
        <Loading />
      ) : (
        <>
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
          )}{" "}
        </>
      )}
    </div>
  );
};

export default Quiz;
