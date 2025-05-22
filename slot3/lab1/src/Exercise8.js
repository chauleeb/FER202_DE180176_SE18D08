import React from 'react';

const Exercise8 = () => {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
  ];
  
  // Nhóm nhân viên theo department
  const groupedEmployees = employees.reduce((groups, employee) => {
    const { department } = employee;
    if (!groups[department]) {
      groups[department] = [];
    }
    groups[department].push(employee);
    return groups;
  }, {});
  
  return (
    <div className="exercise">
      <h2>Exercise 8 - Group employees by department</h2>
      {Object.keys(groupedEmployees).map(department => (
        <div key={department}>
          <h3>{department}</h3>
          <ul>
            {groupedEmployees[department].map((employee, index) => (
              <li key={employee.id || index}>
                {employee.name} - {employee.age} years old
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Exercise8;