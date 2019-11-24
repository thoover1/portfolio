import React from "react";
import "./App.css";
import skillTree from "./assets/honeycomb3.png";
// import Project1 from "./Components/Project1";

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <section className="icon-section">
        <a className="linkedin">
          <i class="fab fa-linkedin">
            <h3>LinkedIn</h3>
          </i>
        </a>
        <a className="github">
          <i class="fab fa-github">
            <h3>Github</h3>
          </i>
        </a>
        <a className="email">
          <i class="far fa-paper-plane">
            <h3>Email</h3>
          </i>
        </a>
        <a className="resume">
          <i class="far fa-file">
            <h3>Resume</h3>
          </i>
        </a>
      </section>
      <section className="title-section">
        <h2>Thomas</h2>
        <h1>Hoover</h1>
        <h4>Full-Stack Web Developer</h4>
        <h5>Birmingham, AL</h5>
        <h5>thooverdev@gmail.com</h5>
        <h5>210-867-6362</h5>
      </section>
      {/* <div className="skill-list">
        <h6 className="html">HTML5</h6>
        <h6 className="css">CSS3</h6>
        <h6 className="mongoDB">MongoDB</h6>
        <h6 className="React">
          React/<h6 className="Redux">Redux</h6>
        </h6>
        <h6 className="NodeJS">NodeJS</h6>
        <h6 className="PostgreSQL">PostgreSQL</h6>
        <h6 className="Javascript">Javascript</h6>
      </div> */}
      <section className="skills-section">
        <h4 className="top-skills">Top Skills</h4>
        <img src={skillTree}></img>
      </section>

      {/* <Project1 /> */}
    </div>
  );
}

export default App;
