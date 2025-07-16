import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import LoginForm from './components/LoginForm';
import LaptopList from './components/LaptopManagement';
import LaptopDetail from './components/LaptopDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand>Laptop Management System</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {user && (
                  <Nav.Link as={NavLink} to="/laptops">
                    Laptop Management
                  </Nav.Link>
                )}
              </Nav>
              <Nav>
                {user ? (
                  <div className="d-flex align-items-center">
                    <span className="text-light me-3">Welcome, {user.username}!</span>
                    <Button variant="outline-light" size="sm" onClick={handleLogout}>
                      Logout
                    </Button>
                  </div>
                ) : (
                  <Nav.Link as={NavLink} to="/">
                    Login
                  </Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Main Content */}
        <Routes>
          <Route 
            path="/" 
            element={
              user ? <Navigate to="/laptops" /> : <LoginForm setUser={setUser} />
            } 
          />
          <Route 
            path="/laptops" 
            element={
              user ? <LaptopList /> : <Navigate to="/" />
            } 
          />
          <Route 
            path="/laptops/:id" 
            element={
              user ? <LaptopDetail /> : <Navigate to="/" />
            } 
          />
          <Route 
            path="*" 
            element={
              <Container className="mt-5">
                <div className="text-center">
                  <h2>404 - Page Not Found</h2>
                  <p>The page you are looking for does not exist.</p>
                  <Button variant="primary" onClick={() => window.location.href = '/'}>
                    Go Home
                  </Button>
                </div>
              </Container>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;