import data from "./Data.json";
import emptyPlaceholder from "./icons/emptyPlaceholder.gif";
export default function ({ jobId }) {
  //   jobId = data[0].jobId;
  if (jobId == undefined) {
    return (
      <div className="maincard-container">
        <div className="empty-container">
          <img src={emptyPlaceholder} alt="Click some card..." />
        </div>
      </div>
    );
  }
  const obj = data.find((ele) => ele.jobId == jobId);
  const status = true,
    cgpa = 8,
    tenth = 60,
    twelfth = 60,
    isKtAllowed = false,
    isDropAllowed = true,
    jobDescription =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque ornare aenean euismod elementum nisi quis eleifend. At imperdiet dui accumsan sit amet nulla facilisi morbi. Mattis molestie a iaculis at erat pellentesque adipiscing. Id venenatis a condimentum vitae. Dolor sit amet consectetur adipiscing elit ut. Arcu risus quis varius quam quisque id diam. Vel quam elementum pulvinar etiam non. Feugiat pretium nibh ipsum consequat nisl. Elementum sagittis vitae et leo duis ut diam. Sapien et ligula ullamcorper malesuada proin libero. Interdum varius sit amet mattis vulputate. Volutpat commodo sed egestas egestas. Malesuada proin libero nunc consequat interdum varius sit. Donec pretium vulputate sapien nec. Nisi est sit amet facilisis magna etiam. In cursus turpis massa tincidunt dui ut ornare.";
  return (
    <div className="maincard-container">
      <div className="maincard-top text-3xl font-bold">{obj.companyName}</div>
      <div className="maincard-mid overflow-y-auto">
        <div>
          <span className="font-bold">Role: </span>
          <span>{obj.jobTitle}</span>
        </div>
        <div>
          <span className="font-bold">Salary: </span>
          <span>{obj.jobCompensation}</span>
        </div>
        <div>
          <span className="font-bold">Status: </span>
          <span>{status ? "Accepting Application" : "CLosed"}</span>
        </div>
        <div>
          <span className="font-bold">Location: </span>
          <span>{obj.jobLocation}</span>
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
