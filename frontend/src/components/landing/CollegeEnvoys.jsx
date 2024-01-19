// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';

// const CollegeEnvoys = () => {
//     const [selectedTab, setSelectedTab] = useState(1);

//     // Sample student data for each department
//     const departmentData = {
//         1: {
//             departmentName: 'CS',
//             databaseEnvoy: { name: 'Database Envoy', image: 'https://via.placeholder.com/150' },
//             envoys: [
//                 { name: 'Student 1', image: 'https://via.placeholder.com/150' },
//                 { name: 'Student 2', image: 'https://via.placeholder.com/150' },
//                 { name: 'Student 3', image: 'https://via.placeholder.com/150' },
//                 // Add more students as needed
//             ],
//         },
//         2: {
//             departmentName: 'IT',
//             databaseEnvoy: { name: 'Database Envoy', image: 'https://via.placeholder.com/150' },
//             envoys: [
//                 { name: 'Student A', image: 'https://via.placeholder.com/150' },
//                 { name: 'Student B', image: 'https://via.placeholder.com/150' },
//                 { name: 'Student C', image: 'https://via.placeholder.com/150' },
//                 // Add more students as needed
//             ],
//         },
//         3: {
//             departmentName: 'AI&DS',
//             databaseEnvoy: { name: 'Database Envoy', image: 'https://via.placeholder.com/150' },
//             envoys: [
//                 { name: 'Student X', image: 'https://via.placeholder.com/150' },
//                 { name: 'Student Y', image: 'https://via.placeholder.com/150' },
//                 { name: 'Student Z', image: 'https://via.placeholder.com/150' },
//                 // Add more students as needed
//             ],
//         },
//         4: {
//             departmentName: 'EXTC',
//             databaseEnvoy: { name: 'Database Envoy', image: 'https://via.placeholder.com/150' },
//             envoys: [
//                 { name: 'Student P', image: 'https://via.placeholder.com/150' },
//                 { name: 'Student Q', image: 'https://via.placeholder.com/150' },
//                 { name: 'Student R', image: 'https://via.placeholder.com/150' },
//                 // Add more students as needed
//             ],
//         },
//         5: {
//             departmentName: 'CHEMICAL',
//             databaseEnvoy: { name: 'Database Envoy', image: 'https://via.placeholder.com/150' },
//             envoys: [
//                 { name: 'Student Alpha', image: 'https://via.placeholder.com/150' },
//                 { name: 'Student Beta', image: 'https://via.placeholder.com/150' },
//                 { name: 'Student Gamma', image: 'https://via.placeholder.com/150' },
//                 // Add more students as needed
//             ],
//         },
//     };

//     return (
//         <div>
//             <section className="text-gray-600 body-font">
//                 <div className="container px-5 py-24 mx-auto">
//                     <div className="flex flex-col text-center w-full mb-20">
//                         <h1 className="text-3xl text-indigo-500 tracking-widest font-medium title-font mb-1">College Envoys</h1>
//                         <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Empowering College Departments</h1>
//                         <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Enhance communication and collaboration between college departments with College Envoys.</p>
//                     </div>

