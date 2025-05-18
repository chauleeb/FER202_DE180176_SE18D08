function PersonDetail() {
  const person = {
    name: "Alice",
    age: 25,
    occupation: "Engineer",
  };

  return (
    <div>
      <h2>Thông tin cá nhân</h2>
      <p>Tên: {person.name}</p>
      <p>Tuổi: {person.age}</p>
      <p>Nghề nghiệp: {person.occupation}</p>
    </div>
  );
}

export default PersonDetail;
