import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>Food Paradise</h5>
            <p className="text-light">
              Thưởng thức ẩm thực tuyệt vời từ khắp nơi trên thế giới
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Liên hệ</h5>
            <ul className="list-unstyled text-light">
              <li>📞 Phone: (123) 456-7890</li>
              <li>📧 Email: info@foodparadise.com</li>
              <li>📍 Địa chỉ: 123 Street, DaNang City</li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Giờ mở cửa</h5>
            <ul className="list-unstyled text-light">
              <li>Thứ 2 - Thứ 6: 9:00 - 22:00</li>
              <li>Thứ 7 - Chủ nhật: 10:00 - 23:00</li>
            </ul>
          </div>
        </div>
        <hr className="bg-secondary" />
        <div className="text-center text-light">
          <small>&copy; 2025 Food Paradise. All rights reserved.</small>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
