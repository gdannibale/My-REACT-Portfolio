import React, { Component } from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { SocialIcon } from "react-social-icons"
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Portfolio from "./pages/Portfolio";
// import Contact from "./pages/Contact";




export default function NavBar(props) {
    return(
        <Navbar fixed="top" bg="dark" variant="dark" expand="md">
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
            // url={Resume}
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }} /> */}
        </div>
    {/* { <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form> */}
    </Navbar.Collapse>
  </Navbar>

    )
// export default Navbar;



// const Navbar =()=> {
//     return(
//         <div>
    
//             <nav class="navbar navbar-expand-lg navbar-light bg-light">
//             {/* <a class="navbar-brand" href="#">Navbar</a> */}
//             <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span class="navbar-toggler-icon"></span>
//             </button>
            
//             <div class="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul class="navbar-nav mr-auto">
                    
//                 <li class="nav-item active">
//                     <a class="nav-link" href="Home.js">Home</a>
//                 </li>
//                 <li class="nav-item">
//                     <a class="nav-link" href="Portfolio.js">Portfolio</a>
//                 </li>
//                 <li class="nav-item">
//                     <a class="nav-link" href="Contact.js">Contact</a>
//                 </li>
//                 </ul>
//                 <form class="form-inline my-2 my-lg-0">
//                 <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
//                 <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//                 </form>
//             </div>
//             </nav>
//         </div>
//     )
}

