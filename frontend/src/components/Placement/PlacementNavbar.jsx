import React from "react";
import vTube from "../img/half_logo.png";
import AttributionIcon from '@mui/icons-material/Attribution';

function PlacementNavbar() {
  const user = "Shreyans";
  return (
    <nav className="sticky top-0 z-10 bg-whitesmoke border-b-2 border-ebony">
      <div className="max-w-full mx-auto">
        <div className="flex items-center justify-between h-12">
          <span className="flex ms-2 text-2xl text-licorice font-semibold items-center">
            <AttributionIcon className="text-licorice me-2"/> {user}
          </span>
          <div className="flex space-x-4 text-licorice me-2">
            <a className="hover:bg-ashgray px-2" href="#">Report An Issue</a>
            <a className="hover:bg-ashgray px-2" href="#">Log Out</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default PlacementNavbar;
