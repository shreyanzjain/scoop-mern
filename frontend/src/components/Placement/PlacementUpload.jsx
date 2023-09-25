import React from "react";
import CloudIcon from "@mui/icons-material/Cloud";

function PlacementUpload() {
  return (
    // placeholder bg color for visibility of the container
    <div className="container w-5/6 bg-whitesmoke bg-opacity-30 m-2">
      {/* Banner */}
      <div className="container h-1/6">
        <div className="flex h-full text-whitesmoke text-2xl font-bold bg-licorice rounded-t-lg items-center justify-start">
          <CloudIcon className="ms-6" />
          <p className="ms-2">Upload Job</p>
        </div>
      </div>

      <div className="container h-5/6 mt-2">
        <div className="flex bg-whitesmoke h-full justify-center items-center">
          <form className="w-full max-w-lg border-2 rounded pt-2 px-2 border-licorice">
            <div className="flex flex-wrap -mx-3">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-licorice text-xs font-bold mb-2"
                  for="grid-title"
                >
                  Title
                </label>
                <input
                  className="appearance-none block w-full bg-white text-licorice rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-2 focus:border-licorice"
                  id="grid-title"
                  type="text"
                  placeholder="SDE 1"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-licorice text-xs font-bold mb-2"
                  for="grid-company-name"
                >
                  Company
                </label>
                <input
                  className="appearance-none block w-full bg-white text-licorice rounded py-3 px-4 leading-tight focus:outline-none focus:border-2 focus:border-licorice"
                  id="grid-company-name"
                  type="text"
                  placeholder="Apple"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-licorice text-xs font-bold mb-2"
                  for="grid-description"
                >
                  Description
                </label>
                <textarea
                  className="appearance-none resize-y block w-full bg-white text-licorice rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-2 focus:border-licorice"
                  id="grid-description"
                  type="textarea"
                />
                <div className="flex items-center justify-end">
                  
                  <button type="submit" className="bg-tan bg-opacity-50 text-licorice rounded px-6 py-1 hover:bg-tan hover:border-licorice">Upload</button>
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
