import React, { useState } from "react";

const Edu = () => {
  const userData = {
    tenthBoard: "Maharashtra State Board",
    tenthPercentage: 95.4,
    twelfthBoard: "Maharashtra State Board",
    twelfthPercentage: 90,
    diplomaYesNo: "No",
    diplomaPercentage: 0,
    additionalPhoneNumber: "1234567890",
  };
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-medium mb-6">Personal Details</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        <div className="flex items-center">
          <p className="text-gray-500 font-medium mr-4">Tenth Board:</p>
          <p className="text-gray-900 font-semibold">{userData.tenthBoard}</p>
        </div>
        <div className="flex items-center">
          <p className="text-gray-500 font-medium mr-4">Tenth Board Marks</p>
          <p className="text-gray-900 font-semibold">{userData.tenthPercentage}%</p>
        </div>
        <div className="flex items-center">
          <p className="text-gray-500 font-medium mr-4">Twelfth Board</p>
          <p className="text-gray-900 font-semibold">{userData.twelfthBoard}</p>
        </div>
        <div className="flex items-center">
          <p className="text-gray-500 font-medium mr-4">Twelfth Board Marks</p>
          <p className="text-gray-900 font-semibold">{userData.twelfthPercentage}</p>
        </div>
        <div className="flex items-center">
          <p className="text-gray-500 font-medium mr-4">Diploma</p>
          <p className="text-gray-900 font-semibold">{userData.diplomaYesNo}</p>
        </div>
        <div className="flex items-center">
          <p className="text-gray-500 font-medium mr-4">Diploma Marks</p>
          <p className="text-gray-900 font-semibold">{userData.diplomaPercentage}</p>
        </div>
      </div>
    </div>
  );
};

export default Edu;
