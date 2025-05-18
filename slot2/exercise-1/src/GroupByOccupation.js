function GroupByOccupation() {
  const people = [
    { name: "Alice", age: 25, occupation: "Engineer" },
    { name: "Bob", age: 17, occupation: "Student" },
    { name: "Charlie", age: 32, occupation: "Designer" },
    { name: "David", age: 19, occupation: "Student" },
  ];

  const groups = people.reduce((acc, person) => {
    const key = person.occupation;
    if (!acc[key]) acc[key] = [];
    acc[key].push(person);
    return acc;
  }, {});

  return (
    <div>
      <h2>Nhóm người theo nghề:</h2>
      {Object.entries(groups).map(([job, group], index) => (
        <div key={index}>
          <h3>{job}</h3>
          <ul>
            {group.map((p, i) => (
              <li key={i}>{p.name} - {p.age} tuổi</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default GroupByOccupation;
