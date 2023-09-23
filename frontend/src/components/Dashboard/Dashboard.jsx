import "./Dashboard.css";
import data from "./Data.json";
import Card from "./Card";

export default function () {
  console.log(data[0].jobId);
  const cardList = data.map(
    ({ jobId, companyName, jobTitle, jobLocation, jobCompensation }) => (
      <Card
        jobId={jobId}
        companyName={companyName}
        jobTitle={jobTitle}
        jobLocation={jobLocation}
        jobCompensation={jobCompensation}
      />
    )
  );
  return (
    <div>
      <div>
        <section className="dashboard-wrapper ">
          <div className="dashboard-container  flex flex-row">
            <div className="cardlist  flex flex-col">{cardList}</div>
            <div className="main-card ps-1">
              Once you click a card more details for that specific job will be
              displayed here
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
