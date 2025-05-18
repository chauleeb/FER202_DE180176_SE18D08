function AverageAgeByOccupation() {
  const people = [
    { name: "Alice", age: 25, occupation: "Engineer" },
    { name: "Bob", age: 20, occupation: "Student" },
    { name: "Charlie", age: 22, occupation: "Student" },
    { name: "David", age: 40, occupation: "Engineer" },
  ];

  const occupationMap = {};

  people.forEach((person) => {
    const { occupation, age } = person;
    if (!occupationMap[occupation]) occupationMap[occupation] = [];
    occupationMap[occupation].push(age);
  });

  return (
    <div>
      <h2>Tuổi trung bình theo nghề:</h2>
      <ul>
        {Object.entries(occupationMap).map(([job, ages], index) => {
          const avg = (ages.reduce((sum, a) => sum + a, 0) / ages.length).toFixed(2);
          return <li key={index}>{job}: {avg} tuổi</li>;
        })}
      </ul>
    </div>
  );
}

export default AverageAgeByOccupation;
