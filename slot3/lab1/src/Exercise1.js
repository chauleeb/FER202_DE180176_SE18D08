import React from 'react';

const Exercise1 = () => {
  const employee = { name: "John Doe", age: 30, department: "IT" };
  
  // Sử dụng object destructuring để trích xuất các thuộc tính
  const { name, age, department } = employee;
  
  return (
    <div className="exercise">
      <h2>Exercise 1 - Object Destructuring</h2>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>Department: {department}</p>
    </div>
  );
};

export default Exercise1;