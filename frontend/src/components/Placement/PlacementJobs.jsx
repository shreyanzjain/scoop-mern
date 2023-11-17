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

  const jobList = jobs.map(({ job_role, company, status }) => (
    <JobRow title={job_role} company={company} status={status} />
  ));

  return (
    <div className="container m-2 w-5/6 bg-whitesmoke bg-opacity-30">
      <div className="flex text-2xl font-bold text-whitesmoke rounded-t-lg h-1/6 bg-licorice items-center justify-start">
        <WorkIcon className="ms-4" />
        <p className="ms-2">Jobs</p>
      </div>
      <div className="flex-col h-5/6 text-lg mt-2 bg-whitesmoke text-licorice overflow-y-scroll">
        {jobList}
        {/* When there are jobs posted */}
        {/* When there are no jobs posted */}
        {/* <div className="px-4 pb-2 border-b-2 border-ebony container flex items-center justify-between">
          <div className="w-3/6"></div>
          <p className="me-2">Nothing to see here. Have you added any jobs yet?</p>
          <button className="border-2 rounded-lg px-2 border-licorice text-licorice hover:bg-licorice hover:text-whitesmoke">Add Jobs</button>
        </div> */}
      </div>
    </div>
  );
}

export default PlacementJobs;
