import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/predico.io.png";
import Button from "react-bootstrap/Button";
import About from "./About";
import Contact from "./Contact";
import Pricing from "./Pricing";

function Home() {
  return (
    <>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="heading">
              <h1
                style={{
                  fontSize: "4rem",
                  fontWeight: "600",
                  letterSpacing: "0.1rem",
                }}
              >
                Predico.io
              </h1>
              <h1 style={{ fontSize: "1.1rem", fontWeight: "500" }}>
                Making inventory managment easier for lifestyle brands
              </h1>
              <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginTop: "3rem"}}>
                You got demand, we got solution!
              </h2>
              <h1 style={{ fontSize: "3rem", fontWeight: "550" }}>Served 200+</h1>
              <h1 style={{ fontSize: "3rem", fontWeight: "550" }}>brands</h1>
              <div className="sponsorUS" style={{justifyContent:"left",display:"flex",justifySelf:"center"}}>
                <Button
                  variant="outline-light"
                  href="/register"
                  target="_blank"
                  type="submit"

                  style={{
                    fontSize: "1.5rem",
                    width: "60%",
                    height: "auto",
                    background: "none",
                    
                  }}
                >
                  Show Results
                </Button>{" "}
              </div>
            </Col>
            <Col
              md={5}
              style={{
                paddingBottom: 20,
                paddingTop: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "400px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
      <Pricing />
      <Contact />
    </>
  );
}

export default Home;
