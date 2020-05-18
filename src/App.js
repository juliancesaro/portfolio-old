import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Particles from "react-particles-js";
import Navbar from "./navbar/Navbar";
import ContentCard from "./contentCard/ContentCard";

function App() {
  return (
    <div className="App">
      <Particles
        className="particles"
        params={{
          particles: {
            number: { value: 20, density: { enable: false } },
            color: { value: ["#cc892b", "#1cd6b1", "#8c4ec7", "#8bc74e"] },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: true,
                speed: 0.2,
                opacity_min: 0.3,
                sync: false,
              },
            },
            size: {
              value: 5,
              random: true,
              anim: { enable: false },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.1,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: true,
              straight: false,
              bounce: true,
              attract: { enable: false, rotateX: 600, rotateY: 1200 },
            },
          },
          retina_detect: true,
        }}
      />
      <Router>
        <Navbar />
        <Switch>
          <Route path="/projects">
            <ContentCard>
              <a href="https://whispering-oasis-98910.herokuapp.com/">
                <p className="content-link">GOshop:</p>
              </a>
              <div className="languages">
                <div className="language">
                  <code>ReactJS</code>
                </div>
                <div className="language">
                  <code>Node.js</code>
                </div>
                <div className="language">
                  <code>MongoDB</code>
                </div>
              </div>
              <p>
                GOshop is a full-stack mock online store still under
                development. Currently, users can create an account, post items,
                and add items to their cart. The project was deployed using
                Heroku.
              </p>
              <a href="https://juliancesaro.github.io/vaporwave-website/">
                <p className="content-link">Vaporwave website:</p>
              </a>
              <div className="languages">
                <div className="language">
                  <code>HTML</code>
                </div>
                <div className="language">
                  <code>CSS</code>
                </div>
                <div className="language">
                  <code>JS</code>
                </div>
              </div>
              <p>
                This project is a website detailing the popular music microgenre
                'vaporwave'. The website includes a music player made with
                jQuery to which users can load and play songs.
              </p>
              <p className="content-link">
                Compiler for Jasonelle (coming soon)
              </p>
              <div className="languages">
                <div className="language">
                  <code>TS</code>
                </div>
                <div className="language">
                  <code>Node.js</code>
                </div>
              </div>
              <p className="content-link">
                Conway's Game of Life (coming soon)
              </p>
              <div className="languages">
                <div className="language">
                  <code>ReactJS</code>
                </div>
                <div className="language">
                  <code>Node.js</code>
                </div>
              </div>
            </ContentCard>
          </Route>
          <Route path="/resume">
            <ContentCard>
              <p className="content-link">Experience:</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </ContentCard>
          </Route>
          <Route path="/">
            <ContentCard>
              <p>
                I'm a fourth-year Software Engineering student at Macquarie
                University.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </ContentCard>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
