import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Introduce from "./pages/introduce/introduce";
import Quiz from "./pages/quiz/quiz";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Introduce />}></Route>
          <Route path="/quiz/:difficulty/:amount" element={<Quiz />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
