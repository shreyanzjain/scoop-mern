import statusToText from "./StatusToText.json";
import colorStatus from "./ColorStatus.json";

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
          className="flex bg-tan rounded-sm w-24 items-center justify-center hover:cursor-pointer"
          onClick={onClickBack}
        >
          Back
        </a>
      </div>
      <div className="container ps-2 pt-2">
        <div className="flex flex-col w-full h-full text-black">
          <p className="text-3xl font-bold">{company}</p>
          <p className="text-xl font-semibold">{job_role}</p>
          <div className="flex space-x-3 w-full mt-1">
            <a className="border-2 border-green-900 bg-green-400 w-fit px-2 rounded-xl text-green-900">
              <strong>Rs.</strong> {salary}
            </a>
            <a className="border-2 border-gray-900 bg-gray-400 w-fit px-2 rounded-xl text-gray-900">
              {location}
            </a>
            <a className="border-2 border-purple-900 bg-purple-400 w-fit px-2 rounded-xl text-purple-900">
              <strong>CGPA</strong> {cgpa_cutoff} and above
            </a>
            <a className="border-2 border-blue-900 bg-blue-400 w-fit px-2 rounded-xl text-blue-900">
              <strong>X</strong> {tenth}% and above
            </a>
            <a className="border-2 border-yellow-900 bg-yellow-400 w-fit px-2 rounded-xl text-yellow-900">
              <strong>XII</strong> {twelfth}% and above
            </a>
            <a className="border-2 border-red-900 bg-red-400 w-fit px-2 rounded-xl text-red-900">
              <strong>KT </strong>
              {kt_allowed ? "Allowed" : "Not Eligible"}
            </a>
            <a className="border-2 border-pink-900 bg-pink-400 w-fit px-2 rounded-xl text-pink-900">
              <strong>DROP </strong>
              {drop_allowed_ug ? "Allowed" : "Not Eligible"}
            </a>
            <a
              className={`border-2 border-licorice w-fit px-2 rounded-xl`}
              style={{ backgroundColor: colorStatus[status] }}
            >
              <strong>{statusToText[status]}</strong>
            </a>
          </div>
          <div className="flex space-x-3 mt-2">
            {branches.map((branch, index) => (
              <a
                className="border-2 border-black bg-white w-fit px-4 rounded-xl text-black"
                key={index}
              >
                {branch.branch}
              </a>
            ))}
          </div>
          <div className="mt-2">
            <strong>Description</strong>
            <p>{job_description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetail;
