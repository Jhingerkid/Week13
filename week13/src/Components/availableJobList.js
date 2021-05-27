import React from "react";
import JobListing from "./jobListing";

const AvailableJobList = (props) => {
  if (props.jobs.length === 0) {
    return null;
  }
  return (
    <div className="available-job-list">
      {props.jobs.data.map((job) => {
        return <JobListing key={job.id} jobName={job.name} score={job.score} />;
      })}
    </div>
  );
};

export default AvailableJobList;
