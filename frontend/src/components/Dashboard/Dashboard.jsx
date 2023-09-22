import "./Dashboard.css";
import logo from "./icons/logo.png";
import location from "./icons/location.png";
import rupee from "./icons/rupee.png";
import person from "./icons/person.png";

export default function () {
  return (
    <div>
      <div>
        <section className="dashboard-wrapper ">
          <div className="dashboard-container  flex flex-row">
            <div className="cardlist  flex flex-col">
              <div className="job-card rounded-xl">
                <div className="card-top flex flex-row items-center">
                  <img className="company-logo" src={logo} />
                  <div className="company-title text-4xl font-bold">
                    Netflix
                  </div>
                </div>
                <div className="card-mid">
                  <div className="job-title flex flex-row items-center">
                    <img className="person-logo" src={person} />
                    <div className="job-title-text">Junior Developer</div>
                  </div>
                  <div className="job-location flex flex-row items-cente">
                    <img className="location-logo" src={location} />
                    <div className="job-location-text">Mumbai, Mahrashtra</div>
                  </div>
                  <div className="job-compensation flex flex-row items-cente">
                    <img className="rupee-logo" src={rupee} />
                    <div className="job-compensatino-text">30,00,000</div>
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
