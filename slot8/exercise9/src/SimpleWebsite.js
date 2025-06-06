// src/SimpleWebsite.js
import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

function SimpleWebsite() {
  return (
    <div>
      {/* Header */}
      <Navbar bg="warning" className="justify-content-center py-4">
        <Navbar.Brand>
          <img
             src="https://upload.wikimedia.org/wikipedia/vi/thumb/2/2d/Logo_Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_FPT.svg/1200px-Logo_Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_FPT.svg.png"

            alt="FPT Logo"
            width="500"
          />
        </Navbar.Brand>
      </Navbar>

      {/* Navigation */}
      <Nav className="justify-content-center bg-light py-2">
        <Nav.Item><Nav.Link href="#">Home</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="#">About</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="#">Contact</Nav.Link></Nav.Item>
      </Nav>

      {/* Main Content */}
      <Container className="text-center my-4">
        <h3>About</h3>
        <p>This is the about section of the website.</p>

        <h3>Contact</h3>
        <p>For any inquiries, please contact us at example@example.com.</p>
      </Container>

      {/* Footer */}
      <footer className="text-center bg-warning py-3">
        © 2023 Website. All rights reserved.
      </footer>
    </div>
  );
}

export default SimpleWebsite;
