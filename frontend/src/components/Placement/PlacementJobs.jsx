import React from "react";
import WorkIcon from '@mui/icons-material/Work';
import JobRow from "./JobRow";
import jobs from "./Data.json"

function PlacementJobs() {
  const jobList = jobs.map(
    ({title, company, status}) => 
    (<JobRow title={title} company={company} status={status}/>)
  );
  return (
    <div className="container pb-6 w-5/6 bg-whitesmoke bg-opacity-30" style={{height: "93vh"}}>
      <div className="flex text-2xl font-bold text-whitesmoke mt-2 ms-2 me-2 rounded-t-lg h-1/6 bg-licorice items-center justify-start">
        <WorkIcon className="ms-6"/>
        <p className="ms-2">Jobs List</p>
      </div>
      <div className="flex-col text-lg mt-2 ms-2 me-2 h-5/6 bg-whitesmoke text-licorice">
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
