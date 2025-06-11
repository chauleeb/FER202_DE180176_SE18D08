import NameList from "./components/NameList";
import UserProfile from "./components/UserProfile";
import Welcome from "./components/Welcome";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import StudentCard from "./components/StudentCard";

function App() {
  const userData = { name: "traltb@fe.edu.vn", age: 39 };
  const namesList = ["traltb@fe.edu.vn", "test@fe.edu.vn"];

  // Danh sách students
  const students = [
    { name: "traltb1@fe.edu.vn", age: 39, avatar: "/images/2.jpg" },
    { name: "traltb2@fe.edu.vn", age: 40, avatar: "/images/2.jpg" },
    { name: "traltb3@fe.edu.vn", age: 41, avatar: "/images/2.jpg" },
  ];

  return (
    <>
      <Welcome name="traltb@fe.edu.vn" />
      <UserProfile user={userData} />
      <NameList names={namesList} />
      <Container>
        <h1 className="my-4 text-center">Student information</h1>
        <Row>
          {/* Duyệt qua mảng students và truyền từng đối tượng student vào StudentCard */}
          {students.map((student, index) => (
            <Col key={index} sm={12} md={4}>
              <StudentCard student={student} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;


