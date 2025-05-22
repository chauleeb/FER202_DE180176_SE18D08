import React from 'react';

const Exercise6 = () => {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
  ];
  
  // Lọc nhân viên thuộc phòng IT
  const itEmployees = employees.filter(employee => employee.department === "IT");
  
  return (
    <div className="exercise">
      <h2>Exercise 6 - Filter IT department employees</h2>
      <h3>IT Department Employees:</h3>
      {itEmployees.length > 0 ? (
        <ul>
          {itEmployees.map((employee, index) => (
            <li key={employee.id || index}>
              {employee.name} - {employee.age} years old
            </li>
          ))}
        </ul>
      ) : (
        <p>No employees in IT department</p>
      )}
    </div>
  );
};

export default Exercise6;