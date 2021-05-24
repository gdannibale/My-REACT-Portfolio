import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from "../src/components/Navbar/Navbar";
import Wrapper from "../src/components/Wrapper/Wrapper";

import './App.css';




function App() {
  return (
    <div>
      <Wrapper>
      <Navbar />
      <About />
      <Home />
      <Portfolio />
      <Contact />
      </Wrapper>
    </div>
  );
}

export default App;