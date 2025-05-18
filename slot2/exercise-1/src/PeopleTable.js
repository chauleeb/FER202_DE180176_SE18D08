function PeopleTable() {
  const people = [
    { name: "Alice", age: 25, occupation: "Engineer" },
    { name: "Bob", age: 17, occupation: "Student" },
    { name: "Charlie", age: 32, occupation: "Designer" },
  ];

  return (
    <div>
      <h2>Bảng thông tin người</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Tên</th>
            <th>Tuổi</th>
            <th>Nghề</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PeopleTable;
