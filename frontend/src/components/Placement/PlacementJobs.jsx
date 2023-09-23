import React from "react";
import WorkIcon from '@mui/icons-material/Work';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';

function PlacementJobs() {
  const jobs = {
    job1: {
      title: "SDE 1",
      company: "Apple",
      status: "Completed",
      salary: "Rs. 4,00,000"
    },
    job2: {
      title: "Options Trader",
      company: "Uber",
      status: "Recieving Applications",
      salary: "Rs. 6,00,000"
    },
    job3: {
      title: "Analyst",
      company: "Kotak Bank",
      status: "Interviewing",
      salary: "Rs. 3,68,235"
    },
  };
  return (
    <div className="container pb-6 w-5/6 bg-whitesmoke bg-opacity-30" style={{height: "93vh"}}>
      <div className="flex text-2xl font-bold text-whitesmoke mt-2 ms-2 me-2 rounded-t-lg h-1/6 bg-licorice items-center justify-start">
        <WorkIcon className="ms-6"/>
        <p className="ms-2">Jobs List</p>
      </div>
      <div className="flex-col text-lg mt-2 ms-2 me-2 h-5/6 bg-whitesmoke text-licorice">
        {/* When there are jobs posted */}
        <div className="container flex px-2 items-center justify-between bg-whitesmoke border-b-2 border-licorice h-1/6">
          <div className="flex items-center">
            <div className="ms-2">
              <p className="text-2xl font-bold">{jobs.job1.title}</p>
              <p className="text-lg ">{jobs.job1.company}</p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div>
              <a className="border-2 rounded-xl px-2 py-1 border-licorice bg-ashgray">{jobs.job1.status}</a>
            </div> 
            <div>
              <a href="#" className="flex items-center justify-between border-2 rounded-xl gap-1 px-2 py-0.5 border-licorice bg-licorice text-whitesmoke">Details<OpenInNewRoundedIcon/></a>
            </div>
          </div>
        </div>
        <div className="container flex px-2 items-center justify-between bg-whitesmoke border-b-2 border-licorice h-1/6">
          <div className="flex items-center">
            <div className="ms-2">
              <p className="text-2xl font-bold">{jobs.job2.title}</p>
              <p className="text-lg ">{jobs.job2.company}</p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div>
              <a className="border-2 rounded-xl px-2 py-1 border-licorice bg-whitesmoke">{jobs.job2.status}</a>
            </div> 
            <div>
              <a href="#" className="flex items-center justify-between border-2 rounded-xl gap-1 px-2 py-0.5 border-licorice bg-licorice text-whitesmoke">Details<OpenInNewRoundedIcon/></a>
            </div>
          </div>
        </div>
        <div className="container flex px-2 items-center justify-between bg-whitesmoke border-b-2 border-licorice h-1/6">
          <div className="flex items-center">
            <div className="ms-2">
              <p className="text-2xl font-bold">{jobs.job3.title}</p>
              <p className="text-lg ">{jobs.job3.company}</p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div>
              <a className="border-2 rounded-xl px-2 py-1 border-licorice bg-tan">{jobs.job3.status}</a>
            </div> 
            <div>
              <a href="#" className="flex items-center justify-between border-2 rounded-xl gap-1 px-2 py-0.5 border-licorice bg-licorice text-whitesmoke">Details<OpenInNewRoundedIcon/></a>
            </div>
          </div>
        </div>    
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
