import React from "react";

const SkillsList = (props) => {
  return (
    <div className="skill-list">
      {props.displaySkills.map((skill) => {
        return <span>{skill}</span>;
      })}
    </div>
  );
};

export default SkillsList;
