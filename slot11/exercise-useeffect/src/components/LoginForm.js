import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

// Hàm xác thực email
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Hàm xác thực mật khẩu
const validatePassword = (password) => {
  return password.length >= 8;
};

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [touched, setTouched] = useState({ email: false, password: false });

  // Xác thực khi email hoặc password thay đổi
  useEffect(() => {
    if (touched.email && email) {
      const isValid = validateEmail(email);
      setEmailValid(isValid);
      setEmailError(isValid ? "" : "Vui lòng nhập email hợp lệ!");
    } else {
      setEmailValid(true);
      setEmailError("");
    }

    if (touched.password && password) {
      const isValid = validatePassword(password);
      setPasswordValid(isValid);
      setPasswordError(isValid ? "" : "Mật khẩu phải có ít nhất 8 ký tự!");
    } else {
      setPasswordValid(true);
      setPasswordError("");
    }
  }, [email, password, touched]);

  // Kiểm tra form hợp lệ
  const isFormValid = emailValid && passwordValid && email && password;

  return (
    <Form>
      <Form.Group controlId="emailInput" className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setTouched({ ...touched, email: true });
          }}
          isValid={touched.email && emailValid}
          isInvalid={touched.email && !emailValid}
        />
        <Form.Control.Feedback type="invalid">
          {emailError}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="passwordInput" className="mb-3">
        <Form.Label>Mật khẩu</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setTouched({ ...touched, password: true });
          }}
          isValid={touched.password && passwordValid}
          isInvalid={touched.password && !passwordValid}
        />
        <Form.Control.Feedback type="invalid">
          {passwordError}
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!isFormValid}>
        Submit
      </Button>
    </Form>
  );
}

export default LoginForm;