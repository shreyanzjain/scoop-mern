import "./Dashboard.css";
import data from "./Data.json";
import Card from "./Card";
import MainCard from "./MainCard";
import { useState } from "react";
import axios from "axios";
export default function () {
  const [mainJobId, setMainJobId] = useState();
  async function handleApply(id) {
    const response = await axios.put(
      `http://localhost:3000/jobs/apply?id=${mainJobId}`,
      {},
      {
        withCredentials: true,
      }
    );
    return response;
  }
  // console.log(mainJobId);
  const cardList = data.map(
    ({ jobId, companyName, jobTitle, jobLocation, jobCompensation }) => (
      <Card
        key={jobId}
        jobId={jobId}
        companyName={companyName}
        jobTitle={jobTitle}
        jobLocation={jobLocation}
        jobCompensation={jobCompensation}
        setMainJobId={setMainJobId}
        handleApply={handleApply}
      />
    )
  );
  return (
    <div>
      <div>
        <section className="dashboard-wrapper ">
          <div className="dashboard-container  flex flex-row border-b-2">
            <div className="cardlist  flex flex-col overflow-y-auto shadow-2xl">
              {cardList}
            </div>
            <div className="main-card ps-1 overflow-y-auto">
              <MainCard jobId={mainJobId} handleApply={handleApply} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
