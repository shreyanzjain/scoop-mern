import data from "./Data.json";
import axios from "axios";
import emptyPlaceholder from "./icons/emptyPlaceholder.gif";
import { useEffect, useState } from "react";

export default function ({ jobId }) {
  const [job, setJob] = useState();
  const [obj, setObj] = useState(null);

  useEffect(() => {
    const fetchJobData = async () => {
      if (!jobId) return;
      const response = await axios.get(
        `http://localhost:3000/jobs/get?id=${jobId}`,
        { withCredentials: true }
      );
      setObj(response.data);
    };
    fetchJobData();
  }, [jobId]);

  if (obj === null) {
    return (
      <div className="maincard-container">
        <div className="empty-container">
          <img src={emptyPlaceholder} alt="Click some card..." />
        </div>
      </div>
    );
  }

  const companyName = obj.company,
    branches = obj.branches,
    jobTitle = obj.job_role,
    jobCompensation = obj.salary,
    jobLocation = obj.location,
    status = obj.status,
    cgpa = obj.cgpa_cutoff,
    tenth = obj.tenth,
    twelfth = obj.twelfth,
    isKtAllowed = obj.kt_allowed,
    isDropAllowed = obj.drop_allowed_ug,
    jobDescription = obj.job_description;
  return (
    <div className="maincard-container">
      <div className="maincard-top text-3xl font-bold">{companyName}</div>
      <div className="maincard-mid overflow-y-auto">
        <div>
          <span className="font-bold">Role: </span>
          <span>{jobTitle}</span>
        </div>
        <div>
          <span className="font-bold">Salary: </span>
          <span>{jobCompensation}</span>
        </div>
        <div>
          <span className="font-bold">Status: </span>
          <span>{status}</span>
        </div>
        <div>
          <span className="font-bold">Location: </span>
          <span>{jobLocation}</span>
        </div>
        <div>
          <span className="font-bold">CGPA: </span>
          <span>{cgpa}</span>
        </div>
        <div>
          <span className="font-bold">10th grade: </span>
          <span>{tenth}</span>
        </div>
        <div>
          <span className="font-bold">12th grade: </span>
          <span>{twelfth}</span>
        </div>
        <div>
          <span className="font-bold">KT: </span>
          <span>{isKtAllowed ? "Yes" : "No"}</span>
        </div>
        <div>
          <span className="font-bold">Drop year: </span>
          <span>{isDropAllowed ? "Yes" : "No"}</span>
        </div>
        <div>
          <div className="font-bold">Job Description: </div>
          <div>
            {jobDescription}
            <br />
            {jobDescription}
          </div>
        </div>
      </div>
      <div className="maincard-bottom">
        {/* <span> */}
        <button className="button">Apply</button>
        {/* </span> */}
      </div>
    </div>
  );
}
