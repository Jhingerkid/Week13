import "./App.css";
import { getJobs } from "./Components/getJobs.js";
import React, { useState, useEffect } from "react";
import JobList from "./Components/jobList";

function App() {
  const [availableJobs, setJobs] = useState([]);
  useEffect(() => {
    jobs(setJobs);
  }, []);
  return (
    <div className="App">
      <JobList jobs={availableJobs} />
    </div>
  );
}

async function jobs(setJobs) {
  const jobList = await getJobs();
  setJobs(jobList);
}
export default App;
