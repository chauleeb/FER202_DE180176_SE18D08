import React from "react";
import { Button } from "react-bootstrap";

function Result({ score, total, onReplay }) {
  return (
    <div className="text-center">
      <h2>Quiz Results</h2>
      <p>
        You answered {score} out of {total} questions correctly!
      </p>
      <p>
        Score: <strong>{((score / total) * 100).toFixed(2)}%</strong>
      </p>
      <Button variant="success" onClick={onReplay} className="me-2">
        Replay
      </Button>
      <Button variant="info">Share Result</Button>
    </div>
  );
}

export default Result;