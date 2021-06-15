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
import { SocialIcon } from "react-social-icons"
import { IconContext } from "react-icons";
import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";
// import Navbar from "../components/Navbar/Navbar";

export default function Portfolio() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="container">
        <Row id="contact" className="justify-content-center py-5">
          <h1 style={{ textAlign: "center" }}>My Projects</h1>
        </Row>
        {/* <Row className="justify-content-center py-2">
          <h1 style={{ textAlign: "center" }}>ginadannibale@gmail.com</h1>
        </Row> */}
        <Row className="justify-content-between row">
          <Col className=" col-lg-3 col-12">
            <Card>
              <CardHeader><SocialIcon
                    url="https://github.com/gdannibale/Super-Heroes"
                    className="mr-4"
                    target="_blank"
                    fgColor="#fff"
                    style={{ height: 35, width: 35 }}
                />Super Hero Search</CardHeader>
              <CardBody>
                <CardText>The APP allows the user to search for their favorite superheroes using three API calls to get stats, gifs, and movies onto the screen that is created dynamically.</CardText>
                
                <Button href="https://chadtarpey615.github.io/Super-Heroes/" target="_blank">
                  Start your search!
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col className="col-lg-3 col-12" height="100px">
            <Card>
              <CardHeader><SocialIcon
                    url="https://github.com/gdannibale/Project-3-IdeaBoard"
                    className="mr-4"
                    target="_blank"
                    fgColor="#fff"
                    style={{ height: 35, width: 35 }}
                    />Dream Board</CardHeader>
              <CardBody>
                <CardText>This APP allows the user to create their very own Dream Board.</CardText>
                <Button
                  href="http://ancient-fjord-63838.herokuapp.com/"
                  // target="_blank"
                >
                  Dream Big!
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col className="col-lg-3 col-12" height="100px">
            <Card>
              <CardHeader><SocialIcon
                    url="https://github.com/gdannibale/Google-Book-Search"
                    className="mr-4"
                    target="_blank"
                    fgColor="#fff"
                    style={{ height: 35, width: 35 }}
                    />Google Books Search</CardHeader>
              <CardBody>
                <CardText>This APP allows the user to search and store their favorite books.</CardText>
                <Button
                  href="https://thawing-caverns-35286.herokuapp.com/"
                  // target="_blank"
                >
                  Create your book list!
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col className="col-lg-3 col-12">
            <Card>
              <CardHeader><SocialIcon
                    url="https://github.com/gdannibale/User-Directory"
                    className="mr-4"
                    target="_blank"
                    fgColor="#fff"
                    style={{ height: 35, width: 35 }}
                    />User Directory</CardHeader>
              <CardBody>
                <CardText>This APP allows the user to search and sort users in the directory.</CardText>
                <Button
                  href="https://quiet-stream-42850.herokuapp.com/"
                  // target="_blank"
                >
                  See users!
                </Button>
              </CardBody>
            </Card>
            </Col>
          
        </Row>
      </div>
    </div>
  );
}





// }



//Deleting
// const cardStyle = {
//   border: "3px solid black",
//   height: "100%",
//   width: "30%",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   flexFlow: "column nowrap",
// };

