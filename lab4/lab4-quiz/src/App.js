import React from 'react';
import { QuizProvider } from './components/QuizContext';
import Quiz from './components/Quiz';
import './App.css'; 

function App() {
  return (
    <QuizProvider>
      <div className="App">
        <h1> Lab 4 - React Hooks Quiz</h1>
        <Quiz />
      </div>
    </QuizProvider>
  );
}

export default App;
