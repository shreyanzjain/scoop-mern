import React from "react";
import ApiIcon from "@mui/icons-material/Api";

function SideBar() {
  return (
    <ul
      className="container bg-slate-50 w-1/6 text-white lg:text-lg sm:text-base"
      style={{ height: "93vh" }}
    >
      <li className="flex bg-slate-100 w-full h-12 border-b-2 border-gray-400 items-center justify-start font-bold text-gray-900 hover:border-gray-950 hover">
        <ApiIcon className="ms-2 text-blue-900" />
        <a className="ms-2" href="/placement-cell/dashboard">Analytics Dashboard</a>
      </li>
      <li className="flex bg-slate-100 w-full h-12 border-b-2 border-gray-400 items-center justify-start font-bold text-gray-900 hover:border-gray-950 hover">
        <ApiIcon className="ms-2" />
        <a className="ms-2" href="/placement-cell/jobs">Jobs</a>
      </li>
      <li className="flex bg-slate-100 w-full h-12 border-b-2 border-gray-400 items-center justify-start font-bold text-gray-900 hover:border-gray-950 hover">
        <ApiIcon className="ms-2" />
        <a className="ms-2" href="/placement-cell/students">Students</a>
      </li>
      <li className="flex bg-slate-100 w-full h-12 border-b-2 border-gray-400 items-center justify-start font-bold text-gray-900 hover:border-gray-950 hover">
        <ApiIcon className="ms-2" />
        <a className="ms-2" href="/placement-cell/upload">Upload</a>
      </li>
    </ul>
  );
}

export default SideBar;
