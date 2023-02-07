import React from "react";
import "./WorkCard.css";
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="projs" />
      
      <h2 className="project-title">{props.title}</h2>

      <div className="pro-details">
        <p>{props.text}</p>

        <div className="pro-button">
          {/* <NavLink to={props.view} className="pro-btns">
            {" "}
            Viewa
          </NavLink> */}
           <a href={props.view} className="pro-btns">
            {" "}
            View
          </a>

          <NavLink to="google.com" className="pro-btns">
            {" "}
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
