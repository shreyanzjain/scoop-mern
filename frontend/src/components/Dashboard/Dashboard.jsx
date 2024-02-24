import "./Dashboard.css";
import data from "./Data.json";
import Card from "./Card";
import axios from "axios";
import MainCard from "./MainCard";
import { useState } from "react";

const URL = "http://127.0.0.1:3000/jobs/get_by_branch?branch=",
  branch = "IT",
  jobList = [];
let iterations = 0;
export default function () {
  const [mainJobId, setMainJobId] = useState();
  const [cardList, setCardList] = useState([]);
  const getData = async (jobList, cardlist) => {
    await axios
      .get(URL + branch, { withCredentials: true })
      .then((response) => {
        JSON.stringify(response);
        jobList = response.data.data;
        jobList = jobList.map((ele) => ({
          jobId: ele.id,
          companyName: ele.company,
          jobTitle: ele.job_role,
          jobLocation: ele.location,
          jobCompensation: ele.salary,
        }));
        const newCardList = jobList.map(
          ({ jobId, companyName, jobTitle, jobLocation, jobCompensation }) => (
            <Card
              key={jobId}
              jobId={jobId}
              companyName={companyName}
              jobTitle={jobTitle}
              jobLocation={jobLocation}
              jobCompensation={jobCompensation}
              setMainJobId={setMainJobId}
            />
          )
        );

        setCardList(newCardList);
      })
      .catch((err) => console.log(err));
  };
  if (cardList.length == 0) getData(jobList, cardList);
  // else console.log(cardList[0].props);
  return (
    <div>
      <div>
        <section className="dashboard-wrapper ">
          <div className="dashboard-container  flex flex-row border-b-2">
            <div className="cardlist  flex flex-col overflow-y-auto shadow-2xl">
              {cardList}
            </div>
            <div className="main-card ps-1 overflow-y-auto">
              <MainCard jobId={mainJobId} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
