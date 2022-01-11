import React from "react";
import "../styles/project.css";

function Project(props) {
  return (
    <div className="Project">
      <h3>
        {props.heading} <span>{props.date}</span>{" "}
      </h3>
      <br />
      <p>{props.desc}</p>
      <div className="languages">
        {props.lang.map((item) => {
          console.log(item);
          return <i>{item}</i>;
        })}
      </div>
    </div>
  );
}

export default Project;
