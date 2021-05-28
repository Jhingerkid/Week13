import React from "react";
import JobListing from "./jobListing";

const AvailableJobList = (props) => {
  if (props.jobs.length === 0) {
    return null;
  }
  return (
    <div className="available-job-list">
      <div className="job-listing">
        <h2>Job Title</h2>
        <h2>Score</h2>
      </div>
      {props.jobs.data.map((job) => {
        return (
          <JobListing
            selectJobs={props.selectJobs}
            selectedJobs={props.selectedJobs}
            key={job.id}
            id={job.id}
            jobName={job.name}
            score={job.score}
          />
        );
      })}
    </div>
  );
};

export default AvailableJobList;
