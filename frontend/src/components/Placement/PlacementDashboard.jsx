import React from "react";

function PlacementDashboard() {
  return (
    <div className="container m-2 bg-whitesmoke bg-opacity-30 w-5/6 text-3xl font-bold">
      <span className="flex h-1/2">
        <div className="flex items-center justify-center bg-whitesmoke border-2 border-ebony text-licorice text-lg font-normal w-2/6 m-2 ms-0 mt-0 rounded-lg">
              Some Analytics
        </div>
        <div className="flex items-center justify-center bg-whitesmoke border-2 border-ebony text-gray-900 text-lg font-normal w-4/6 mb-2 rounded-lg">
              Some Analytics
        </div>
      </span>
      <span className="flex h-1/2">
        <div className="flex items-center justify-center bg-whitesmoke border-2 border-ebony text-licorice text-lg font-normal w-4/6 me-2 mb-2 rounded-lg">
              Some Analytics
        </div>
        <div className="flex items-center justify-center bg-whitesmoke border-2 border-ebony text-gray-900 text-lg font-normal w-2/6 mb-2 rounded-lg">
              Some Analytics
        </div>
      </span>
    </div>
  );
}

export default PlacementDashboard;
