import React from "react";
import SelectedJobs from "./selectedJobListing";

const SelectedJobList = (props) => {
  return (
    <div className="selected-job-list">
      <div className="job-listing">
        <h2>Job Title</h2>
        <h2>Score</h2>
      </div>
      {props.selectedJobs.map((job) => {
        return (
          <SelectedJobs
            setSelectJobs={props.setSelectJobs}
            selectedJobs={props.selectedJobs}
            key={job.id}
            id={job.id}
            jobName={job.jobName}
            score={job.score}
          />
        );
      })}
    </div>
  );
};

export default SelectedJobList;
