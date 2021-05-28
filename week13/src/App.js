import "./App.css";
import { getJobs } from "./getJobs.js";
import React, { useState, useEffect } from "react";
import AvailableJobList from "./Components/availableJobList.js";
import SelectedJobList from "./Components/selectedJobList";
import { getSkills } from "./getSkills";
import SkillsList from "./Components/skillsList";

function App() {
  const [availableJobs, setAvailableJobs] = useState([]);
  const [selectedJobs, setSelectJobs] = useState([]);
  const [jobTitle, setTitle] = useState([]);
  const [tempTitle, setTempTitle] = useState([]);
  const [skillList, setSkills] = useState([]);
  const [displaySkills, setDisplay] = useState([]);
  const [jobCountColor, setColor] = useState("");
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
          skillList={skillList}
          setSkills={setSkills}
          setDisplay={setDisplay}
          displaySkills={displaySkills}
          setColor={setColor}
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
      <div className="demand-skills">
        <h1>Skill Demand</h1>
        <SkillsList displaySkills={displaySkills} />
      </div>
      <div className="selected-jobs">
        <div className="selected-job-header">
          <h1>Selected Jobs</h1>
          <div className="job-container">
            <span id={jobCountColor}>{selectedJobs.length}</span>
          </div>
        </div>
        <SelectedJobList
          selectedJobs={selectedJobs}
          setSelectJobs={setSelectJobs}
          setColor={setColor}
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
