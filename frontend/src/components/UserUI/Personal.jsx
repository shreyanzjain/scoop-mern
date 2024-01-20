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
// import React from 'react'

// const Personal = () => {
//   return (
//     <div class="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">
//     <div class="px-4 py-5 sm:px-6">
//         <h3 class="text-lg leading-6 font-medium text-gray-900">
//             Personal Details
//         </h3>
//         <p class="mt-1 max-w-2xl text-sm text-gray-500">
//             Details and information about user.
//         </p>
//     </div>
//     <div class="border-t border-gray-200">
//         <dl>
//             <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                 <dt class="text-sm font-medium text-gray-500">
//                     Full name
//                 </dt>
//                 <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                     Iyer Varun Mahesh
//                 </dd>
//             </div>
//             <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                 <dt class="text-sm font-medium text-gray-500">
//                     Age
//                 </dt>
//                 <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                     99
//                 </dd>
//             </div>
//             <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                 <dt class="text-sm font-medium text-gray-500">
//                     Email address
//                 </dt>
//                 <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                     iyervarunnurav@gmail.com
//                 </dd>
//             </div>
//             <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                 <dt class="text-sm font-medium text-gray-500">
//                     Phone Number
//                 </dt>
//                 <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                     9898745456
//                 </dd>
//             </div>
//             <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                 <dt class="text-sm font-medium text-gray-500">
//                     Date of Birth
//                 </dt>
//                 <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                     32/14/2024
//                 </dd>
//             </div>
//             <div class="bg-white-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                 <dt class="text-sm font-medium text-gray-500">
//                     Mother's Name:
//                 </dt>
//                 <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                     XYZ
//                 </dd>
//             </div>
//             <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                 <dt class="text-sm font-medium text-gray-500">
//                     Father's Name:
//                 </dt>
//                 <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                     XYZ
//                 </dd>
//             </div>
//             <div class="bg-white-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                 <dt class="text-sm font-medium text-gray-500">
//                     Mother's Phone Number:
//                 </dt>
//                 <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                     9898745456
//                 </dd>
//             </div>
//             <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                 <dt class="text-sm font-medium text-gray-500">
//                     Father's Phone Number: 
//                 </dt>
//                 <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                     9898745456
//                 </dd>
//             </div>
//         </dl>
//     </div>
// </div>
//   )
// }

// export default Personal
