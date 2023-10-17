import React from "react";
import ApiIcon from "@mui/icons-material/Api";
import { NavLink } from 'react-router-dom';

function SideBar() {
  return (
    <ul
      className="container bg-whitesmoke h-screen w-1/6 border-e-2 border-ebony border-op lg:text-md sm:text-base">
      <li className="flex w-full h-12 border-b-2 border-ebony border-op items-center justify-start font-bold text-licorice hover:border-licorice hover:bg-tan">
        <ApiIcon className="ms-2" />
        <NavLink className="ms-2" to="/placement-cell/dashboard">Analytics Dashboard</NavLink>
      </li>
      <li className="flex w-full h-12 border-b-2 border-ebony border-op items-center justify-start font-bold text-licorice hover:border-licorice hover:bg-tan">
        <ApiIcon className="ms-2 text-ebony" />
        <NavLink className="ms-2" to="/placement-cell/jobs">Jobs</NavLink>
      </li>
      <li className="flex w-full h-12 border-b-2 border-ebony border-op items-center justify-start font-bold text-licorice hover:border-licorice hover:bg-tan">
        <ApiIcon className="ms-2 text-ebony" />
        <NavLink className="ms-2" to="/placement-cell/students">Students</NavLink>
      </li>
      <li className="flex w-full h-12 border-b-2 border-ebony border-op items-center justify-start font-bold text-licorice hover:border-licorice hover:bg-tan">
        <ApiIcon className="ms-2 text-ebony" />
        <NavLink className="ms-2" to="/placement-cell/upload">Job Upload</NavLink>
      </li>
    </ul>
  );
}

export default SideBar;
