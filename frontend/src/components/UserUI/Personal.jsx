import React,{useState} from 'react';

const Personal = () => {
    const userData = {
        firstName: 'Varun',
        lastName: 'Iyer',
        age: 99,
        email: 'abc@gmail.com',
        gender: 'Male',
        dateOfBirth: '32/14/2024',
        fathersName: 'XYZ',
        mothersName: 'Abc',
        phoneNumber: '9854234188',
        additionalPhoneNumber: '1234567890',
      };
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-medium mb-6">Personal Details</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        <div className="flex items-center">
          <p className="text-gray-500 font-medium mr-4">First Name:</p>
          <p className="text-gray-900 font-semibold">{userData.firstName}</p>
        </div>
        <div className="flex items-center">
          <p className="text-gray-500 font-medium mr-4">Last Name:</p>
          <p className="text-gray-900 font-semibold">{userData.lastName}</p>
        </div>
        <div className="flex items-center">
          <p className="text-gray-500 font-medium mr-4">Age:</p>
          <p className="text-gray-900 font-semibold">{userData.age}</p>
        </div>
        <div className="flex items-center">
          <p className="text-gray-500 font-medium mr-4">Email:</p>
          <p className="text-gray-900 font-semibold">{userData.email}</p>
        </div>
        <div className="flex items-center">
          <p className="text-gray-500 font-medium mr-4">Gender:</p>
          <p className="text-gray-900 font-semibold">{userData.gender}</p>
        </div>
        <div className="flex items-center">
          <p className="text-gray-500 font-medium mr-4">Date Of Birth:</p>
          <p className="text-gray-900 font-semibold">{userData.dateOfBirth}</p>
        </div>
        <div className="flex items-center">
          <p className="text-gray-500 font-medium mr-4">Father's Name:</p>
          <p className="text-gray-900 font-semibold">{userData.fathersName}</p>
        </div>

        <div className="flex items-center">
          <p className="text-gray-500 font-medium mr-4">Mother's Name:</p>
          <p className="text-gray-900 font-semibold">{userData.mothersName}</p>
        </div>
        <div className="flex items-center">
          <p className="text-gray-500 font-medium mr-4">Phone Number:</p>
          <p className="text-gray-900 font-semibold">{userData.phoneNumber}</p>
        </div>        
        <div className="flex items-center">
          <p className="text-gray-500 font-medium mr-4">Additional Phone Number:</p>
          <p className="text-gray-900 font-semibold">{userData.additionalPhoneNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default Personal;
