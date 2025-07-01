import React from 'react'
import { Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap'

const About = () => {
    return (
      <Container>
        <Row className="my-5">
          <Col>
            <h2 className="my-5 text-danger">About Us</h2>
            <p>helloj</p>
            <p>xin chao</p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>About Us</Card.Title>
                <ListGroup variant="flush">
                  <ListGroupItem><strong>ABC</strong> - Founder & CEO</ListGroupItem>
                  <ListGroupItem><strong>ABC</strong> - CTO</ListGroupItem>
                  <ListGroupItem><strong>ABC</strong> - Lead Engineer</ListGroupItem>
                  <ListGroupItem><strong>ABC</strong> - Designer</ListGroupItem>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Contact Us</Card.Title>
                <Card.Text>
                  If you have any questions or feedback, feel free to reach out to us at <a href="mailto:lebaochau@gmail.com">lebaochau@gmail.com</a>.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
  
  export default About