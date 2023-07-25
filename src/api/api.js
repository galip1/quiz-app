const shffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

export const fetchQuizData = async (difficulty, amount) => {
  const url = `https://opentdb.com/api.php?amount=${amount}&dificulty${difficulty}`;
  const data = await (await fetch(url)).json();
  return data.results.map((item) => ({
    ...item,
    answers: shffleArray([...item.incorrect_answers, item.correct_answer]),
  }));
};
