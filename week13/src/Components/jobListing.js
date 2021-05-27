import React from "react";

const JobListing = (props) => {
  console.log(props);
  return (
    <div className="job-list">
      <span>{props.jobName}</span>
      <span>{props.score}</span>
    </div>
  );
};

export default JobListing;
