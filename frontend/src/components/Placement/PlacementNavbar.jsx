import React from "react";
import { useNavigate } from "react-router-dom";
import AttributionIcon from "@mui/icons-material/Attribution";
import axios from "axios";

async function logout() {
  const response = await axios.get("http://localhost:3000/user/logout", {
    withCredentials: true,
  });

  return response;
}

function PlacementNavbar({ userText }) {
  const navigate = useNavigate();
  return (
    <nav className="sticky top-0 z-10 bg-whitesmoke border-b-2 border-ebony">
      <div className="max-w-full mx-auto">
        <div className="flex items-center justify-between h-12">
          <span className="flex ms-2 text-2xl text-licorice font-semibold items-center">
            <AttributionIcon className="text-licorice me-2" /> {userText}
          </span>
          <div className="flex space-x-4 text-licorice me-2">
            <a
              className="hover:bg-ashgray px-2 hover:cursor-pointer"
              onClick={async (e) => {
                e.preventDefault();
                const response = await logout();
                navigate("/");
              }}
            >
              Log Out
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default PlacementNavbar;
