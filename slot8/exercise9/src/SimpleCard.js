// src/SimpleCard.js
import React from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';

function SimpleCard() {
  return (
    <Card className="p-3 mb-4" style={{ width: '400px' }}>
      <Row>
        <Col xs={4} className="d-flex justify-content-center align-items-center">
          <Image
              src="https://upload.wikimedia.org/wikipedia/vi/thumb/2/2d/Logo_Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_FPT.svg/1200px-Logo_Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_FPT.svg.png"
                width={80}

          />
        </Col>
        <Col>
          <h5 className="text-warning mb-1">Le Bao Chau - FPT University</h5>
          <small className="text-muted">Mobile: 0372278710.</small>
        </Col>
      </Row>
    </Card>
  );
}

export default SimpleCard;
