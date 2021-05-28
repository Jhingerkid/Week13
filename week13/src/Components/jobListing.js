import React from "react";

const JobListing = (props) => {
  function selectJob() {
    const sJobList = [...props.selectedJobs];
    let selectedJob = {
      jobName: props.jobName,
      score: props.score,
      id: props.id,
    };
    sJobList.push(selectedJob);
    props.selectJobs(sJobList);
  }
  return (
    <div className="job-item">
      <div className="job-listing">
        <span>{props.jobName}</span>
        <span>{props.score}</span>
      </div>
      <button
        onClick={() => {
          selectJob();
        }}
      ></button>
    </div>
  );
};

export default JobListing;
