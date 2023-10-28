import React from "react";
import ApiIcon from "@mui/icons-material/Api";
import { NavLink } from "react-router-dom";

function SideBar({ onClickOption, optionValue }) {
  return (
    <ul className="container bg-whitesmoke h-screen w-1/6 border-e-2 border-ebony border-op lg:text-md sm:text-base">
      <a
        href=""
        onClick={(e) => {
          e.preventDefault();
          onClickOption(1);
        }}
        className="flex w-full h-12 border-b-2 border-ebony border-op items-center justify-start font-bold text-licorice hover:border-licorice hover:bg-tan"
      >
        <ApiIcon className={`ms-2 ${optionValue == 1? "": "text-ebony"}`} />
        <p className="ms-2">Analytics Dashboard</p>
      </a>
      <a
        href=""
        onClick={(e) => {
          e.preventDefault();
          onClickOption(2);
        }}
        className="flex w-full h-12 border-b-2 border-ebony border-op items-center justify-start font-bold text-licorice hover:border-licorice hover:bg-tan"
      >
        <ApiIcon className={`ms-2 ${optionValue == 2? "": "text-ebony"}`} />
        <p className="ms-2">Jobs</p>
      </a>
      <a
        href=""
        onClick={(e) => {
          e.preventDefault();
          onClickOption(3);
        }}
        className="flex w-full h-12 border-b-2 border-ebony border-op items-center justify-start font-bold text-licorice hover:border-licorice hover:bg-tan"
      >
        <ApiIcon className={`ms-2 ${optionValue == 3? "": "text-ebony"}`} />
        <p className="ms-2">Students</p>
      </a>
      <a
        href=""
        onClick={(e) => {
          e.preventDefault();
          onClickOption(4);
        }}
        className="flex w-full h-12 border-b-2 border-ebony border-op items-center justify-start font-bold text-licorice hover:border-licorice hover:bg-tan"
      >
        <ApiIcon className={`ms-2 ${optionValue == 4? "": "text-ebony"}`} />
        <p className="ms-2">Job Upload</p>
      </a>
    </ul>
  );
}

export default SideBar;
