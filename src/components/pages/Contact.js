import React from "react";
import Navbar from './Navbar'
const Contact = () => {
  return(
  
  <div>
  <div>
    <h1>Contact Page</h1>
  </div>
    <Navbar />
   
      <div class="container">
      <form>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input type="email" class="form-control" id="inputEmail4">
            </input>
          </div>
          <div class="form-group col-md-6">
            <label for="inputPhonenumber">Phone Number</label>
            <input type="text" class="form-control" id="inputPhonenumber"></input>
          </div>
        </div>
        <div class="form-group">
          <label for="inputAddress">Address</label>
          <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
        </div>
        <div class="form-group">
          <label for="inputAddress2">Address 2</label>
          <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCity">City</label>
            <input type="text" class="form-control" id="inputCity"></input>
          </div>
          <div class="form-group col-md-4">
            <label for="inputState">State</label>
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="form-group col-md-2">
            <label for="inputZip">Zip</label>
            <input type="text" class="form-control" id="inputZip"></input>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </div>
      </div>
  )
  };  


 export default Contact;