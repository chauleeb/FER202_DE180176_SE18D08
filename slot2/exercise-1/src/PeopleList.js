function PeopleList() {
  const people = [
    { name: "Alice", age: 25, occupation: "Engineer" },
    { name: "Bob", age: 17, occupation: "Student" },
    { name: "Charlie", age: 32, occupation: "Designer" },
  ];

  return (
    <div>
      <h2>Danh sách người</h2>
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            {person.name} - {person.age} tuổi - {person.occupation}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PeopleList;
