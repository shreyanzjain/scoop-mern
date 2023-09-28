import React from "react";
import WorkIcon from '@mui/icons-material/Work';
import StudentRow from "./StudentRow";
import students from "./Students.json"

function PlacementStudents() {
  const studentList = students.map(
    ({f_name, l_name, branch, verified}) => 
    (<StudentRow f_name={f_name} l_name={l_name} branch={branch} verification_status={verified}/>)
  );
  return (
    <div className="container m-2 w-5/6 bg-whitesmoke bg-opacity-30">
      <div className="flex text-2xl font-bold text-whitesmoke rounded-t-lg h-1/6 bg-licorice items-center justify-start">
        <WorkIcon className="ms-4"/>
        <p className="ms-2">Students List</p>
      </div>
      <div className="flex-col h-5/6 text-lg mt-2 bg-whitesmoke text-licorice">
        {studentList}
        {/* When there are students added */}    
        {/* <div className="px-4 pb-2 border-b-2 border-ebony container flex items-center justify-between">
          <div className="w-3/6"></div>
          <p className="me-2">Nothing to see here. Have you added any students yet?</p>
          <button className="border-2 rounded-lg px-2 border-licorice text-licorice hover:bg-licorice hover:text-whitesmoke">Add Jobs</button>
        </div> */}
      </div>
    </div>
  );
}

export default PlacementStudents;
