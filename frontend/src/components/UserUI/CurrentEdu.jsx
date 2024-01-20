// import React from 'react'

// const CurrentEdu = () => {
//   return (
    

// <div>
//         <div class="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">
//     <div class="px-4 py-5 sm:px-6">
//         <h3 class="text-lg leading-6 font-medium text-gray-900">
//             Current Educational Details:
//         </h3>
//         <p class="mt-1 max-w-2xl text-sm text-gray-500">
//             Details and informations about engineering GPAs.
//         </p>
//     </div>
//     <div class="border-t border-gray-200">
//         <dl>
//             <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                 <dt class="text-sm font-medium text-gray-500">
//                     Branch
//                 </dt>
//                 <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                     IT
//                 </dd>
//             </div>
//             <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                 <dt class="text-sm font-medium text-gray-500">
//                     Current CGPI
//                 </dt>
//                 <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                     9
//                 </dd>
//             </div>
//             <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                 <dt class="text-sm font-medium text-gray-500">
//                     Current Percentage:
//                 </dt>
//                 <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                     75
//                 </dd>
//             </div>
//             <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                 <dt class="text-sm font-medium text-gray-500">
//                     Semester 1
//                 </dt>
//                 <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                     9
//                 </dd>
//             </div>
//             <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                 <dt class="text-sm font-medium text-gray-500">
//                     Semester 2
//                 </dt>
//                 <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                     9
//                 </dd>
//             </div>
//             <div class="bg-white-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                 <dt class="text-sm font-medium text-gray-500">
//                     Semester 3
//                 </dt>
//                 <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                     9
//                 </dd>
//             </div>
//             <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                 <dt class="text-sm font-medium text-gray-500">
//                     Semester 4
//                 </dt>
//                 <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                     9
//                 </dd>
//             </div>
//             <div class="bg-white-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                 <dt class="text-sm font-medium text-gray-500">
//                     Semester 5
//                 </dt>
//                 <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                     9
//                 </dd>
//             </div>
//             <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                 <dt class="text-sm font-medium text-gray-500">
//                     Semester 6
//                 </dt>
//                 <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                     9
//                 </dd>
//             </div>
//             <div class="bg-white-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                 <dt class="text-sm font-medium text-gray-500">
//                     Semester 7
//                 </dt>
//                 <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                     9
//                 </dd>
//             </div>
//             <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                 <dt class="text-sm font-medium text-gray-500">
//                     Semester 8
//                 </dt>
//                 <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                     9
//                 </dd>
//             </div>
//         </dl>
//     </div>
// </div>
//     </div>
 
//   )
// }

// export default CurrentEdu

import React from 'react'

const CurrentEdu = () => {
    const userData = {
        branch: 'IT',
        prnNo:20024589564212875,
        CGPA: 9.4,
        cgpaPercentage: 92,
        activeKt:'Yes',
        totalBacklog:1,
        sem1: '9',
        sem2: '9',
        sem3: '9',
        sem4: '10',
        sem5: '9.5',
        sem6: '10',
        sem7: '9',
        sem8: ''
      };
  return (
    

<div>
<div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-medium mb-6">Current Education</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        <div className="flex items-center">
          <p className="text-gray-500 font-medium mr-4">Branch:</p>
          <p className="text-gray-900 font-semibold">{userData.branch}</p>
        </div>
        <div className="flex items-center">
          <p className="text-gray-500 font-medium mr-4">PassOut Year:</p>
          <p className="text-gray-900 font-semibold">{userData.prnNo}</p>
        </div>
        <div className="flex items-center">
          <p className="text-gray-500 font-medium mr-4">CGPA:</p>
          <p className="text-gray-900 font-semibold">{userData.CGPA}</p>
        </div>
        <div className="flex items-center">
          <p className="text-gray-500 font-medium mr-4">CGPA %:</p>
          <p className="text-gray-900 font-semibold">{userData.cgpaPercentage}</p>
        </div>
        <div className="flex items-center">
          <p className="text-gray-500 font-medium mr-4">Active KT:</p>
          <p className="text-gray-900 font-semibold">{userData.activeKt}</p>
        </div>
        <div className="flex items-center">
          <p className="text-gray-500 font-medium mr-4">Total BackLog:</p>
          <p className="text-gray-900 font-semibold">{userData.totalBacklog}</p>
        </div>
        <div className="flex items-center">
          <p className="text-gray-500 font-medium mr-4">Semester 1</p>
          <p className="text-gray-900 font-semibold">{userData.sem1}</p>
        </div>
        <div className="flex items-center">
          <p className="text-gray-500 font-medium mr-4">Semester 2:</p>
          <p className="text-gray-900 font-semibold">{userData.sem2}</p>
        </div>

        <div className="flex items-center">
          <p className="text-gray-500 font-medium mr-4">Semester 3:</p>
          <p className="text-gray-900 font-semibold">{userData.sem3}</p>
        </div>
        <div className="flex items-center">
          <p className="text-gray-500 font-medium mr-4">Semester 4:</p>
          <p className="text-gray-900 font-semibold">{userData.sem4}</p>
        </div>        
        <div className="flex items-center">
          <p className="text-gray-500 font-medium mr-4">Semester 5:</p>
          <p className="text-gray-900 font-semibold">{userData.sem5}</p>
        </div>
        <div className="flex items-center">
          <p className="text-gray-500 font-medium mr-4">Semester 6:</p>
          <p className="text-gray-900 font-semibold">{userData.sem6}</p>
        </div>
        <div className="flex items-center">
          <p className="text-gray-500 font-medium mr-4">Semester 7:</p>
          <p className="text-gray-900 font-semibold">{userData.sem7}</p>
        </div>
        <div className="flex items-center">
          <p className="text-gray-500 font-medium mr-4">Semester 8:</p>
          <p className="text-gray-900 font-semibold">{userData.sem8}</p>
        </div>
      </div>
    </div>
    </div>
 
  )
}

export default CurrentEdu