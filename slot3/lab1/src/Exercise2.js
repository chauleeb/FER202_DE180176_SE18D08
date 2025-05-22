import React from 'react';

const Exercise2 = () => {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
  ];
  
  return (
    <div className="exercise">
      <h2>Exercise 2 - Display a list using map()</h2>
      <ul>
        {employees.map((employee, index) => (
          // Sử dụng id nếu có, nếu không sử dụng index làm key
          <li key={employee.id || index}>
            {employee.name} - {employee.department}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Exercise2;