import React, { useState, useEffect } from 'react';

const PlacementStats = () => {
  const [selectedTab, setSelectedTab] = useState('IT');
  const [lowSalary, setLowSalary] = useState(0);
  const [avgSalary, setAvgSalary] = useState(0);
  const [highSalary, setHighSalary] = useState(0);
  const [placedStudents, setPlacedStudents] = useState(0);
  const [remainingStudents, setRemainingStudents] = useState(0);
  const [totalCompanies, setTotalCompanies] = useState(0);
  const [recruitedCompanies, setRecruitedCompanies] = useState(0);
  
  const handleTabChange = (newTab) => {
    setSelectedTab(newTab);
    updateSalaries(newTab); // Call the animation when the tab changes
  };
   


   const updateSalaries = (newTab) => {
    const increment = 2; // Change this value based on your animation speed
    
    let currentLowSalary = 100000;
    let currentAvgSalary = 300000;
    let currentHighSalary = 700000;
    let currentPlacedStudents=0;
    let currentRemainingStudents=0;
    let currentTotalCompanies=0;
    let currentRecruitedCompanies=0;
    const data = placementData[newTab];

    setLowSalary(data.lowSalary);
    setAvgSalary(data.avgSalary);
    setHighSalary(data.highSalary);
    setPlacedStudents(data.totalPlaced);
    setRemainingStudents(data.totalStudents - data.totalPlaced);
    setTotalCompanies(data.totalCompanies);
    setRecruitedCompanies(data.recruitedCompanies);
    const timer = setInterval(() => {
      if (currentLowSalary < placementData[newTab].lowSalary) {
        currentLowSalary += increment*5000;
        setLowSalary(currentLowSalary);
      }

      if (currentAvgSalary < placementData[newTab].avgSalary) {
        currentAvgSalary += increment*5000;
        setAvgSalary(currentAvgSalary);
      }

      if (currentHighSalary < placementData[newTab].highSalary) {
        currentHighSalary += increment*5000;
        setHighSalary(currentHighSalary);
      }
      if (currentPlacedStudents < placementData[newTab].totalPlaced) {
        currentPlacedStudents += increment;
        setPlacedStudents(currentPlacedStudents);
      }
      if (currentRemainingStudents < placementData[newTab].totalStudents-placementData[newTab].totalPlaced) {
        currentRemainingStudents += increment;
        setRemainingStudents(currentRemainingStudents);
      }
      if (currentTotalCompanies < placementData[newTab].totalCompanies) {
        currentTotalCompanies += increment;
        setTotalCompanies(currentTotalCompanies);
      }
      if (currentRecruitedCompanies < placementData[newTab].recruitedCompanies) {
        currentRecruitedCompanies += increment;
        setRecruitedCompanies(currentRecruitedCompanies);
      }
      if (
        currentLowSalary >= placementData[newTab].lowSalary &&
        currentAvgSalary >= placementData[newTab].avgSalary &&
        currentHighSalary >= placementData[newTab].highSalary &&
        currentPlacedStudents >= placementData[newTab].placedStudents &&
        currentRemainingStudents>=(placementData[newTab].totalStudents-placementData[newTab].totalPlaced) &&
        currentTotalCompanies >= placementData[newTab].totalCompanies &&
        currentRecruitedCompanies >= placementData[newTab].recruitedCompanies
      ) {
        clearInterval(timer);
      }
    }, 30);
  };

  useEffect(() => {
    
    updateSalaries(selectedTab); // Initial animation when the component mounts
  }, [selectedTab]);

  const placementData = {
    IT: {
      lowSalary: 500000,
      avgSalary: 750000,
      highSalary: 1100000,
      totalStudents: 100,
      totalPlaced: 70,
      totalCompanies: 20,
      recruitedCompanies: 15,
      // Year1: {
      //   totalStudents: 100,
      //   totalPlaced: 70,
      // },
      // Year2: {
      //   totalStudents: 110,
      //   totalPlaced: 75,
      // },
      // Year3: {
      //   totalStudents: 120,
      //   totalPlaced: 80,
      // },
      // Year4: {
      //   totalStudents: 130,
      //   totalPlaced: 85,
      // },
      // Year5: {
      //   totalStudents: 140,
      //   totalPlaced: 90,
      // },
    },
    CS: {
      lowSalary: 480000,
      avgSalary: 720000,
      highSalary: 1050000,
      totalStudents: 100,
      totalPlaced: 70,
      totalCompanies: 20,
      recruitedCompanies: 15,
      // Year1: {
      //   totalStudents: 90,
      //   totalPlaced: 60,
      // },
      // Year2: {
      //   totalStudents: 95,
      //   totalPlaced: 65,
      // },
      // Year3: {
      //   totalStudents: 100,
      //   totalPlaced: 70,
      // },
      // Year4: {
      //   totalStudents: 105,
      //   totalPlaced: 75,
      // },
      // Year5: {
      //   totalStudents: 110,
      //   totalPlaced: 80,
      // },
    },
    'AI&DS': {
      lowSalary: 380000,
      avgSalary: 820000,
      highSalary: 1150000,
      totalStudents: 100,
      totalPlaced: 70,
      totalCompanies: 20,
      recruitedCompanies: 15,
      // Year1: {
      //   totalStudents: 80,
      //   totalPlaced: 50,
      // },
      // Year2: {
      //   totalStudents: 85,
      //   totalPlaced: 55,
      // },
      // Year3: {
      //   totalStudents: 90,
      //   totalPlaced: 60,
      // },
      // Year4: {
      //   totalStudents: 95,
      //   totalPlaced: 65,
      // },
      // Year5: {
      //   totalStudents: 100,
      //   totalPlaced: 70,
      // },
      
    },
    Chemical: {
      lowSalary: 460000,
      avgSalary: 700000,
      highSalary: 1020000,
      totalStudents: 100,
      totalPlaced: 70,
      totalCompanies: 20,
      recruitedCompanies: 15,
      
      // Year1: {
      //   totalStudents: 95,
      //   totalPlaced: 65,
      // },
      // Year2: {
      //   totalStudents: 100,
      //   totalPlaced: 70,
      // },
      // Year3: {
      //   totalStudents: 105,
      //   totalPlaced: 75,
      // },
      // Year4: {
      //   totalStudents: 110,
      //   totalPlaced: 80,
      // },
      // Year5: {
      //   totalStudents: 115,
      //   totalPlaced: 85,
      // },
    },
    EXTC: {
      lowSalary: 470000,
      avgSalary: 710000,
      highSalary: 1040000,
      totalStudents: 100,
      totalPlaced: 70,
      totalCompanies: 20,
      recruitedCompanies: 15,
      // Year1: {
      //   totalStudents: 85,
      //   totalPlaced: 55,
      // },
      // Year2: {
      //   totalStudents: 90,
      //   totalPlaced: 60,
      // },
      // Year3: {
      //   totalStudents: 95,
      //   totalPlaced: 65,
      // },
      // Year4: {
      //   totalStudents: 100,
      //   totalPlaced: 70,
      // },
      // Year5: {
      //   totalStudents: 105,
      //   totalPlaced: 75,
      // },
    },
  };
  
  return (
    <div>
      <h1 className="text-3xl text-indigo-500 tracking-widest font-medium title-font text-center mt-10 h-[1.25rem]">Placement Statistics</h1>
      <div className="flex justify-center space-x-4 mt-10">
        {/* Your tab buttons here */}
        <button
          className={`p-2 px-4 border-2 border-gray-200 cursor-pointer ${
            selectedTab === 'CS'
            ? 'bg-indigo-500 text-white'
            : 'hover:bg-gray-200'
          } mx-2`}
          onClick={() => handleTabChange('CS')}
        >
          CS
        </button>
        <button
          className={`p-2 px-4 border-2 border-gray-200 cursor-pointer ${
            selectedTab === 'IT'
            ? 'bg-indigo-500 text-white'
            : 'hover:bg-gray-200'
          } mx-2`}
          onClick={() => handleTabChange('IT')}
        >
          IT
        </button>
        <button
          className={`p-2 px-4 border-2 border-gray-200 cursor-pointer ${
            selectedTab === 'AI&DS'
              ? 'bg-indigo-500 text-white'
              : 'hover:bg-gray-200'
          } mx-2`}
          onClick={() => handleTabChange('AI&DS')}
        >
          AI&DS
        </button>
        <button
          className={`p-2 px-4 border-2 border-gray-200 cursor-pointer  ${
            selectedTab === 'EXTC'
            ? 'bg-indigo-500 text-white'
            : 'hover:bg-gray-200'
          } mx-2`}
          onClick={() => handleTabChange('EXTC')}
        >
          EXTC
        </button>
        <button
          className={`p-2 px-4 border-2 border-gray-200 cursor-pointer ${
            selectedTab === 'Chemical'
            ? 'bg-indigo-500 text-white'
            : 'hover:bg-gray-200'
          } mx-2`}
          onClick={() => handleTabChange('Chemical')}
        >
          Chemical
        </button>
        
      </div>

      <div>
        <div>
          <br/>
          <div className="flex space-x-4">
            <div className="flex-1 text-center bg-white p-4 border border-blue-500 rounded-md
        transition duration-300 ease-in-out hover:bg-indigo-500 hover:border-blue-500 hover:text-white ml-10">
              <div className="text-lg font-semibold">Lowest Salary</div>
              <div className="text-2xl">{Math.round(lowSalary)}</div>
            </div>
            <div className="flex-1 text-center bg-white p-4 border border-blue-500 rounded-md
        transition duration-300 ease-in-out hover:bg-indigo-500 hover:border-blue-500 hover:text-white ml-2 mr-2">
              <div className="text-lg font-semibold">Average Salary</div>
              <div className="text-2xl">{Math.round(avgSalary)}</div>
            </div>
            <div className="flex-1 text-center bg-white p-4 border border-blue-500 rounded-md
        transition duration-300 ease-in-out hover:bg-indigo-500 hover:border-blue-500 hover:text-white mr-4" style={{ marginRight: '40px' }}>
              <div className="text-lg font-semibold">Highest Salary</div>
              <div className="text-2xl">{Math.round(highSalary)}</div>
            </div>
          </div>
        <div className="flex space-x-4 mt-4">
          <div className="flex-1 text-center bg-white p-4 border border-blue-500 rounded-md
        transition duration-300 ease-in-out hover:bg-indigo-500 hover:border-blue-500 hover:text-white ml-10">
          <div className="text-lg font-semibold">Placed Students</div>
          <div className="text-2xl">{placedStudents}</div>
        </div>
        <div className="flex-1 text-center bg-white p-4 border border-blue-500 rounded-md
        transition duration-300 ease-in-out hover:bg-indigo-500 hover:border-blue-500 hover:text-white mr-4" style={{ marginRight: '40px' }}>
          <div className="text-lg font-semibold">Remaining Students</div>
          <div className="text-2xl">{remainingStudents}</div>
        </div>
      </div>

      <div className="flex space-x-4 mt-4">
      <div className="flex-1 text-center bg-white p-4 border border-blue-500 rounded-md
        transition duration-300 ease-in-out hover:bg-indigo-500 hover:border-blue-500 hover:text-white ml-10">
          <div className="text-lg font-semibold">Total Companies</div>
          <div className="text-2xl">{totalCompanies}</div>
        </div>
        <div className="flex-1 text-center bg-white p-4 border border-blue-500 rounded-md
        transition duration-300 ease-in-out hover:bg-indigo-500 hover:border-blue-500 hover:text-white mr-4" style={{ marginRight: '40px' }}>
          <div className="text-lg font-semibold">Recruited Companies</div>
          <div className="text-2xl">{recruitedCompanies}</div>
        </div>
      </div>
    </div>
  </div> 
  </div>
  
  );
};

export default PlacementStats;