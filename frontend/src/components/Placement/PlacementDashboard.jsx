import React from "react";

function PlacementDashboard() {
  return (
    <div className="container bg-whitesmoke w-5/6 text-3xl font-bold" style={{ height: "93vh" }}>
      <span className="flex h-1/2">
        <div className="flex items-center justify-center bg-whitesmoke border-2 border-ebony text-licorice text-lg font-normal w-2/6 m-2 rounded-sm">
              Some Analytics
        </div>
        <div className="flex items-center justify-center bg-whitesmoke border-2 border-ebony text-gray-900 text-lg font-normal w-4/6 me-2 mt-2 mb-2 rounded-sm">
              Some Analytics
        </div>
      </span>
      <span className="flex h-1/2">
        <div className="flex items-center justify-center bg-whitesmoke border-2 border-ebony text-licorice text-lg font-normal w-4/6 ms-2 me-2 mb-2 rounded-sm">
              Some Analytics
        </div>
        <div className="flex items-center justify-center bg-whitesmoke border-2 border-ebony text-gray-900 text-lg font-normal w-2/6 me-2 mb-2 rounded-sm">
              Some Analytics
        </div>
      </span>
    </div>
  );
}

export default PlacementDashboard;
