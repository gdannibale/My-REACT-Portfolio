// import React from "react";
// import Navbar from "../Navbar";
// const Contact = () => {
//   return (
//     <div>
//       <Navbar />
//       <div>
//         <h1 style={{ color: "blue", backgroundColor: "lightblue" }}>Contact Page</h1>
//       </div>

//       <div class="container">
//         <form>
//           <div class="form-row">
//             <div class="form-group col-md-6">
//               <label for="inputEmail4">Email</label>
//               <input type="email" class="form-control" id="inputEmail4"></input>
//             </div>
//             <div class="form-group col-md-6">
//               <label for="inputPhonenumber">Phone Number</label>
//               <input
//                 type="text"
//                 class="form-control"
//                 id="inputPhonenumber"
//               ></input>
//             </div>
//           </div>
//           <div class="form-group">
//             <label for="inputAddress">Address</label>
//             <input
//               type="text"
//               class="form-control"
//               id="inputAddress"
//               placeholder="1234 Main St"
//             ></input>
//           </div>
//           <div class="form-group">
//             <label for="inputAddress2">Address 2</label>
//             <input
//               type="text"
//               class="form-control"
//               id="inputAddress2"
//               placeholder="Apartment, studio, or floor"
//             ></input>
//           </div>
//           <div class="form-row">
//             <div class="form-group col-md-6">
//               <label for="inputCity">City</label>
//               <input type="text" class="form-control" id="inputCity"></input>
//             </div>
//             <div class="form-group col-md-4">
//               <label for="inputState">State</label>
//               <select id="inputState" class="form-control">
//                 <option selected>Choose...</option>
//                 <option>...</option>
//               </select>
//             </div>
//             <div class="form-group col-md-2">
//               <label for="inputZip">Zip</label>
//               <input type="text" class="form-control" id="inputZip"></input>
//             </div>
//           </div>
//           <button type="submit" class="btn btn-primary">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React from "react";
import { Container, Row, Col } from "reactstrap";
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
import { IconContext } from "react-icons";
import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="container">
      <Row id="contact" className="justify-content-center py-5">
        <h1 style={{ textAlign: "center" }}>Contact Me</h1>
      </Row>
      <Row className="justify-content-center py-2">
        <h1 style={{ textAlign: "center" }}>ginadannibale@gmail.com</h1>
      </Row>
      <Row className="justify-content-between row">
        <Col className=" col-md-3 col-12">
          <Card>
            <CardHeader>LinkedIn</CardHeader>
            <CardBody>
              <IconContext.Provider value={{ color: "blue", size: "10em" }}>
                <FaLinkedin />
              </IconContext.Provider>

              <CardText>Check out my LinkedIn page</CardText>
              <Button href="https://www.linkedin.com/feed/" target="_blank">
                My LinkedIn
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col className="col-md-3 col-12">
          <Card>
            <CardHeader>GitHub</CardHeader>
            <CardBody>
              <IconContext.Provider value={{ color: "black", size: "10em" }}>
                <FaGithub />
              </IconContext.Provider>

              <CardText>Check out my repositories</CardText>
              <Button
                href="https://github.com/gdannibale?tab=repositories"
                target="_blank"
              >
                My GitHub
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col className="col-md-3 col-12">
          <Card>
            <CardHeader>My Resume</CardHeader>
            <CardBody>
              <IconContext.Provider value={{ color: "tan", size: "10em" }}>
                <FaFileAlt />
              </IconContext.Provider>

              <CardText>A link to my Resume.</CardText>
              <Button href={Resume} target="_blank">
                My Resume
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
