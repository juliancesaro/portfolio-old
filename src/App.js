import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
import Particles from "react-particles-js"
import Navbar from "./components/navbar/Navbar"
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact"
import AboutMe from "./components/aboutMe/AboutMe"

const App = () => {
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
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <AboutMe />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
