import React from "react";
import Navbar from "./Navbar";

const cardStyle = {
  border: "3px solid black",
  height: "100%",
  width: "30%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexFlow: "column nowrap",
};

const Portfolio = () => {
  return (
    <div>
      <Navbar />

      <div class="container">
        <div class="project-card" style={cardStyle}>
          <h2 class="project-card--heading">PROJECT ONE</h2>
          <iframe
            src="https://drive.google.com/file/d/1pwrKOJBsHe9akaeCVSBzDLBR9zo9LO6D/preview"
            width="50%"
            height="100%"
          ></iframe>

          <p style={{ marginBottom: "10px" }}>
            https://gdannibale.github.io/Homework-1/
          </p>
        </div>

        <div class="project-card" style={cardStyle}>
          <h2 class="project-card--heading">Password Generator</h2>
          <iframe
            src="https://drive.google.com/file/d/1mhT9DBI0y2ailxrMADBcNkC-Hh5AnSfF/preview"
            width="340"
            height="220"
          ></iframe>
          <p style={{ marginBottom: "10px" }}>
            Screencastify did not record the prompts, but you can see the
            password being genorated in the end.
            https://github.com/gdannibale/Password/settings
          </p>
        </div>

        <div class="project-card" style={cardStyle}>
          <h2 class="project-card--heading">Super Heroes</h2>
          <iframe
            src="https://drive.google.com/file/d/1j5iHtP0UeXq7TiqeP6GqcHirIJmhjoLZ/preview"
            width="340"
            height="220"
          ></iframe>
          <p style={{ marginBottom: "10px" }}>
            Screencastify did not record the prompts, but you can see the
            password being genorated in the end.
            https://github.com/gdannibale/Password/settings
          </p>
        </div>

        <div class="project-card" style={cardStyle}>
          <h2 class="project-card--heading">Nutrition Tracker</h2>
          <iframe
            src="https://drive.google.com/file/d/13OWzqVj--7_okjrIrWHGlIdtNgcTSiI6/preview"
            width="340"
            height="220"
          ></iframe>
          <p style={{ marginBottom: "10px" }}>
            https://whispering-river-77918.herokuapp.com/#
          </p>
        </div>

        <div class="project-card" style={cardStyle}>
          <h2 class="project-card--heading">Google Books Search</h2>
          <iframe
            src="https://drive.google.com/file/d/1PS97qz5H-ORRV5SKZNeGXEV-9Rn8BHO5/preview"
            width="340"
            height="220"
          ></iframe>
          <p style={{ marginBottom: "10px" }}>
            https://thawing-caverns-35286.herokuapp.com/
          </p>
        </div>

        {/* closes container */}
      </div>

      {/* closes main div */}
    </div>
  );
};

export default Portfolio;
