import React from 'react';

const Exercise9 = () => {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
  ];
  
  // Kiểm tra xem có nhân viên nào là teenager không (10-20 tuổi)
  const isTeenager = employees.some(e => e.age >= 10 && e.age <= 20);
  
  // Lọc ra danh sách nhân viên là teenager
  const teenagers = employees.filter(e => e.age >= 10 && e.age <= 20);
  
  return (
    <div className="exercise">
      <h2>Exercise 9 - Check if any employee is a teenager</h2>
      <p>Is there any teenage employee (10-20 years old)? {isTeenager.toString()}</p>
      
      {isTeenager && (
        <div>
          <h3>Teenage Employees:</h3>
          <ul>
            {teenagers.map((employee, index) => (
              <li key={employee.id || index}>
                {employee.name} - {employee.age} years old
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Exercise9;