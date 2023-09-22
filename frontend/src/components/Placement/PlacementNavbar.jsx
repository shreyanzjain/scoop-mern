import React from "react";
import vTube from "../img/half_logo.png";
import AttributionIcon from '@mui/icons-material/Attribution';

function PlacementNavbar() {
  const user = "Shreyans";
  return (
    <nav className="sticky top-0 z-10 bg-white border-b-2 border-gray-400">
      <div className="max-w-full mx-auto">
        <div className="flex items-center justify-between h-12">
          <span className="flex ms-2 text-2xl text-gray-900 font-semibold items-center">
            <AttributionIcon className="text-gray-900 me-2"/> {user}
          </span>
          <div className="flex space-x-4 text-gray-900 me-3">
            <a href="#">Report An Issue</a>
            <a href="#">Log Out</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default PlacementNavbar;
