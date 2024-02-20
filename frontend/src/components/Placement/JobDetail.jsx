function JobDetail({ onClickBack, job }) {
  const {
    id,
    company,
    job_role,
    job_description,
    salary,
    status,
    location,
    cgpa_cutoff,
    tenth,
    twelfth,
    kt_allowed,
    drop_allowed_ug,
    branches,
  } = job;
  return (
    <div>
      <div className="container ps-2 pt-2">
        <a
          className="flex bg-tan w-24 items-center justify-center hover:cursor-pointer"
          onClick={onClickBack}
        >
          Back
        </a>
      </div>
      <div className="container ps-2 pt-2">
        <div className="flex flex-col w-full h-full">
          <div className="container flex w-full h-12">
            <div className="flex ps-1 h-full border-2 rounded-md me-2 border-ebony shadow-sm w-1/2">
              <div className=" text-lg font-bold">Company {company}</div>
            </div>
          </div>
          <p>Job Role: {job_role}</p>
          <p>Job Description: {job_description}</p>
          <p>Salary: {salary}</p>
          <p>Status: {status}</p>
          <p>Location: {location}</p>
          <p>CGPA Cutoff: {cgpa_cutoff}</p>
          <p>Tenth: {tenth}</p>
          <p>Twelfth: {twelfth}</p>
          <p>KT Allowed: {kt_allowed ? "Yes" : "No"}</p>
          <p>Drop Allowed UG: {drop_allowed_ug ? "Yes" : "No"}</p>
          <p>Branches:</p>
          <ul>
            {branches.map((branch, index) => (
              <li key={index}>{branch.branch}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default JobDetail;
