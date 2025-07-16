import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form, InputGroup, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Search } from 'react-bootstrap-icons';
import axios from 'axios';

const LaptopList = () => {
  const [laptops, setLaptops] = useState([]);
  const [filteredLaptops, setFilteredLaptops] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchLaptops();
  }, []);

  const fetchLaptops = async () => {
    try {
      const response = await axios.get('http://localhost:3001/Laptops');
      setLaptops(response.data);
      setFilteredLaptops(response.data);
    } catch (error) {
      console.error('Error fetching laptops:', error);
    }
  };

  const handleSearch = () => {
    const filtered = laptops.filter(laptop =>
      laptop.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      laptop.model.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredLaptops(filtered);
  };

  const handleViewDetails = (id) => {
    navigate(`/laptops/${id}`);
  };

  return (
    <Container fluid className="mt-5">
      <h2 className="text-center mb-4 fw-bold text-primary">Explore Our Laptops</h2>

      <Row className="mb-4 justify-content-center">
        <Col md={8} lg={6}>
          <InputGroup className="shadow-sm">
            <InputGroup.Text className="bg-light border-0">
              <Search size={20} />
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Search by brand or model..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-0"
            />
            <Button variant="primary" onClick={handleSearch} className="px-4">
              Search
            </Button>
          </InputGroup>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col lg={10} xl={10}>
          <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {filteredLaptops.map(laptop => (
              <Col key={laptop.id}>
                <Card className="h-100 laptop-card shadow-sm border-0">
                  <Card.Img
                    variant="top"
                    src={laptop.image}
                    style={{
                      height: '200px',
                      objectFit: 'cover',
                      borderTopLeftRadius: '10px',
                      borderTopRightRadius: '10px'
                    }}
                    alt={`${laptop.brand} ${laptop.model}`}
                  />
                  <Card.Body className="d-flex flex-column p-3">
                    <Card.Title className="text-center mb-3 fw-bold">
                      {laptop.brand} {laptop.model}
                    </Card.Title>
                    <Card.Text className="text-muted text-center">
                      <strong>Year:</strong> {laptop.year}<br />
                      <strong>Price:</strong> {laptop.price}
                    </Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => handleViewDetails(laptop.id)}
                      className="mt-auto btn-sm fw-bold"
                    >
                      View Details
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      {filteredLaptops.length === 0 && (
        <Row className="mt-4">
          <Col className="text-center">
            <Alert variant="warning" className="d-flex align-items-center justify-content-center">
              <span className="me-2">⚠️</span> No laptops found matching your search.
            </Alert>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default LaptopList;