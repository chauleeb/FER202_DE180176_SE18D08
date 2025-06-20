import React, { useReducer, useState, useEffect } from "react";
import { Button, Container, Card, ProgressBar } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const initialState = {
  questions: [
    {
      id: 1,
      question: "What is the capital of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      answer: "Canberra",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      id: 3,
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
      answer: "Pacific Ocean",
    },
  ],
  currentQuestion: 0,
  selectedOption: "",
  score: 0,
  showScore: false,
};

function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      return { ...state, selectedOption: action.payload };
    case "NEXT_QUESTION":
      const isCorrect = state.selectedOption === state.questions[state.currentQuestion].answer;
      return {
        ...state,
        score: isCorrect ? state.score + 1 : state.score,
        currentQuestion: state.currentQuestion + 1,
        selectedOption: "",
        showScore: state.currentQuestion + 1 === state.questions.length,
      };
    case "RESTART_QUIZ":
      return { ...initialState };
    default:
      return state;
  }
}

function QuestionBank() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const { questions, currentQuestion, selectedOption, score, showScore } = state;
  const [feedback, setFeedback] = useState(null);
  const [timeLeft, setTimeLeft] = useState(10);
  const [highScore, setHighScore] = useState(() => {
    return localStorage.getItem("highScore") ? parseInt(localStorage.getItem("highScore")) : 0;
  });

  useEffect(() => {
    if (!showScore) {
      setTimeLeft(10);
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            dispatch({ type: "NEXT_QUESTION" });
            return 30;
          }
          return prev - 1;
        });
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [currentQuestion, showScore]);

  useEffect(() => {
    if (showScore && score > highScore) {
      setHighScore(score);
      localStorage.setItem("highScore", score);
    }
  }, [showScore, score, highScore]);

  const handleOptionSelect = (option) => {
    dispatch({ type: "SELECT_OPTION", payload: option });
    const isCorrect = option === questions[currentQuestion].answer;
    setFeedback({
      isCorrect,
      message: isCorrect
        ? "Correct! 🎉"
        : `Incorrect! The correct answer is ${questions[currentQuestion].answer}`,
    });
  };

  const handleNextQuestion = () => {
    setFeedback(null);
    dispatch({ type: "NEXT_QUESTION" });
  };

  const handleRestartQuiz = () => {
    setFeedback(null);
    dispatch({ type: "RESTART_QUIZ" });
  };

  return (
    <Container className="mt-4">
      <Card className="p-4">
        {showScore ? (
          <div className="text-center">
            <h2>
              Your Score: {score} / {questions.length}
            </h2>
            <h4>High Score: {highScore}</h4>
            <Button variant="primary" onClick={handleRestartQuiz} className="mt-3">
              Restart Quiz
            </Button>
          </div>
        ) : (
          <div>
            <div className="d-flex justify-content-between mb-3">
              <h5>
                Question {currentQuestion + 1} / {questions.length}
              </h5>
              <h5 style={{ color: timeLeft < 5 ? "red" : "black" }}>
                Time Left: {timeLeft}s
              </h5>
            </div>
            <ProgressBar
              now={((currentQuestion + 1) / questions.length) * 100}
              label={`${currentQuestion + 1}/${questions.length}`}
              className="mb-3"
            />
            <h4>
              Question {questions[currentQuestion].id}:<br />
              {questions[currentQuestion].question}
            </h4>
            <div className="mt-3">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant={selectedOption === option ? "success" : "outline-secondary"}
                  className="m-2 w-100"
                  onClick={() => handleOptionSelect(option)}
                  disabled={!!selectedOption}
                >
                  {option}
                </Button>
              ))}
            </div>
            {feedback && (
              <div className="mt-3 text-center">
                {feedback.isCorrect ? (
                  <h4 style={{ color: "green" }}>
                    <FaCheckCircle /> {feedback.message}
                  </h4>
                ) : (
                  <h4 style={{ color: "red" }}>
                    <FaTimesCircle /> {feedback.message}
                  </h4>
                )}
              </div>
            )}
            <Button
              variant="primary"
              className="mt-3"
              disabled={!selectedOption}
              onClick={handleNextQuestion}
            >
              {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
            </Button>
          </div>
        )}
      </Card>
    </Container>
  );
}

export default QuestionBank;