import React from "react";
import "./App.css";
import skillTree from "./assets/honeycomb3.png";
import CS from "./assets/comingsoon.jpg";
import PersonalIMG from "./assets/PersonalIMG.jpg";
import WWW from "./assets/WWW.jpg";
// import Project1 from "./Components/Project1";

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <section className="title-section">
        <h2>Thomas</h2>
        <h1>Hoover</h1>
        <h4>Full-Stack </h4>
        <h4>Junior Web Developer</h4>
        <h5>Birmingham, AL</h5>
        <h5>thooverdev@gmail.com</h5>
        <h5>210-867-6362</h5>
        <section className="icon-section">
          <a
            href="https://www.linkedin.com/in/thomas-hoover-781540195/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
          >
            <i class="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/thoover1"
            target="_blank"
            rel="noopener noreferrer"
            className="github"
          >
            <i class="fab fa-github"></i>
          </a>
          <a className="email">
            <i class="far fa-paper-plane"></i>
          </a>
          <a className="resume">
            <i class="far fa-file"></i>
          </a>
        </section>
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
      <section className="about-section">
        <h4 className="about">About Me</h4>
        <p>
          Former PhD Student In Nutrition Turned Proud Coding Noob @
          DevMountain.
        </p>
        <p>Man Of Few Words... Unless I Have Questions, Then Not So Much.</p>
        <p>Hard Worker. Hard Relaxer.</p>
        <p className="long-about">
          Interests:
          <p className="long-about-a">
            Coding(duh.), All Things Marvel, Video Games, Football, Burgers,
            Beers, Dogs, Coffee, Science, DIY Home Projects.
          </p>
        </p>
        <p>Texas boy at heart. GO COWBOYS!</p>
        {/* <div className="about-icons">
          <div className="about-icons-a">
            <i class="fas fa-film"></i>
            <i class="fas fa-puzzle-piece"></i>
            <i class="fas fa-gamepad"></i>
            <i class="fas fa-laptop-code"></i>
            <i class="fab fa-free-code-camp"></i>
            <i class="fas fa-football-ball"></i>
            <i class="fas fa-beer"></i>
            <i class="fas fa-hamburger"></i>
            <i class="fas fa-coffee"></i>
            <i class="fas fa-rocket"></i>
            <i class="fas fa-seedling"></i>
            <i class="fas fa-tools"></i>
          </div>
        </div> */}
      </section>
      {/* <i class="fas fa-mouse"></i> */}
      <section className="projects-section">
        <h4>Projects</h4>
        <section className="Group">
          <img src={CS} alt="/" />
          <div className="listed-uses">
            <ul>
              Skills used:
              <li>React</li>
              <li>NodeJS</li>
              <li>MongoDB</li>
              <li>ExpressJS</li>
              <li>Axios</li>
              <li>SASS</li>
            </ul>
            <div className="summary-buttons">
              <div className="summary">
                <h3>Summary of Project:</h3>
                <p>Group Project is in current brainstorming mode!</p>
              </div>
              <div className="button-links">
                <a
                  href="https://dunkingonuts.com/#/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>No URL Yet</button>
                </a>
                <a
                  href="https://dunkingonuts.com/#/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>TBA</button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="Personal">
          <img src={PersonalIMG} alt="/" />
          <div className="listed-uses">
            <ul>
              Skills used:
              <li>React</li>
              <li>NodeJS</li>
              <li>PostgreSQL</li>
              <li>ExpressJS</li>
              <li>Axios</li>
              <li>SASS</li>
            </ul>
            <div className="summary-buttons">
              <div className="summary">
                <h3>Summary of Project:</h3>
                <p>
                  As an addition to the actual Dunkin' website, my app (built as
                  a class project) adds E-commerce capabilities when shopping
                  Dunkin' products. Additional skills used include, Redux,
                  Google Cloud Platform, AWS, Stripe, Twillio, NodeMailer,
                  DigitalOcean, Nginx, and npm.
                </p>
              </div>
              <div className="button-links">
                <a
                  href="https://dunkingonuts.com/#/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Visit Site</button>
                </a>
                <a
                  href="https://github.com/thoover1/dunkin-gonuts"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>View Code</button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="NoDB">
          <img src={WWW} alt="/" />
          <div className="listed-uses">
            <ul>
              Skills used:
              <li>React</li>
              <li>NodeJS</li>
              <li>ExpressJS</li>
              <li>Axios</li>
              <li>HTML5</li>
              <li>CSS3</li>
            </ul>
            <div className="summary-buttons">
              <div className="summary">
                <h3>Summary of Project:</h3>
                <p>
                  Created a blog post website (criteria was to use no database)
                  where I created personalized week-to-week fantasy football
                  advice displaying the top 10 pickups from the waiver wire each
                  week of the NFL regular season.
                </p>
              </div>
              <div className="button-links">
                <a target="_blank" rel="noopener noreferrer">
                  <button>Not Hosted</button>
                </a>
                <a
                  href="https://github.com/thoover1/NoDB_Project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>View Code</button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;