//                     <div className="flex items-center justify-center space-x-4">
//                         <div
//                             onClick={() => setSelectedTab(1)}
//                             className={`p-2 px-4 border-2 border-gray-200 cursor-pointer ${selectedTab === 1 ? 'bg-indigo-500 text-white' : 'hover:bg-gray-200'}`}
//                         >
//                             Cs
//                         </div>
//                         <div
//                             onClick={() => setSelectedTab(2)}
//                             className={`p-2 px-4 border-2 border-gray-200 cursor-pointer ${selectedTab === 2 ? 'bg-indigo-500 text-white' : 'hover:bg-gray-200'}`}
//                         >
//                             IT
//                         </div>
//                         <div
//                             onClick={() => setSelectedTab(3)}
//                             className={`p-2 px-4 border-2 border-gray-200 cursor-pointer ${selectedTab === 3 ? 'bg-indigo-500 text-white' : 'hover:bg-gray-200'}`}
//                         >
//                             AI&DS
//                         </div>
//                         <div
//                             onClick={() => setSelectedTab(4)}
//                             className={`p-2 px-4 border-2 border-gray-200 cursor-pointer ${selectedTab === 4 ? 'bg-indigo-500 text-white' : 'hover:bg-gray-200'}`}
//                         >
//                             EXTC
//                         </div>
//                         <div
//                             onClick={() => setSelectedTab(5)}
//                             className={`p-2 px-4 border-2 border-gray-200 cursor-pointer ${selectedTab === 5 ? 'bg-indigo-500 text-white' : 'hover:bg-gray-200'}`}
//                         >
//                             CHEMICAL
//                         </div>
//                     </div>

//                     {selectedTab && departmentData[selectedTab] && (
//                         <div className="p-4 border-2 border-gray-200 bg-white">
//                             <div className="text-center mb-4">
//                                 <h2 className="text-2xl font-medium mb-2">
//                                     Department {selectedTab} - {departmentData[selectedTab].departmentName}
//                                 </h2>
//                                 <div className="border p-2">
//                                     <div className="flex items-center">
//                                         <img
//                                             src={departmentData[selectedTab].databaseEnvoy.image}
//                                             alt={departmentData[selectedTab].databaseEnvoy.name}
//                                             className="w-16 h-16 rounded-full mx-auto"
//                                         />
//                                         <p className="mt-2">{departmentData[selectedTab].databaseEnvoy.name}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="grid grid-cols-2 gap-4">
//                                 {departmentData[selectedTab].envoys.map((student, index) => (
//                                     <div key={index} className="border p-2 rounded">
//                                         <div className="flex items-center">
//                                             <img src={student.image} alt={student.name} className="w-16 h-16 rounded-full" />
//                                             <p className="ml-4">{student.name}</p>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     )}

//                     <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover-bg-indigo-600 rounded text-lg">
//                         <NavLink to="/">Home</NavLink>
//                     </button>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default CollegeEnvoys;

import React, { useState } from 'react';

