import React from 'react';

const Exercise4 = () => {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
  ];
  
  // Sử dụng rest parameter để tính trung bình tuổi
  const averageAge = (...ages) => {
    const sum = ages.reduce((total, age) => total + age, 0);
    return sum / ages.length;
  };
  
  // Trích xuất mảng tuổi từ danh sách nhân viên
  const ages = employees.map(employee => employee.age);
  
  // Tính trung bình
  const average = averageAge(...ages);
  
  return (
    <div className="exercise">
      <h2>Exercise 4 - Average age using rest parameters</h2>
      <p>Employee ages: {ages.join(', ')}</p>
      <p>Average age: {average.toFixed(2)}</p>
    </div>
  );
};

export default Exercise4;