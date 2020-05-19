import React from "react"
import "./Contact.css"
import ContentCard from "../contentCard/ContentCard"
import linkedin from "../../images/linkedin.png"
import github from "../../images/github.png"
import facebook from "../../images/facebook.png"

const Contact = () => {
  return (
    <ContentCard>
      <div className="contacts">
        <p className="email">julianjcesaro@gmail.com</p>
        <div className="logos">
          <a
            href="https://github.com/juliancesaro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="Github Logo" width="50px" />
          </a>
          <a
            href="https://www.linkedin.com/in/julian-cesaro-015b9a156/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="Linkedin Logo" width="40px" />
          </a>

          <a
            href="https://www.facebook.com/julian.cesaro.1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="Facebook Logo" width="50px" />
          </a>
        </div>
      </div>
    </ContentCard>
  )
}

export default Contact