const CollegeEnvoys = () => {
    const [selectedTab, setSelectedTab] = useState(2);

    // Sample student data for each department
    const departmentData = {
        1: {
                        departmentName: 'CS',
                        databaseEnvoy: { name: 'Database Envoy', image: 'https://via.placeholder.com/150' },
                        envoys: [
                            { name: 'Student 1', image: 'https://via.placeholder.com/150' },
                            { name: 'Student 2', image: 'https://via.placeholder.com/150' },
                            { name: 'Student 3', image: 'https://via.placeholder.com/150' },
                            // Add more students as needed
                        ],
                    },
                    2: {
                        departmentName: 'IT',
                        databaseEnvoy: { name: 'Database Envoy', image: 'https://via.placeholder.com/150' },
                        envoys: [
                            { name: 'Student A', image: 'https://via.placeholder.com/150' },
                            { name: 'Student B', image: 'https://via.placeholder.com/150' },
                            { name: 'Student C', image: 'https://via.placeholder.com/150' },
                            { name: 'Student D', image: 'https://via.placeholder.com/150' }
                            
                            // Add more students as needed
                        ],
                    },
                    3: {
                        departmentName: 'AI&DS',
                        databaseEnvoy: { name: 'Database Envoy', image: 'https://via.placeholder.com/150' },
                        envoys: [
                            { name: 'Student X', image: 'https://via.placeholder.com/150' },
                            { name: 'Student Y', image: 'https://via.placeholder.com/150' },
                            { name: 'Student Z', image: 'https://via.placeholder.com/150' },
                            // Add more students as needed
                        ],
                    },
                    4: {
                        departmentName: 'EXTC',
                        databaseEnvoy: { name: 'Database Envoy', image: 'https://via.placeholder.com/150' },
                        envoys: [
                            { name: 'Student P', image: 'https://via.placeholder.com/150' },
                            { name: 'Student Q', image: 'https://via.placeholder.com/150' },
                            { name: 'Student R', image: 'https://via.placeholder.com/150' },
                            // Add more students as needed
                        ],
                    },
                    5: {
                        departmentName: 'Chemical',
                        databaseEnvoy: { name: 'Database Envoy', image: 'https://via.placeholder.com/150' },
                        envoys: [
                            { name: 'Student Alpha', image: 'https://via.placeholder.com/150' },
                            { name: 'Student Beta', image: 'https://via.placeholder.com/150' },
                            { name: 'Student Gamma', image: 'https://via.placeholder.com/150' },
                            // Add more students as needed
                        ],
                    },
    };

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-10">
                        <h1 className="text-3xl text-indigo-500 tracking-widest font-medium title-font mb-1">College Envoys</h1>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 mt-1">Empowering College Departments</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            Enhance communication and collaboration between companies, departments and TPO with College Envoys.</p>
                    </div>

                    <div className="flex items-center justify-center space-x-4">
                        <div
                            onClick={() => setSelectedTab(1)}
                            className={`p-2 px-4 border-2 border-gray-200 cursor-pointer ${selectedTab === 1 ? 'bg-indigo-500 text-white' : 'hover:bg-gray-200'}`}
                        >
                            CS
                        </div>
                        <div
                            onClick={() => setSelectedTab(2)}
                            className={`p-2 px-4 border-2 border-gray-200 cursor-pointer ${selectedTab === 2 ? 'bg-indigo-500 text-white' : 'hover:bg-gray-200'}`}
                        >
                            IT
                        </div>
                        <div
                            onClick={() => setSelectedTab(3)}
                            className={`p-2 px-4 border-2 border-gray-200 cursor-pointer ${selectedTab === 3 ? 'bg-indigo-500 text-white' : 'hover:bg-gray-200'}`}
                        >
                            AI&DS
                        </div>
                        <div
                            onClick={() => setSelectedTab(4)}
                            className={`p-2 px-4 border-2 border-gray-200 cursor-pointer ${selectedTab === 4 ? 'bg-indigo-500 text-white' : 'hover:bg-gray-200'}`}
                        >
                            EXTC
                        </div>
                        <div
                            onClick={() => setSelectedTab(5)}
                            className={`p-2 px-4 border-2 border-gray-200 cursor-pointer ${selectedTab === 5 ? 'bg-indigo-500 text-white' : 'hover:bg-gray-200'}`}
                        >
                            CHEMICAL
                        </div>
                        {/* Add more department tabs here */}
                    </div>

                    {selectedTab && departmentData[selectedTab] && (
                        <div className="p-4 border-2 border-gray-200 bg-white mt-4">
                            <h2 className="text-2xl font-medium mb-2">
                                {departmentData[selectedTab].departmentName} Department 
                            </h2>
                            <div className="grid grid-cols-2 gap-4" style={{height:'200px',overflowY: 'auto' }}>
                                <div className="border p-2 rounded">
                                    <div className="flex items-center">
                                        <img src={departmentData[selectedTab].databaseEnvoy.image} alt={departmentData[selectedTab].databaseEnvoy.name} className="w-16 h-16 rounded-full" />
                                        <p className="ml-4">{departmentData[selectedTab].databaseEnvoy.name}</p>
                                    </div>
                                </div>
                                {departmentData[selectedTab].envoys.map((student, index) => (
                                    <div key={index} className="border p-2 rounded">
                                        <div className="flex items-center">
                                            <img src={student.image} alt={student.name} className="w-16 h-16 rounded-full" />
                                            <p className="ml-4">{student.name}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        <NavLink to="/">Home</NavLink>
                    </button> */}
                </div>
            </section>
        </div>
    );
};

export default CollegeEnvoys;
