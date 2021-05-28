import "./App.css";
import { getJobs } from "./getJobs.js";
import React, { useState, useEffect } from "react";
import AvailableJobList from "./Components/availableJobList.js";
import SelectedJobList from "./Components/selectedJobList";
import { getSkills } from "./getSkills";

function App() {
  const [availableJobs, setAvailableJobs] = useState([]);
  const [selectedJobs, setSelectJobs] = useState([]);
  const [jobTitle, setTitle] = useState([]);
  const [tempTitle, setTempTitle] = useState([]);
  const [skillList, setSkills] = useState([]);
  console.log(skillList); // take this variable and display a math.random of the array to the demanded skills list whenever a job is added
  useEffect(() => {
    jobs(setAvailableJobs, jobTitle);
    skills(setSkills, jobTitle);
  }, [jobTitle]);
  return (
    <div className="App">
      <div className="select-jobs">
        <h1>Available Jobs</h1>
        <AvailableJobList
          selectedJobs={selectedJobs}
          selectJobs={setSelectJobs}
          jobs={availableJobs}
        />
        <div className="search-jobs">
          <input
            type="text"
            onChange={(event) => setTempTitle(event.target.value)}
          />
          <input
            type="button"
            value="Search"
            onClick={() => {
              setTitle(tempTitle);
            }}
          />
        </div>
      </div>
      <div className="demand-skills"></div>
      <div className="selected-jobs">
        <h1>Selected Jobs</h1>
        <SelectedJobList
          selectedJobs={selectedJobs}
          setSelectJobs={setSelectJobs}
        />
      </div>
    </div>
  );
}

async function jobs(setJobs, jobTitle) {
  const jobList = await getJobs(jobTitle);
  setJobs(jobList);
}

async function skills(setSkills, jobTitle) {
  const skills = await getSkills(jobTitle);
  setSkills(skills);
}

export default App;
