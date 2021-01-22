
import "./App.css";
import React from "react";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import Home from "./components/pages/Home";
import Navbar from "./components/pages/Navbar";


function App() {
  return (
    <div className="App">
      <Contact/>
      <Portfolio/>
      <Home/>
      <Navbar/>
    </div>
    
  );
}

export default App;
