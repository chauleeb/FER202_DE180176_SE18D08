import React from 'react';
import ItemList from './components/ItemList';
import QuestionBank from './components/QuestionBank';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
      <h1 className="my-4">Exercise 4: Item List</h1>
      <ItemList />
      <h1 className="my-4">Exercises 5 & 6: Question Bank</h1>
      <QuestionBank />
    </Container>
  );
}

export default App;