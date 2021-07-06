import React, { Component } from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { SocialIcon } from "react-social-icons"
import { BsBriefcase } from "react-icons/bs";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Portfolio from "./pages/Portfolio";
// import Contact from "./pages/Contact";




export default function NavBar(props) {
    return(
        <Navbar fixed="top" bg="dark" variant="dark" expand="md" bg-color="darkgrey">
            {/* <Navbar.Brand href="#home">Gina Dannibale</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link
                        href="#home"
                        onClick={() => props.handlePageChange("Home")}
                        activeClass="active"
                        to="Home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={800}
                        activeClassName="text-white"
                        className="d-inline-block align-top">
                        Gina Dannibale
                    </Nav.Link>
                    <Nav.Link
                        href="#about"
                        onClick={() => props.handlePageChange("About")}
                        activeClass="active"
                        to="About"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={800}
                        activeClassName="text-white"
                        className="d-inline-block align-top">
                        About
                    </Nav.Link>
                    <Nav.Link
                        href="#portfolio"
                        onClick={() => props.handlePageChange("Portfolio")}
                        activeClass="active"
                        to="Portfolio"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={800}
                        activeClassName="text-white"
                        className="">
                        Portfolio
                    </Nav.Link>
                    <Nav.Link
                        href="#contact"
                        onClick={() => props.handlePageChange("Contact")}
                        activeClass="active"
                        to="Contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={800}
                        activeClassName="text-white"
                        className="">
                        Contact
                    </Nav.Link>
                </Nav>
                <div className="justify-content-between">
          <SocialIcon
            url="https://github.com/gdannibale"
            className="mr-4"

            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }} />
          <SocialIcon
            url="https://www.linkedin.com/in/gina-dannibale-b824303a/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }} />
            <SocialIcon
            url="https://www.canva.com/design/DAEjcR6FQOE/T-iWFFvH96H08o3A5-B-3g/view?utm_content=DAEjcR6FQOE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
            bgcolor="white"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }} />
          {/* <BsBriefcase
            href="https://www.canva.com/design/DAEjcR6FQOE/T-iWFFvH96H08o3A5-B-3g/view?utm_content=DAEjcR6FQOE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
            className="mr-4"
            target="_blank"
            fgColor="black"
            style={{ height: 35, width: 35 }}
          /> */}
        </div>
    </Navbar.Collapse>
  </Navbar>

    )
}

