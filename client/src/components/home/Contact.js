import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "600",
            letterSpacing: "0.5rem",
            paddingBottom: "3rem",
            textAlign: "center"
          }}
        >
          <span className="purple">CONTACT</span>
        </h1>
        <h5 style={{ color: "white", textAlign: "center" }}>For all kind of enquiries, please choose an option from below and share your email address with us.</h5>

        <h3 className="contact-help">How can we help you?</h3>
        <Form className="contact-form" style={{
          background: "none",
          width: "100%",
          textAlign: "center",
          color: "white",
          margin: "-10px"
        }}>
          <input className="form-box" type="email" placeholder="Enter your email address"/>
          <input className="form-box" type="text" placeholder="Enter your query here..." />
        </Form>
      </Container>
    </Container>
  );
};

export default Contact;
