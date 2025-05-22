import React from 'react';

const Exercise5 = () => {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
  ];
  
  return (
    <div className="exercise">
      <h2>Exercise 5 - Dropdown menu of employee names</h2>
      <select>
        <option value="">Select an employee</option>
        {employees.map((employee, index) => (
          <option key={employee.id || index} value={employee.id || index}>
            {employee.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Exercise5;