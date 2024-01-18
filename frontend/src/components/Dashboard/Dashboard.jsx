import "./Dashboard.css";
import data from "./Data.json";
import Card from "./Card";
import MainCard from "./MainCard";
import { useState } from "react";
import InterviewBlogs from "./InterviewBlogs";
export default function () {
  const [mainJobId, setMainJobId] = useState();
  const [showInterviewBlogs, setShowInterviewBlogs] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);
  
  // console.log(mainJobId);
  const cardList = data.map(
    ({ jobId, companyName, jobTitle, jobLocation, jobCompensation }) => (
      <Card
        key = {jobId}
        jobId={jobId}
        companyName={companyName}
        jobTitle={jobTitle}
        jobLocation={jobLocation}
        jobCompensation={jobCompensation}
        setMainJobId={setMainJobId}
        setShowInterviewBlogs={setShowInterviewBlogs}

      />
    )
  );
  return (
    <div>
      <div>
        <section className="dashboard-wrapper ">
          <div className="dashboard-container  flex flex-row border-b-2">
            <div className="cardlist  flex flex-col overflow-y-auto shadow-2xl">{cardList}</div>
            <div className="main-card ps-1 overflow-y-auto">
            {showInterviewBlogs ? (
                <InterviewBlogs/>
              ) : (
              <MainCard
                jobId = {mainJobId}
              />)}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
