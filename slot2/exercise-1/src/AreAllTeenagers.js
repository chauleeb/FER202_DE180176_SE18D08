function AreAllTeenagers() {
  const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 15 },
  ];

  const allTeenagers = people.every((p) => p.age >= 13 && p.age <= 19);

  return (
    <div>
      <h2>Kiểm tra tất cả có phải tuổi teen:</h2>
      <p>{allTeenagers ? "Tất cả là tuổi teen" : "Không phải tất cả là tuổi teen"}</p>
    </div>
  );
}

export default AreAllTeenagers;
