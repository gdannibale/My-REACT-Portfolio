import React from "react";
import { Container, Row, Col } from "reactstrap";
import { IconContext } from "react-icons";
import {
  DiJsBadge,
  DiReact,
  DiMongodb,
  DiMysql,
  DiNodejs,
  DiCss3,
  DiJqueryLogo,
  DiHtml5
} from "react-icons/di";
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardHeader,
  CardFooter,
  Button,
} from "reactstrap";
import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";
import Footer from "../components/Footer";
import ocean from "../images/ocean.jpg";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Portfolio from "./pages/Portfolio";
// import Contact from "./pages/Contact";
// import Navbar from "../components/Navbar/Navbar";

export default function About() {
  return (
    <>
    <main id="main">
      {/* <div className='hero-container'>
        <img className="image"
        src={ocean}
        alt="ocean"
        /> */}
      {/* </div> */}
      <Container>
        <Row className="py-5">
          <Col className="col-md-6 col-12 pt-10">
            <h1 style={{ fontSize: "40px" }}>Hi, I'm Gina Dannibale</h1>
            <p style={{ paddingTop: "10px" }}>
              I have been employed by Community Health Systems for the last 6
              years. I have thoroughly enjoyed my time with this company, but am
              looking to pursue a career in web development. I have worked with
              JavaScript, CSS, HTML, HTML5, REACT, MongoDB, JQuery, and have
              been introduced to several others.
            </p>
          </Col>
          {/* <Col className="col-md-5 col-12">
                      <img className="family-pic" src={image} alt="picture of my family" />
                  </Col> */}

          <Col className="col-md-6 col-12">
            <h1
              style={{
                fontSize: "40px",
                textAlign: "center",
                paddingTop: "10px",
              }}
            >
              Technologies
            </h1>
            <IconContext.Provider value={{ color: "black", size: "5em" }}>
              <ul>
                <li>
                  <DiJsBadge />
                </li>
                <li>
                  <DiCss3 />
                </li>
                <li>
                  <DiNodejs />
                </li>
                <li>
                  <DiMysql />
                </li>
                <li>
                  <DiMongodb />
                </li>
                <li>
                  <DiReact />
                </li>
                <li>
                  <DiJqueryLogo />
                </li>
                <li>
                    <DiHtml5 />
                  </li>
              </ul>
            </IconContext.Provider>
          </Col>
        </Row>

        <Button href="https://www.canva.com/design/DAEjcR6FQOE/T-iWFFvH96H08o3A5-B-3g/view?utm_content=DAEjcR6FQOE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink">
                My Resume
              </Button>
             
      </Container>
      
    </main>
    {/* <Footer /> */}
    </>
  );
}


