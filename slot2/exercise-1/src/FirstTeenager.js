function FirstTeenager() {
  const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 13 },
  ];

  const teenager = people.find((person) => person.age >= 13 && person.age <= 19);

  return (
    <div>
      <h2>Người tuổi teen đầu tiên:</h2>
      {teenager ? (
        <p>{teenager.name} - {teenager.age} tuổi</p>
      ) : (
        <p>Không có người tuổi teen</p>
      )}
    </div>
  );
}

export default FirstTeenager;
