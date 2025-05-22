import React from 'react';

const Exercise7 = () => {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
  ];
  
  // Sắp xếp nhân viên theo department (thứ tự abc), sau đó theo name nếu department giống nhau
  const sortedEmployees = [...employees].sort((a, b) => {
    // So sánh department trước
    const deptComparison = a.department.localeCompare(b.department);
    
    // Nếu department khác nhau, trả về kết quả so sánh
    if (deptComparison !== 0) {
      return deptComparison;
    }
    
    // Nếu department giống nhau, so sánh name
    return a.name.localeCompare(b.name);
  });
  
  return (
    <div className="exercise">
      <h2>Exercise 7 - Sort employees by department, then by name</h2>
      <ul>
        {sortedEmployees.map((employee, index) => (
          <li key={employee.id || index}>
            {employee.name} - {employee.department}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Exercise7;