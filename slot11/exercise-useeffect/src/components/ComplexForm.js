import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

// Hàm xác thực tên
const validateName = (name) => {
  return name.length >= 3;
};

function ComplexForm() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [terms, setTerms] = useState(false);
  const [nameValid, setNameValid] = useState(true);
  const [genderValid, setGenderValid] = useState(true);
  const [countryValid, setCountryValid] = useState(true);
  const [termsValid, setTermsValid] = useState(true);
  const [touched, setTouched] = useState({
    name: false,
    gender: false,
    country: false,
    terms: false,
  });

  // Xác thực khi các trường thay đổi
  useEffect(() => {
    if (touched.name && name) {
      const isValid = validateName(name);
      setNameValid(isValid);
    } else {
      setNameValid(true);
    }

    if (touched.gender) {
      setGenderValid(!!gender);
    } else {
      setGenderValid(true);
    }

    if (touched.country) {
      setCountryValid(!!country);
    } else {
      setCountryValid(true);
    }

    if (touched.terms) {
      setTermsValid(terms);
    } else {
      setTermsValid(true);
    }
  }, [name, gender, country, terms, touched]);

  // Kiểm tra form hợp lệ
  const isFormValid =
    nameValid &&
    genderValid &&
    countryValid &&
    termsValid &&
    name &&
    gender &&
    country &&
    terms;

  return (
    <Form>
      {/* Textbox: Name */}
      <Form.Group controlId="nameInput" className="mb-3">
        <Form.Label>Tên</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setTouched({ ...touched, name: true });
          }}
          isValid={touched.name && nameValid}
          isInvalid={touched.name && !nameValid}
        />
        <Form.Control.Feedback type="invalid">
          Tên phải có ít nhất 3 ký tự!
        </Form.Control.Feedback>
      </Form.Group>

      {/* Radio: Gender */}
      <Form.Group controlId="genderInput" className="mb-3">
        <Form.Label>Giới tính</Form.Label>
        <div>
          <Form.Check
            inline
            type="radio"
            label="Nam"
            value="male"
            checked={gender === "male"}
            onChange={(e) => {
              setGender(e.target.value);
              setTouched({ ...touched, gender: true });
            }}
            isInvalid={touched.gender && !genderValid}
          />
          <Form.Check
            inline
            type="radio"
            label="Nữ"
            value="female"
            checked={gender === "female"}
            onChange={(e) => {
              setGender(e.target.value);
              setTouched({ ...touched, gender: true });
            }}
            isInvalid={touched.gender && !genderValid}
          />
          {touched.gender && !genderValid && (
            <div className="text-danger">Vui lòng chọn giới tính!</div>
          )}
        </div>
      </Form.Group>

      {/* Dropdown: Country */}
      <Form.Group controlId="countryInput" className="mb-3">
        <Form.Label>Quốc gia</Form.Label>
        <Form.Select
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
            setTouched({ ...touched, country: true });
          }}
          isValid={touched.country && countryValid}
          isInvalid={touched.country && !countryValid}
        >
          <option value="">Chọn quốc gia</option>
          <option value="vn">Việt Nam</option>
          <option value="us">Hoa Kỳ</option>
          <option value="jp">Nhật Bản</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          Vui lòng chọn quốc gia!
        </Form.Control.Feedback>
      </Form.Group>

      {/* Checkbox: Terms */}
      <Form.Group controlId="termsInput" className="mb-3">
        <Form.Check
          type="checkbox"
          label="Tôi đồng ý với các điều khoản"
          checked={terms}
          onChange={(e) => {
            setTerms(e.target.checked);
            setTouched({ ...touched, terms: true });
          }}
          isInvalid={touched.terms && !termsValid}
        />
        {touched.terms && !termsValid && (
          <div className="text-danger">Vui lòng đồng ý với điều khoản!</div>
        )}
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!isFormValid}>
        Gửi
      </Button>
    </Form>
  );
}

export default ComplexForm;