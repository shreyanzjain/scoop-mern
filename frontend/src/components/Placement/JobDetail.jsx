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
    <div className="container bg-whitesmoke h-full pt-3 ps-3 pe-3 pb-3">
      <a
        className="flex bg-tan w-24 items-center justify-center hover:cursor-pointer"
        onClick={onClickBack}
      >
        Back
      </a>
      <div>
        <p>ID: {id}</p>
        <p>Company: {company}</p>
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
  );
}

export default JobDetail;
