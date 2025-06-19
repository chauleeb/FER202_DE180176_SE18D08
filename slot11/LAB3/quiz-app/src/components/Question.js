import React from "react";
import { Form, Button } from "react-bootstrap";

function Question({ question, options, selectedAnswer, onAnswerSelect, onSubmitAnswer }) {
  return (
    <div>
      <h3 className="mb-4">{question}</h3>
      <Form>
        {options.map((option, index) => (
          <Form.Check
            key={index}
            type="radio"
            label={option}
            value={option}
            checked={selectedAnswer === option}
            onChange={() => onAnswerSelect(option)}
            className="mb-2"
          />
        ))}
        <Button
          variant="primary"
          onClick={onSubmitAnswer}
          disabled={!selectedAnswer}
          className="mt-3"
        >
          Submit Answer
        </Button>
      </Form>
    </div>
  );
}

export default Question;