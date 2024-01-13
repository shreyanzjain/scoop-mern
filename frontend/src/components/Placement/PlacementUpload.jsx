import React from "react";
import { useState } from "react";
import Info from "@mui/icons-material/Info";
import axios from "axios";

function PlacementUpload() {
  const [role, setRole] = useState();
  const [company, setCompany] = useState();
  const [cgpa_cutoff, setCgpaCutoff] = useState();
  const [tenth, setTenth] = useState();
  const [location, setLocation] = useState();
  const [salary, setSalary] = useState();
  const [description, setDescription] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "http://127.0.0.1:3000/jobs/create/",
        {
          company: company,
          job_role: role,
          cgpa_cutoff: parseFloat(cgpa_cutoff),
          tenth: parseFloat(tenth),
          location: location,
          salary: parseFloat(salary),
          job_description: description,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    // placeholder bg color for visibility of the container
    <div className="container w-5/6 bg-whitesmoke bg-opacity-30 m-2">
      <div className="container h-5/6">
        <div className="flex bg-whitesmoke items-start">
          <form className="w-full pt-2 px-2">
            <div className="flex flex-wrap -mx-3">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-licorice text-xs font-bold mb-2"
                  htmlFor="grid-role"
                >
                  Role
                </label>
                <input
                  value={role}
                  className="appearance-none block w-full bg-white text-licorice rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-2 focus:border-licorice"
                  id="grid-role"
                  type="text"
                  placeholder="SDE 1"
                  onChange={(e) => setRole(e.target.value)}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-licorice text-xs font-bold mb-2"
                  htmlFor="grid-company-name"
                >
                  Company
                </label>
                <input
                  value={company}
                  className="appearance-none block w-full bg-white text-licorice rounded py-3 px-4 leading-tight focus:outline-none focus:border-2 focus:border-licorice"
                  id="grid-company-name"
                  type="text"
                  placeholder="Apple"
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-licorice text-xs font-bold mb-2"
                  htmlFor="grid-cgpa-cutoff"
                >
                  Cgpa Cutoff
                </label>
                <input
                  value={cgpa_cutoff}
                  className="appearance-none block w-full bg-white text-licorice rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-2 focus:border-licorice"
                  id="grid-cgpa-cutoff"
                  type="number"
                  placeholder="7.00"
                  onChange={(e) => setCgpaCutoff(e.target.value)}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-licorice text-xs font-bold mb-2"
                  htmlFor="grid-tenth-percentage-cuttof"
                >
                  Tenth Cutoff
                </label>
                <input
                  value={tenth}
                  className="appearance-none block w-full bg-white text-licorice rounded py-3 px-4 leading-tight focus:outline-none focus:border-2 focus:border-licorice"
                  id="grid-tenth-percentage-cutoff"
                  type="number"
                  placeholder="75%"
                  onChange={(e) => setTenth(e.target.value)}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-licorice text-xs font-bold mb-2"
                  htmlFor="grid-location"
                >
                  Location
                </label>
                <input
                  value={location}
                  className="appearance-none block w-full bg-white text-licorice rounded py-3 px-4 leading-tight focus:outline-none focus:border-2 focus:border-licorice"
                  id="grid-location"
                  type="text"
                  placeholder="Mumbai, California, Karnataka, etc."
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-licorice text-xs font-bold mb-2"
                  htmlFor="grid-branch-cutoff"
                >
                  Salary
                </label>
                <input
                  value={salary}
                  className="appearance-none block w-full bg-white text-licorice rounded py-3 px-4 leading-tight focus:outline-none focus:border-2 focus:border-licorice"
                  id="grid-branch-cutoff"
                  type="number"
                  placeholder="999999"
                  onChange={(e) => setSalary(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mt-2 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-licorice text-xs font-bold mb-2"
                  htmlFor="grid-description"
                >
                 <div className="flex gap-1 items-center"> 
                   <p>Description</p>
                   <p className="flex normal-case text-gray-600 items-center">
                    <Info style={{fontSize: '14px'}}/>
                    Paste the role, responsibilities, and skills required here.
                    </p>
                 </div>
                </label>
                <textarea
                  value={description}
                  className="appearance-none resize-y block w-full bg-white text-licorice rounded pt-3 pb-32 px-3 mb-3 leading-tight focus:outline-none focus:border-2 focus:border-licorice"
                  id="grid-description"
                  type="textarea"
                  onChange={(e) => setDescription(e.target.value)}
                />
                <div className="flex items-center justify-end">
                  <button
                    type="submit"
                    className="bg-tan bg-opacity-50 text-licorice rounded px-6 py-1 hover:bg-tan hover:border-licorice"
                    onClick={handleSubmit}
                  >
                    Upload
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PlacementUpload;
