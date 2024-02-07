import React from "react";
import Percentage_Placed from "./Analytics/PercentagePlaced"
import Appearing_Placed from "./Analytics/Appearing_Placed"
import Average_Salary from "./Analytics/Average_Salary"
import Highest_Salary from "./Analytics/Highest_Salary"

const data = [
  {
    name: "Comps",
    Percentage_Placed: 60,
  },
  {
    name: "IT",
    Percentage_Placed: 35,
  },
  {
    name: "EXTC",
    Percentage_Placed: 45,
  },
  {
    name: "AI & DS",
    Percentage_Placed: 80,
  },
  {
    name: "CHEM",
    Percentage_Placed: 100,
  },
];
const data1 = [
  {
    name: "Comps",
    placed: 100,
    appearing: 160,
  },
  {
    name: "IT",
    placed: 37,
    appearing: 110,
  },
  {
    name: "EXTC",
    placed: 15,
    appearing: 50,
  },
  {
    name: "AI & DS",
    placed: 40,
    appearing: 50,
  },
  {
    name: "CHEM",
    placed: 25,
    appearing: 40,
  },
];
const data2 = [
  {
    name: "CHEM",
    avg_ctc: 6,
  },
  {
    name: "EXTC",
    avg_ctc: 11,
  },
  {
    name: "AI & DS",
    avg_ctc: 10,
  },
  {
    name: "Comps",
    avg_ctc: 14,
  },
  {
    name: "IT",
    avg_ctc: 13.3,
  },
];
const data3 = [
  {
    name: "Comps",
    max_ctc: 24,
  },
  {
    name: "IT",
    max_ctc: 19.75,
  },
  {
    name: "EXTC",
    max_ctc: 19.75,
  },
  {
    name: "AI & DS",
    max_ctc: 19.43,
  },
  {
    name: "CHEM",
    max_ctc: 8,
  },
];
function PlacementDashboard() {
  return (
    <div className="container m-2 bg-whitesmoke bg-opacity-30 w-5/6 text-3xl font-bold">
      <span className="flex h-1/2">
        <div className="flex items-center justify-center bg-white border-2 border-ebony text-licorice text-lg font-normal w-3/6 m-2 ms-0 mt-0 rounded-lg">
          <h1 className="text-center mb-2 bg-gray-50 py-2 px-4 rounded-lg">
            Percentage Placed (Department-wise)
            <Percentage_Placed data={data} />
          </h1>
        </div>
        <div className="flex items-center justify-center bg-white border-2 border-ebony text-gray-900 text-lg font-normal w-3/6 mb-2 rounded-lg">
          <h1 className="text-center mb-2 bg-gray-50 py-2 px-4 rounded-lg">
            Students appearing with students placed
            <Appearing_Placed data={data1} />
          </h1>
        </div>
      </span>
      <span className="flex h-1/2">
        <div className="flex items-center justify-center bg-white border-2 border-ebony text-licorice text-lg font-normal w-3/6 me-2 mb-2 rounded-lg">
          <h1 className="text-center mb-2 bg-gray-50 py-2 px-4 rounded-lg">
            Average Salary
            <Average_Salary data={data2} />
          </h1>
        </div>
        <div className="flex items-center justify-center bg-white border-2 border-ebony text-gray-900 text-lg font-normal w-3/6 mb-2 rounded-lg">
          <h1 className="text-center mb-2 bg-gray-50 py-2 px-4 rounded-lg">
            Highest Salary
            <Highest_Salary data={data3} />
          </h1>
        </div>
      </span>
    </div>
  );
}

export default PlacementDashboard;
