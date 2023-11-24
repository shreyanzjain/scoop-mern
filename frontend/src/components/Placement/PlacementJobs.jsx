import React from "react";
import WorkIcon from "@mui/icons-material/Work";
import JobRow from "./JobRow";
import axios from "axios";
import { useState, useEffect } from "react";
// import jobs from "./Data.json";

function PlacementJobs() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const getData = async () => {
      await axios
        .get("http://127.0.0.1:3000/jobs/get", {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res.data);
          setJobs(res.data);
        });
    };
    getData();
  }, []);

  const jobList = jobs.map(({ job_role, company, status, id }) => (
    <JobRow key={id} id={id} title={job_role} company={company} status={status} />
  ));

  return (
    <div className="container m-2 w-5/6 bg-whitesmoke bg-opacity-30">
      <div className="flex-col h-5/6 text-lg bg-whitesmoke text-licorice overflow-y-scroll">
        {jobList}
      </div>
    </div>
  );
}

export default PlacementJobs;
