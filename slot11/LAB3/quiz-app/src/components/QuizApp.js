import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Question from "./Question";
import Result from "./Result";

class QuizApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          question: "What is the capital of France?",
          options: ["Paris", "London", "Berlin", "Madrid"],
          answer: "Paris",
        },
        {
          id: 2,
          question: "What is the largest planet in our solar system?",
          options: ["Jupiter", "Saturn", "Mars", "Earth"],
          answer: "Jupiter",
        },
      ], // Add more questions here
      currentQuestion: 0,
      score: 0,
      quizEnd: false,
    };
  }

  // Handle answer selection
  handleAnswerSelect = (answer) => {
    this.setState({ selectedAnswer: answer });
  };

  // Check answer and move to next question
  handleSubmitAnswer = () => {
    const { questions, currentQuestion, selectedAnswer } = this.state;
    if (selectedAnswer === questions[currentQuestion].answer) {
      this.setState((prevState) => ({ score: prevState.score + 1 }));
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      this.setState({ currentQuestion: nextQuestion, selectedAnswer: "" });
    } else {
      this.setState({ quizEnd: true });
    }
  };

  // Replay quiz
  handleReplay = () => {
    this.setState({
      currentQuestion: 0,
      score: 0,
      quizEnd: false,
      selectedAnswer: "",
    });
  };

  render() {
    const { questions, currentQuestion, score, quizEnd } = this.state;

    return (
      <Container className="mt-5">
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <Card>
              <Card.Body>
                <h1 className="text-center mb-4">Quiz Application</h1>
                {quizEnd ? (
                  <Result
                    score={score}
                    total={questions.length}
                    onReplay={this.handleReplay}
                  />
                ) : (
                  <Question
                    question={questions[currentQuestion].question}
                    options={questions[currentQuestion].options}
                    selectedAnswer={this.state.selectedAnswer || ""}
                    onAnswerSelect={this.handleAnswerSelect}
                    onSubmitAnswer={this.handleSubmitAnswer}
                  />
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default QuizApp;