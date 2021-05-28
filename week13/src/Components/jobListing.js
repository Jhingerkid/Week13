import React from "react";

const JobListing = (props) => {
  function selectJob(e) {
    e.preventDefault();
    props.setColor("green");
    const sJobList = [...props.selectedJobs];
    let selectedJob = {
      jobName: props.jobName,
      score: props.score,
      id: props.id,
    };
    sJobList.push(selectedJob);
    props.selectJobs(sJobList);
    var randomSkillNumber = Math.floor(
      Math.random() * props.skillList.data.length
    );
    let randomSkill = props.skillList.data[randomSkillNumber].name;
    let newDisplaySkills = props.displaySkills;
    newDisplaySkills.push(randomSkill);
  }
  return (
    <div className="job-item">
      <div className="job-listing">
        <span>{props.jobName}</span>
        <span>{props.score}</span>
      </div>
      <button
        onClick={(e) => {
          selectJob(e);
        }}
      ></button>
    </div>
  );
};

export default JobListing;
