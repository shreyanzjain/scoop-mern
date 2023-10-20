import React from "react";
import ApiIcon from "@mui/icons-material/Api";
import { NavLink } from 'react-router-dom';

function SideBar() {
  return (
    <ul
      className="container bg-whitesmoke h-screen w-1/6 border-e-2 border-ebony border-op lg:text-md sm:text-base">
      <NavLink to="/placement-cell/dashboard" className="flex w-full h-12 border-b-2 border-ebony border-op items-center justify-start font-bold text-licorice hover:border-licorice hover:bg-tan">
        <ApiIcon className="ms-2" />
        <p className="ms-2">Analytics Dashboard</p>
      </NavLink>
      <NavLink to="/placement-cell/jobs" className="flex w-full h-12 border-b-2 border-ebony border-op items-center justify-start font-bold text-licorice hover:border-licorice hover:bg-tan">
        <ApiIcon className="ms-2 text-ebony" />
        <p className="ms-2">Jobs</p>
      </NavLink>
      <NavLink to="/placement-cell/students" className="flex w-full h-12 border-b-2 border-ebony border-op items-center justify-start font-bold text-licorice hover:border-licorice hover:bg-tan">
        <ApiIcon className="ms-2 text-ebony" />
        <p className="ms-2">Students</p>
      </NavLink>
      <NavLink to="/placement-cell/upload" className="flex w-full h-12 border-b-2 border-ebony border-op items-center justify-start font-bold text-licorice hover:border-licorice hover:bg-tan">
        <ApiIcon className="ms-2 text-ebony" />
        <p className="ms-2">Job Upload</p>
      </NavLink>
    </ul>
  );
}

export default SideBar;
