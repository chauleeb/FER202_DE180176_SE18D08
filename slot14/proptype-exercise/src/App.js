import React, { useState } from "react";
import UserProfile from "./components/UserProfile";
import UserProfile2 from "./components/UserProfile2";
import MyForm from "./components/MyForm";
import ValidationForm from "./components/ValidationForm";
import { Container, Button } from "react-bootstrap";

const App = () => {
  const [activeExample, setActiveExample] = useState(1);
  const handleFormSubmit = (formData) => {
    console.log("Dữ liệu đã gửi:", formData);
  };

  return (
    <Container className="App mt-4">
      <h1>Ứng Dụng React - Các Ví Dụ</h1>
      <div className="mb-3">
        <Button
          variant="primary"
          className="me-2"
          onClick={() => setActiveExample(1)}
        >
          Example 1
        </Button>
        <Button
          variant="primary"
          className="me-2"
          onClick={() => setActiveExample(2)}
        >
          Example 2
        </Button>
        <Button
          variant="primary"
          className="me-2"
          onClick={() => setActiveExample(3)}
        >
          Example 3
        </Button>
        <Button
          variant="primary"
          onClick={() => setActiveExample(4)}
        >
          Example 4
        </Button>
      </div>
      {activeExample === 1 && (
        <>
          <h2>Example 1</h2>
          <UserProfile name="Nguyễn Văn A" age={25} />
          <UserProfile name="" age={25} />
          <UserProfile name="Nguyễn Văn B" age="twenty five" />
          <UserProfile name="Nguyễn Văn C" age={null} />
        </>
      )}
      {activeExample === 2 && (
        <>
          <h2>Example 2</h2>
          <UserProfile2 name="Nguyễn Văn A" age={25} onSubmit={handleFormSubmit} />
          <UserProfile2
            name="Nguyễn Văn B"
            age="twenty five"
            onSubmit={handleFormSubmit}
          />
          <UserProfile2 name="" age={30} onSubmit={handleFormSubmit} />
        </>
      )}
      {activeExample === 3 && (
        <>
          <h2>Example 3</h2>
          <MyForm title="Đăng Ký Người Dùng" onSubmit={handleFormSubmit} />
        </>
      )}
      {activeExample === 4 && (
        <>
          <h2>Example 4</h2>
          <ValidationForm title="Đăng Ký Người Dùng" onSubmit={handleFormSubmit} />
        </>
      )}
    </Container>
  );
};

export default App;