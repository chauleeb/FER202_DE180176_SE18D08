import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';
import { ArrowLeftCircle } from 'react-bootstrap-icons';
import axios from 'axios';

const LaptopDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [laptop, setLaptop] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchLaptopDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/Laptops/${id}`);
        setLaptop(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching laptop detail:', error);
        setError(true);
        setLoading(false);
      }
    };

    fetchLaptopDetail();
  }, [id]);

  if (loading) {
    return (
      <Container className="mt-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-2">Loading...</p>
      </Container>
    );
  }

  if (error || !laptop) {
    return (
      <Container className="mt-5">
        <Alert variant="danger" className="text-center shadow-sm">
          <Alert.Heading className="d-flex align-items-center justify-content-center">
            <span className="me-2">⚠️</span> 404 Not Found
          </Alert.Heading>
          <p>The laptop with ID {id} was not found.</p>
          <hr />
          <Button
            variant="outline-primary"
            onClick={() => navigate('/laptops')}
            className="mt-3 fw-bold"
          >
            <ArrowLeftCircle className="me-2" /> Back to Laptop List
          </Button>
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Card className="shadow-sm border-0">
            <Row className="g-0">
              <Col md={6}>
                <Card.Img
                  src={laptop.image}
                  style={{
                    height: '100%',
                    objectFit: 'cover',
                    borderTopLeftRadius: '10px',
                    borderBottomLeftRadius: '10px'
                  }}
                  alt={`${laptop.brand} ${laptop.model}`}
                />
              </Col>
              <Col md={6}>
                <Card.Body className="p-4">
                  <Card.Title className="fw-bold text-primary mb-3">
                    {laptop.brand} {laptop.model}
                  </Card.Title>
                  <Card.Text>
                    <strong>Brand:</strong> {laptop.brand}<br />
                    <strong>Model:</strong> {laptop.model}<br />
                    <strong>Year:</strong> {laptop.year}<br />
                    <strong>Price:</strong> {laptop.price}<br />
                    <strong>Description:</strong> High-quality laptop with excellent performance and modern features.
                  </Card.Text>
                  <div className="d-flex gap-3">
                    <Button
                      variant="outline-primary"
                      onClick={() => navigate('/laptops')}
                      className="fw-bold"
                    >
                      <ArrowLeftCircle className="me-2" /> Back to List
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => navigate('/')}
                      className="fw-bold"
                    >
                      Home
                    </Button>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LaptopDetail;