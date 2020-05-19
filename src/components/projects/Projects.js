import React from "react"
import "./Projects.css"
import ContentCard from "../contentCard/ContentCard"
import Project from "../project/Project"
import data from "../../data/projects.json"

const Projects = () => {
  return (
    <ContentCard>
      <ul className="projects">
        {data.projects.map((project) => (
          <li key={project.name}>
            <Project
              link={project.link}
              name={project.name}
              tags={project.tags}
              about={project.about}
            />
          </li>
        ))}
      </ul>
    </ContentCard>
  )
}

export default Projects
