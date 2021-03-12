
// import "./App.css";
// import React from "react";
// import Contact from "./components/pages/Contact";
// import Portfolio from "./components/pages/Portfolio";
// import Home from "./components/pages/Home";
// import Navbar from "./components/Navbar";


// function App() {
//   return (
//     <div className="App">
//       <Contact/>
//       <Portfolio/>
//       <Home/>
//       <Navbar/>
//     </div>
    
//   );
// }

// export default App;

import React from "react";
import Home from "./pages/Home";
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
      {/* <About /> */}
      {/* <Home /> */}
      <Portfolio />
      {/* <Contact /> */}
      </Wrapper>
    </div>
  );
}

export default App;