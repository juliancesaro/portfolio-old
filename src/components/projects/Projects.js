import React, { useState } from "react"
import "./Projects.css"
import ContentCard from "../contentCard/ContentCard"
import Project from "../project/Project"
import Tag from "../tag/Tag"
import data from "../../data/projects.json"

const Projects = () => {
  const [filter, setFilter] = useState("")
  const projects = data.projects

  const projectsToShow =
    filter.length === 0
      ? projects
      : projects.filter((project) => project.tags.includes(filter))

  return (
    <ContentCard>
      <div className="alltag">
        <Tag tagName={"All"} setFilter={() => setFilter("")} />
      </div>
      <ul className="projects">
        {projectsToShow.map((project) => (
          <li key={project.name}>
            <Project
              link={project.link}
              name={project.name}
              tags={project.tags}
              about={project.about}
              filter={filter}
              setFilter={setFilter}
            />
          </li>
        ))}
      </ul>
    </ContentCard>
  )
}

export default Projects
