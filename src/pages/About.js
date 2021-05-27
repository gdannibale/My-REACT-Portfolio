import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { IconContext} from "react-icons"
import { DiJsBadge, DiReact, DiMongodb, DiMysql, DiNodejs, DiCss3, DiJqueryLogo } from "react-icons/di";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Portfolio from "./pages/Portfolio";
// import Contact from "./pages/Contact";
// import Navbar from "../components/Navbar/Navbar";

export default function About() {
    return (
      <main id="main">
        <Container>
          <Row className="py-5">
            <Col className="col-md-6 col-12 pt-10">
              <h1 style={{ fontSize: "40px" }}>Hi, I'm Gina Dannibale</h1>
              <p style={{ paddingTop: "10px" }}>
                Hello, I'm a full stack developer currently working for CHS as an HRIS Analyst. I have a BS from Belmont University. I graduated from
                Vanderbilt/Trilogy Full Stack Developer Coding Bootcamp in January
                2021. I am looking for new career opportunities to learn and grow
                as a full stack web developer.
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
                  {/* <li>
                    <DiHtml5 />
                  </li> */}
                </ul>
              </IconContext.Provider>
            </Col>
          </Row>
        </Container>
      </main>
    );
  }

// export default function About() {
//     return (
//         <div>
//             {/* <Navbar /> */}
//             <Container />
    
//         <main className="container" id="main">
//             <Row>
                
//                     <Col className="col-md-3 col-12 pt-10">
//                         <h1 style={{ fontSize:"40px"}}>Hi, I'm Gina Dannibale</h1>
//                         <p style={{ paddingTop:"10px"}}>Hello, I'm a full stack developer where main studys in the MERN stack.
//                         Love to code and learn everyday. I graduated from Vanderbilt/Trilogy Full Stack Developer Coding Bootcamp in January 2021.
//                         Looking for a company to work for so i can grow and learn everyday as full stack developer.
//                </p>
//                {/* </Col>
//                <Col className="col-md-5 col-12">
//                         <img src={image} alt="picture of my family" />
//                         </Col>
//                <Col className="col-md-2 col-12"> */}

//                         <h1 style={{ fontSize:"30px", textAlign:"center", paddingTop:"10px"}}>My Technologies</h1>
//                         {/* <ul className=" text-align-center list-unstyled mt-5">
//                        <li> JavaScript </li> 

//                             <li>CSS </li>
//                             <li>Node.js </li>
//                             <li>MySQL </li>
//                             <li>MongoDb </li>
//                             <li>React </li>
//                             <li>Express.js</li>
//                             <li>JQuery </li>
//                         </ul> */}

//                             </Col>
//                <Col className="col-md-2 col-12">

//                <IconContext.Provider value={{ color: "blue", size:"3em"}}>
//                    <ul>
//                <li><DiJsBadge/></li>
//                <li><DiCss3/></li>
//                <li><DiNodejs/></li>
//                <li><DiMysql/></li>
//                <li><DiMongodb/></li>
//                <li><DiReact/></li>
//                <li><DiJqueryLogo/></li>
//                </ul>
//                </IconContext.Provider>


//                         </Col>
//                     </Row>
                    
//         </main>
//         </div>
//     )

//     }
  


//    // <IconContext.Provider value={{ color: "blue", size:"1em"}}>