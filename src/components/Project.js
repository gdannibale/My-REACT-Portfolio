import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";
import Navbar from "./Navbar/Navbar";
import Footer from "../components/Footer";

// import { Container, Row, Col } from 'reactstrap';



import Home from "../pages/Home";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";

class Project extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    } else if (this.state.currentPage === "About") {
      return <About />;
    } else if (this.state.currentPage === "Portfolio") {
      return <Portfolio />;
    } else if (this.state.currentPage === "Contact") {
      return <Contact />;
    }
  };

  render() {
    return (
      <div>
        <Navbar
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
      
    );
  }
}

export default Project;



// const Project = ({ title, image, text, url, repo }) => {
//     return (
//         <article className="project">
//             {/* <div className="img-container">
//                 <img src={image.default} alt={title} />
//             </div> */}
//             <div className="projects-footer">
//                 <h3>{title}</h3>
//                 <p>{text}</p>
//                 <SocialIcon
//                     url={url}
//                     className="mr-4"
//                     target="_blank"
//                     fgColor="#fff"
//                     style={{ height: 35, width: 35 }}
//                 />
//                 Click icon to see deployed version
//                 <SocialIcon
//                     url={repo}
//                     className="mr-4"
//                     target="_blank"
//                     fgColor="#fff"
//                     style={{ height: 35, width: 35 }}
//                 />
//                 Click icon to see repository
//             </div>
//         </article>
//     )
// }



// export default Project;