import React from "react";
import vTube from "../img/half_logo.png";
import AttributionIcon from "@mui/icons-material/Attribution";
import axios from "axios";

function login() {
  axios.post("https://127.0.0.1:3000/user/login", {
    email: "varun@nikunj.com",
    password: "varunnikunj",
  }, {
    withCredentials: true
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
}

function protected_check() {
  axios.get("https://127.0.0.1:3000/protected", {
    withCredentials: true
  })
  .then((response)=> {
    console.log(response);
  })
  .catch((error)=> {
    console.log(error);
  })
}

function PlacementNavbar() {
  const user = "Shreyans";
  return (
    <nav className="sticky top-0 z-10 bg-whitesmoke border-b-2 border-ebony">
      <div className="max-w-full mx-auto">
        <div className="flex items-center justify-between h-12">
          <span className="flex ms-2 text-2xl text-licorice font-semibold items-center">
            <AttributionIcon className="text-licorice me-2" /> {user}
          </span>
          <div className="flex space-x-4 text-licorice me-2">
            <a className="hover:bg-ashgray px-2" href="#" onClick={protected_check}>
              Report An Issue
            </a>
            <a className="hover:bg-ashgray px-2" href="#" onClick={login}>
              Log Out
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default PlacementNavbar;
