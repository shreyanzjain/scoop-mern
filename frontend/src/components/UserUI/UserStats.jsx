import React, { useState } from "react";
import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";

const companiesData = [
  {
    name: "Deutsche Bank",
    departments: {
      Comps: 5,
      IT: 4,
      "AI & DS": 2,
      EXTC: 2,
      Chemical: 1,
    },
    company: "Deutsche Bank",
    salary: 1963000,
    totalStudents: 13,
    month: "July",
    shortlisted: 30,
  },
  {
    name: "Oracle",
    departments: {
      Comps: 10,
      IT: 6,
      "AI & DS": 2,
      EXTC: 1,
      Chemical: 0,
    },
    company: "Oracle",
    salary: 190000,
    totalStudents: 19,
    month: "July",
    shortlisted: 51,
  },
  {
    name: "General Mills",
    departments: {
      Comps: 4,
      IT: 1,
      "AI & DS": 1,
      EXTC: 0,
      Chemical: 0,
    },
    company: "General Mills",
    salary: 120000,
    totalStudents: 36,
    month: "October",
    shortlisted: 35,
  },
  {
    name: "JP Morgan",
    departments: {
      Comps: 15,
      IT: 6,
      "AI & DS": 4,
      EXTC: 2,
      Chemical: 1,
    },
    company: "JP Morgan",
    salary: 1975000,
    totalStudents: 28,
    month: "March",
    shortlisted: 28,
  },
];

const departmentColors = {
  Comps: "#0088FE",
  IT: "#00C49F",
  "AI & DS": "#FFBB28",
  EXTC: "#FF8042",
  Chemical: "#8884d8",
};

const CompanyTable = ({ companies, onSelect }) => (
  <div className="w-1/2 h-screen overflow-y-auto bg-gray-100 p-4">
    <h2 className="text-lg font-bold mb-4">List of Companies</h2>
    <h2 className="text-sm font-semibold mb-3">Click on any company</h2>
    
    <div className="overflow-x-auto">
      <table className="w-full border-collapse shadow-md">
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
  </div>
);



const DepartmentPieChart = ({ company }) => (
  <div className="w-full h-1/2 bg-gray-100 flex justify-center items-center">
    <div className="text-center ">
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
  <div className=" w-full w-1/2 bg-gray-100 p-4 rounded-lg shadow-md">
    <h2 className="text-xl font-semibold mb-4">Company Details</h2>
    <div className="overflow-x-auto">
      <table className="w-full table-auto">
        <tbody>
          <tr className="bg-gray-200">
            <td className="font-semibold py-2 px-4">Company Name:</td>
            <td className="py-2 px-4">{company.company}</td>
          </tr>
          <tr>
            <td className="font-semibold py-2 px-4">Salary:</td>
            <td className="py-2 px-4">{company.salary}</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="font-semibold py-2 px-4">
              Total Students Recruited:
            </td>
            <td className="py-2 px-4">{company.totalStudents}</td>
          </tr>
          <tr>
            <td className="font-semibold py-2 px-4">Month:</td>
            <td className="py-2 px-4">{company.month}</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="font-semibold py-2 px-4">
              Number of Students Shortlisted:
            </td>
            <td className="py-2 px-4">{company.shortlisted}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);


const UserStats = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleCompanySelect = (company) => {
    setSelectedCompany(company);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold bg-gray-200 text-black text-center p-4">
        Placement Details
      </h1>
      <div className="flex">
        <CompanyTable
          companies={companiesData}
          onSelect={handleCompanySelect}
        />
        <div className="w-1/2 bg-gray-100  flex flex-col">
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
