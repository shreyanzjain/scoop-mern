import React, { useState } from "react";
import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";

const companiesData = [
  {
    name: "Deutsche Bank",
    departments: {
      COmps: 5,
      IT: 4,
      "AI & DS": 2,
      EXTC: 2,
      Chemical: 1,
    },
    salary: 1963000,
    totalStudents: 13,
    month: "July",
    shortlisted: 30,
  },
  {
    name: "Oracle",
    departments: {
      COmps: 10,
      IT: 6,
      "AI & DS": 2,
      EXTC: 1,
      Chemical: 0,
    },
    salary: 190000,
    totalStudents: 19,
    month: "July",
    shortlisted: 51,
  },
  {
    name: "General Mills",
    departments: {
      COmps: 4,
      IT: 1,
      "AI & DS": 1,
      EXTC: 0,
      Chemical: 0,
    },
    salary: 120000,
    totalStudents: 36,
    month: "October",
    shortlisted: 35,
  },
  {
    name: "JP Morgan",
    departments: {
      COmps: 15,
      IT: 6,
      "AI & DS": 4,
      EXTC: 2,
      Chemical: 1,
    },
    salary: 1975000,
    totalStudents: 28,
    month: "March",
    shortlisted: 28,
  },
];

const departmentColors = {
  COmps: "#0088FE",
  IT: "#00C49F",
  "AI & DS": "#FFBB28",
  EXTC: "#FF8042",
  Chemical: "#8884d8",
};

const CompanyTable = ({ companies, onSelect }) => (
  <div className="w-1/2 h-screen overflow-y-auto bg-gray-200 p-4">
    <h2 className="text-lg font-bold mb-4">Companies</h2>
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-gray-300">
          <th className="border border-gray-400 px-4 py-2">Serial Number</th>
          <th className="border border-gray-400 px-4 py-2">Name</th>
        </tr>
      </thead>
      <tbody>
        {companies.map((company, index) => (
          <tr
            key={company.name}
            onClick={() => onSelect(company)}
            className="cursor-pointer hover:bg-gray-100"
          >
            <td className="border border-gray-400 px-4 py-2">{index + 1}</td>
            <td className="border border-gray-400 px-4 py-2">{company.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);


const DepartmentPieChart = ({ company }) => (
  <div className="w-full h-1/2 bg-gray-200 flex justify-center items-center">
    <div className="text-center">
      <h2 className="text-lg font-bold mb-4">
        Students Recruited (Department-wise)
      </h2>
      <PieChart width={400} height={300}>
        <Pie
          data={Object.entries(company.departments).map(
            ([department, count]) => ({ name: department, value: count })
          )}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          label
        >
          {Object.entries(company.departments).map(
            ([department, count], index) => (
              <Cell key={index} fill={departmentColors[department]} />
            )
          )}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  </div>
);

const CompanyDetails = ({ company }) => (
  <div className="w-1/2 bg-gray-300 p-4">
    <h2 className="text-lg font-bold mb-4">Company Details</h2>
    <table className="w-full">
      <tbody>
        <tr>
          <td className="font-bold pr-4">Salary:</td>
          <td>{company.salary}</td>
        </tr>
        <tr>
          <td className="font-bold pr-4">Total Students Recruited:</td>
          <td>{company.totalStudents}</td>
        </tr>
        <tr>
          <td className="font-bold pr-4">Month:</td>
          <td>{company.month}</td>
        </tr>
        <tr>
          <td className="font-bold pr-4">Number of Students Shortlisted:</td>
          <td>{company.shortlisted}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const UserStats = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleCompanySelect = (company) => {
    setSelectedCompany(company);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold bg-gray-800 text-white text-center p-4">
        Placement Details
      </h1>
      <div className="flex">
        <CompanyTable
          companies={companiesData}
          onSelect={handleCompanySelect}
        />
        <div className="w-1/2 bg-gray-200 flex flex-col">
          {selectedCompany && (
            <>
              <div className="flex-1">
                <CompanyDetails company={selectedCompany} />
              </div>
              <div className="flex-1">
                <DepartmentPieChart company={selectedCompany} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserStats;
