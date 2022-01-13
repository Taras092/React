import React, { Component } from "react";
import "./index.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <form className="login-form">
  <h1 className="form-title">Profile</h1>
  <div className="form-control">
    <label className="form-label" for="name">Name</label>
    <input className="form-input" type="text" id="name" name="name" value=""/>
  </div>
  <div className="form-control">
    <label className="form-label" for="student">Student</label>
    <input className="form-input" type="checkbox" id="student" name="student"/>
  </div>
  <div class="form-control">
    <label class="form-label" id="occupation" for="occupation">Occupation</label>
    <select name="occupation" class="form-input">
      <option value="london">London</option>
      <option value="new-york">New York</option>
      <option value="coconut">Sidney</option>
      <option value="mango">Berlin</option>
    </select>
  </div>
  <div className="form-control">
    <label className="form-label" id="about" for="about">About</label>
    <textarea name="about" className="form-input"></textarea>
  </div>
  <button className="submit-button" type="submit">Submit</button>
</form>
    );
  }
}

export default App;