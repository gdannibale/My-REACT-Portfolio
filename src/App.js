import React from "react";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Portfolio from "./pages/Portfolio";
// import Contact from "./pages/Contact";
// import Navbar from "../src/components/Navbar/Navbar";
import Wrapper from "../src/components/Wrapper/Wrapper";
import Project from "../src/components/Project";

import './App.css';
import Footer from "./components/Footer";




function App() {
  return (
    <div>
      <Wrapper>
      {/* <Navbar />
      <About /> */}
      <Project />
      </Wrapper>
      
    </div>
  );
}

export default App;