import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ValidatedInput from "./components/ValidatedInput";
import LoginForm from "./components/LoginForm";
import ComplexForm from "./components/ComplexForm";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-5">useEffect in React</h1>

      {/* Bài tập 4: ValidatedInput */}
      <Row className="mb-5">
        <Col>
          <h2>Bài 4: Form Validation (Single Input)</h2>
          <p>Xác thực đầu vào với độ dài tối thiểu 5 ký tự.</p>
          <ValidatedInput />
        </Col>
      </Row>

      {/* Bài tập 5: LoginForm */}
      <Row className="mb-5">
        <Col>
          <h2>Bài 5: Login Form (Email & Password)</h2>
          <p>Xác thực email hợp lệ và mật khẩu ít nhất 8 ký tự.</p>
          <LoginForm />
        </Col>
      </Row>

      {/* Bài tập 6: ComplexForm */}
      <Row className="mb-5">
        <Col>
          <h2>Bài 6: Complex Form (Text, Radio, Dropdown, Checkbox)</h2>
          <p>Xác thực tên, giới tính, quốc gia, và điều khoản.</p>
          <ComplexForm />
        </Col>
      </Row>
    </Container>
  );
};

export default App;