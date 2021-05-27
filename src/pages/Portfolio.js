import React from "react";
import { Projects } from "../utils/Projects.js";
import Project from "../components/Project.js"
// import Navbar from "../components/Navbar/Navbar";

export default function Portfolio(props) {
  return (
      <>
          <h1>My Projects</h1>

          <div className="projects-center" id="portfolio">

              {
                  Projects.map((projects) => {
                      return <Project key={projects.id} {...projects} />
                  })
              }
          </div >
      </>
  )
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

