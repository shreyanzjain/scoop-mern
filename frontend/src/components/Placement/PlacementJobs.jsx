import React from "react";
import WorkIcon from '@mui/icons-material/Work';

function PlacementJobs() {
  const jobs = {
    job1: {
      title: "SDE 1",
      company: "Scoop",
      status: "Completed",
    },
    job2: {
      title: "Options Trader",
      company: "Uber",
      status: "Recieving Applications",
    },
    job3: {
      title: "Analyst",
      company: "Kotak Bank",
      status: "Interviewing",
    },
  };
  return (
    <div className="container pb-6 w-5/6 rounded-sm bg-slate-200" style={{height: "93vh"}}>
      <div className="flex text-2xl font-bold text-white mt-2 ms-2 me-2 rounded-sm h-1/6 bg-gray-800 border-b-2 border-t-2 border-gray-300 items-center justify-start">
        <WorkIcon className="ms-6"/>
        <p className="ms-2">Jobs List</p>
      </div>
      <div className="flex mt-2 ms-2 me-2 rounded-sm h-5/6 bg-gray-50 border-b-2 border-t-2 border-gray-300 items-center justify-center">
        <p className="me-2">Emptiness.....</p>
        <button className="border-2 rounded-lg px-2 border-sky-950 text-sky-950 hover:bg-sky-950 hover:text-white">Add Jobs</button>
      </div>
    </div>
  );
}

export default PlacementJobs;
