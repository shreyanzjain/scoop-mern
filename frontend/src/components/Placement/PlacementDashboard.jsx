import React from "react";

function PlacementDashboard() {
  return (
    <div className="container bg-slate-200 w-5/6 text-white text-3xl font-bold" style={{ height: "93vh" }}>
      <span className="flex h-1/2">
        <div className="flex items-center justify-center bg-gray-900 text-white text-xl w-2/6 m-2 rounded-sm">
              Some Analytics
        </div>
        <div className="flex items-center justify-center bg-gray-50 text-gray-900 text-xl w-4/6 me-2 mt-2 mb-2 rounded-sm">
              Some Analytics
        </div>
      </span>
      <span className="flex h-1/2">
        <div className="flex items-center justify-center bg-gray-900 text-white text-xl w-4/6 ms-2 me-2 mb-2 rounded-sm">
              Some Analytics
        </div>
        <div className="flex items-center justify-center bg-gray-50 text-gray-900 text-xl w-2/6 me-2 mb-2 rounded-sm">
              Some Analytics
        </div>
      </span>
    </div>
  );
}

export default PlacementDashboard;
