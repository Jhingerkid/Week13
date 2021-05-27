import React from "react";
import JobListing from "./jobListing";

const JobList = (props) => {
  if (props.jobs.length === 0) {
    return null;
  }
  return (
    <div className="job-list">
      {props.jobs.data.map((job) => {
        return <JobListing key={job.id} jobName={job.name} score={job.score} />;
      })}
    </div>
  );
};

export default JobList;
