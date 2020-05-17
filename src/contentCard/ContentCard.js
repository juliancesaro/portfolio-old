import React from "react";
import "./ContentCard.css";

function ContentCard(props) {
  return (
    <div className="content-card">
      <div className="content">{props.children}</div>
    </div>
  );
}

export default ContentCard;
