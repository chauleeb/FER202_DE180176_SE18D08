function SortPeople() {
  const people = [
    { name: "Alice", age: 25, occupation: "Engineer" },
    { name: "Bob", age: 19, occupation: "Student" },
    { name: "Charlie", age: 22, occupation: "Student" },
    { name: "David", age: 30, occupation: "Engineer" },
  ];

  const sorted = [...people].sort((a, b) => {
    if (a.occupation < b.occupation) return -1;
    if (a.occupation > b.occupation) return 1;
    return a.age - b.age;
  });

  return (
    <div>
      <h2>Sắp xếp theo nghề và tuổi:</h2>
      <ul>
        {sorted.map((p, i) => (
          <li key={i}>
            {p.name} - {p.occupation} - {p.age} tuổi
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SortPeople;
