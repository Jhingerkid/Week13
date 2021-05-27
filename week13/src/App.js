import "./App.css";
import { getJobs } from "./getJobs.js";
import React, { useState, useEffect } from "react";
import AvailableJobList from "./Components/availableJobList.js";

function App() {
  const [availableJobs, setJobs] = useState([]);
  const [jobTitle, setTitle] = useState([]);
  const [tempTitle, setTempTitle] = useState([]);
  useEffect(() => {
    jobs(setJobs, jobTitle);
  }, [jobTitle]);
  return (
    <div className="App">
      <AvailableJobList jobs={availableJobs} />
      <div>
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
  );
}

async function jobs(setJobs, jobTitle) {
  const jobList = await getJobs(jobTitle);
  setJobs(jobList);
}
export default App;
