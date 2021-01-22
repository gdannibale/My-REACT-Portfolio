import React from "react";
import Navbar from './Navbar'

const Home = () => {
  return (
  <div>
    <Navbar/>
  <div>
    <h1>Home Page</h1>
  </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="Home.js">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Portfolio.js">Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Contact.js">Contact</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
           
          </form>
        </div>
      </nav>
      <div class="container">
      <div>
      <div class="col-md-9">
                          <p>My name is Gina Dannibale. I am looking to pursue new career options. I am currently working for CHS as a HRIS Analyst. I hope to complete this course with a new understanding of web development. 
                        </p>

                      </div>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="car-mt-2">
                    <div class="card-body">
                        <h5 class="card-title">Gina Dannibale</h5>
                        <h6 class="card-subtitle mb-2 text-muted">HRIS Analyst</h6>
                        <p class="card-text">I work for a payroll company and do the of back end IT troubleshooting. I also do reporting and issue security access.</p>
                        <a href="https://www.linkedin.com/feed/">Linked In</a>
                        

                  </div>
              </div>
      </div>
      </div>
   
  );
  
};
export default Home



   


