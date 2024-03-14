import { useState } from "react";
import "./App.css";
import question from "./constants/questions.json";
import Question from "./components/Question";

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleNextQuestion = () => {};

  return (
    <div className="App">
      <h1>Quiz Time</h1>

      {/* questions components */}
      <Question
        question={question[currentQuestion]}
        onAnswerClick={handleNextQuestion}
      />

      {/* Result components */}
    </div>
  );
};

export default App;
