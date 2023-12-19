import React from "react";
import InfoIcon from '@mui/icons-material/Info';
import StudentRow from "./StudentRow";
import students from "./Students.json"

function PlacementStudents() {
  const studentList = students.map(
    ({f_name, l_name, branch, verified}, index) => 
    (<StudentRow key={index} f_name={f_name} l_name={l_name} branch={branch} verification_status={verified} />)
  );
  return (
    <div className="w-5/6 m-2">
      <div className="container h-16 w-full border-b-2 border-licorice bg-whitesmoke shadow-sm">
          <div className="flex w-full h-full items-center justify-between">
            <div className="text-licorice text-xl font-bold ms-4">
              <div className="flex-col items-center justify-start">
                <p>Bulk Upload</p>
                <div className="flex items-center text-gray-700">
                  <InfoIcon style={{fontSize: '18px'}} className="me-1"/>
                  <p className="text-sm">Upload a .csv file with the columns - email & password.</p>
                </div>
              </div>
            </div>
            <form>
              <input type="file" className="px-2 py-1.5 border-2 border-licorice rounded-md me-2"/>
              <button type="submit" className="bg-licorice text-white py-1 px-2 rounded-xl me-2">Submit</button>
            </form>
          </div> 
        </div>
      <div className="flex-col h-5/6 w-full text-lg bg-whitesmoke text-licorice mt-2">
        <div className="container w-full h-full mt-0 bg-whitesmoke bg-opacity-30 overflow-y-auto">
          {studentList}
        </div>
      </div>
    </div>
  );
}

export default PlacementStudents;
