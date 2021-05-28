import React from "react";

const SelectedJobs = (props) => {
  function removeJob() {
    props.setColor("red");
    var sJobList = [...props.selectedJobs];
    sJobList = sJobList.filter((item) => item.id !== props.id);
    props.setSelectJobs(sJobList);
  }
  return (
    <div className="job-item">
      <div className="job-listing">
        <span>{props.jobName}</span>
        <span>{props.score}</span>
      </div>
      <button
        onClick={() => {
          removeJob();
        }}
      ></button>
    </div>
  );
};

export default SelectedJobs;
