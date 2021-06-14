import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Container, Row, Col } from 'reactstrap';

export default function Home() {
  return (
    <main id="main">
      <Container>
        <Row className="py-5">
          <Col className="col-md-6 col-12 pt-10">
            <h1 style={{ fontSize: "40px" }}>Hi, I'm Gina Dannibale</h1>
            <p style={{ paddingTop: "10px" }}>
              I'm a full stack developer currently working for CHS as an
              HRIS Analyst. I have a BS from Belmont University. I graduated
              from Vanderbilt/Trilogy Full Stack Developer Coding Bootcamp in
              January 2021. I am looking for new career opportunities to learn
              and grow as a full stack web developer.
            </p>
          </Col>
          <Col className="col-md-6 col-12 pt-10">
            <img src="https://avatars.githubusercontent.com/u/67716608?v=4"></img>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

const heroText = {
  textAlign: "center",
  position: "absolute",
  top: "50%",
  left: "45%",
  fontSize: "large",
  translate: "translate(-50%, -50%)",
};
