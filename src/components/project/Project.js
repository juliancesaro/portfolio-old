import React from "react"
import Tags from "../tags/Tags"

const Project = ({ link, name, tags, about }) => {
  return (
    <div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <p className="content-link">{name}:</p>
      </a>
      <Tags tagNames={tags} />
      <p>{about}</p>
    </div>
  )
}

export default Project
