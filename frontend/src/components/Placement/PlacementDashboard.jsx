import React from "react";
import Percentage_Placed from "./Analytics/PercentagePlaced"
import Appearing_Placed from "./Analytics/Appearing_Placed"
import Average_Salary from "./Analytics/Average_Salary"
import Highest_Salary from "./Analytics/Highest_Salary"
import PlacementData from "./Analytics/PlacementData";

function PlacementDashboard() {
  return (
    <div className="container m-2 bg-whitesmoke bg-opacity-30 w-5/6 text-3xl font-bold">
      <span className="flex h-1/2">
        <div className="flex items-center justify-center bg-white border-2 border-ebony text-licorice text-lg font-normal w-3/6 m-2 ms-0 mt-0 rounded-lg">
          <h1 className="text-center mb-2 bg-gray-50 py-2 px-4 rounded-lg">
            Percentage Placed (Department-wise)
            <Percentage_Placed data={PlacementData.PercentagePlaced} />
          </h1>
        </div>
        <div className="flex items-center justify-center bg-white border-2 border-ebony text-gray-900 text-lg font-normal w-3/6 mb-2 rounded-lg">
          <h1 className="text-center mb-2 bg-gray-50 py-2 px-4 rounded-lg">
            Students appearing with students placed
            <Appearing_Placed data={PlacementData.AppearingPlaced} />
          </h1>
        </div>
      </span>
      <span className="flex h-1/2">
        <div className="flex items-center justify-center bg-white border-2 border-ebony text-licorice text-lg font-normal w-3/6 me-2 mb-2 rounded-lg">
          <h1 className="text-center mb-2 bg-gray-50 py-2 px-4 rounded-lg">
            Average Salary
            <Average_Salary data={PlacementData.AverageSalary} />
          </h1>
        </div>
        <div className="flex items-center justify-center bg-white border-2 border-ebony text-gray-900 text-lg font-normal w-3/6 mb-2 rounded-lg">
          <h1 className="text-center mb-2 bg-gray-50 py-2 px-4 rounded-lg">
            Highest Salary
            <Highest_Salary data={PlacementData.HighestSalary} />
          </h1>
        </div>
      </span>
    </div>
  );
}

export default PlacementDashboard;
