import "./Dashboard.css";
import logo from "./icons/logo.png";
import location from "./icons/location.png";
import rupee from "./icons/rupee.png";
import person from "./icons/person.png";

export default function ({
  jobId,
  companyName,
  jobTitle,
  jobLocation,
  jobCompensation,
}) {
  console.log(jobId, companyName, jobTitle, jobLocation, jobCompensation);
  return (
    <div>
      <div className="job-card rounded-xl">
        <div className="card-top flex flex-row items-center">
          <img className="company-logo" src={logo} />
          <div className="company-title text-3xl font-bold">{companyName}</div>
        </div>
        <div className="card-mid">
          <div className="job-title flex flex-row items-center">
            <img className="person-logo" src={person} />
            <div className="job-title-text">{jobTitle}</div>
          </div>
          <div className="job-location flex flex-row items-cente">
            <img className="location-logo" src={location} />
            <div className="job-location-text">{jobLocation}</div>
          </div>
          <div className="job-compensation flex flex-row items-cente">
            <img className="rupee-logo" src={rupee} />
            <div className="job-compensatino-text">{jobCompensation}</div>
          </div>
        </div>
        <div className="card-bottom flex justify-end">
          <span>
            <button className="button">More</button>
          </span>
          <span>
            <button className="button">Apply</button>
          </span>
        </div>
      </div>
    </div>
  );
}
