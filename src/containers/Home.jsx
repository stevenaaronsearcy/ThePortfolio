import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";
import "../App.css";
import Particles from "../config/particlesConfig";
import Typed from "react-typed";
import Button from "@mui/material/Button";



function Home() {
  
  return (
    <Container className="homeContainer" fluid>
      <Row style={{ paddingTop: "150px" }}>
        <Col>
          <h1
            style={{
              fontWeight: "bold",
              textTransform: "uppercase",
              color: "#8d8741",
            }}
          >
            Developer
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Typed
            className="typed-text"
            strings={["Full Stack MERN", "Wordpress", "PHP"]}
            typeSpeed={70}
            backSpeed={60}
            loop
          />
        </Col>
      </Row>
      <Row>
        <Col style={{ paddingTop: "80px" }}>
          <Button
            style={{
              color: "#FBEEc1",
              marginRight: "5px",
              marginLeft: "5px",
              borderColor: "#FBEEc1",
              fontSize: "20px",
              fontFamily: "Roboto",
            }}
            variant="outlined"
            size="large"
          >
            Resume
          </Button>
          <Button
            style={{
              color: "#FBEEc1",
              marginRight: "5px",
              marginLeft: "5px",
              borderColor: "#FBEEc1",
              fontSize: "20px",
              fontFamily: "Roboto",
            }}
            variant="outlined"
            size="large"
          >
            Resume
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
