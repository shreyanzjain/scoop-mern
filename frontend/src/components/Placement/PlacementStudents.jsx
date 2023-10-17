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
      <div className="flex-col h-5/6 text-lg mt-2 bg-whitesmoke text-licorice overflow-y-auto">
      <div className="container h-16 w-full border-b-2 border-licorice">
        <div className="flex w-full h-full items-center justify-between">
          <div className="text-licorice text-xl font-bold ms-4">Bulk Upload</div>
          <form>
            <input type="file" className="px-2 py-1.5 border-2 border-licorice rounded-md me-2"/>
            <button type="submit" className="bg-licorice text-white py-1 px-2 rounded-xl me-2">Submit</button>
          </form>
        </div> 
      </div>
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
