import React from "react";
import ApiIcon from "@mui/icons-material/Api";

function SideBar() {
  return (
    <ul
      className="container bg-whitesmoke h-screen w-1/6 border-e-2 border-ebony border-op lg:text-md sm:text-base">
      <li className="flex w-full h-12 border-b-2 border-ebony border-op items-center justify-start font-bold text-licorice hover:border-licorice hover:bg-tan">
        <ApiIcon className="ms-2" />
        <a className="ms-2" href="/placement-cell/dashboard">Analytics Dashboard</a>
      </li>
      <li className="flex w-full h-12 border-b-2 border-ebony border-op items-center justify-start font-bold text-licorice hover:border-licorice hover:bg-tan">
        <ApiIcon className="ms-2 text-ebony" />
        <a className="ms-2" href="/placement-cell/jobs">Jobs</a>
      </li>
      <li className="flex w-full h-12 border-b-2 border-ebony border-op items-center justify-start font-bold text-licorice hover:border-licorice hover:bg-tan">
        <ApiIcon className="ms-2 text-ebony" />
        <a className="ms-2" href="/placement-cell/students">Students</a>
      </li>
      <li className="flex w-full h-12 border-b-2 border-ebony border-op items-center justify-start font-bold text-licorice hover:border-licorice hover:bg-tan">
        <ApiIcon className="ms-2 text-ebony" />
        <a className="ms-2" href="/placement-cell/upload">Upload</a>
      </li>
    </ul>
  );
}

export default SideBar;
