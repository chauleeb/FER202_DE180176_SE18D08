import React, { useState } from 'react';

const Exercise10 = () => {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
  ];
  
  // State để lưu trữ giá trị tìm kiếm
  const [searchTerm, setSearchTerm] = useState('');
  
  // Xử lý sự kiện khi người dùng nhập vào ô tìm kiếm
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  
  // Lọc nhân viên theo tên (không phân biệt hoa thường)
  const filteredEmployees = employees.filter(employee => 
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="exercise">
      <h2>Exercise 10 - Search for an employee by name</h2>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleSearch}
        style={{ padding: '5px', marginBottom: '10px' }}
      />
      
      <h3>Search Results:</h3>
      {filteredEmployees.length > 0 ? (
        <ul>
          {filteredEmployees.map((employee, index) => (
            <li key={employee.id || index}>
              {employee.name} - {employee.department} - {employee.age} years old
            </li>
          ))}
        </ul>
      ) : (
        <p>No matching employees found</p>
      )}
    </div>
  );
};

export default Exercise10;