import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col sm={12} md={4}>
            <h5>About Us</h5>
            <p>
              We are a professional company providing top-notch solutions for
              your needs. Our goal is to ensure customer satisfaction.
            </p>
          </Col>
          <Col sm={6} md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-light">Home</a></li>
              <li><a href="#services" className="text-light">Services</a></li>
              <li><a href="#about" className="text-light">About</a></li>
              <li><a href="#contact" className="text-light">Contact</a></li>
            </ul>
          </Col>
          <Col sm={6} md={4}>
            <h5>Contact Us</h5>
            <p>
              123 Main Street, Anytown, USA<br />
              Phone: (123) 456-7890<br />
              Email: info@example.com
            </p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
      </div>
  );
};

export default Footer;
