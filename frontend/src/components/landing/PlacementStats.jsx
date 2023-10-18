import React, { useState, useEffect } from 'react';

const PlacementStats = () => {
  const [selectedTab, setSelectedTab] = useState('IT');
  const [lowSalary, setLowSalary] = useState(0);
  const [avgSalary, setAvgSalary] = useState(0);
  const [highSalary, setHighSalary] = useState(0);

  const handleTabChange = (newTab) => {
    setSelectedTab(newTab);
    updateSalaries(newTab); // Call the animation when the tab changes
  };

  const updateSalaries = (newTab) => {
    const increment = 5000; // Change this value based on your animation speed
    let currentLowSalary = 100000;
    let currentAvgSalary = 300000;
    let currentHighSalary = 700000;

    const timer = setInterval(() => {
      if (currentLowSalary < placementData[newTab].lowSalary) {
        currentLowSalary += increment;
        setLowSalary(currentLowSalary);
      }

      if (currentAvgSalary < placementData[newTab].avgSalary) {
        currentAvgSalary += increment;
        setAvgSalary(currentAvgSalary);
      }

      if (currentHighSalary < placementData[newTab].highSalary) {
        currentHighSalary += increment;
        setHighSalary(currentHighSalary);
      }

      if (
        currentLowSalary >= placementData[newTab].lowSalary &&
        currentAvgSalary >= placementData[newTab].avgSalary &&
        currentHighSalary >= placementData[newTab].highSalary
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
    },
    CS: {
      lowSalary: 480000,
      avgSalary: 720000,
      highSalary: 1050000,
    },
    'AI&DS': {
      lowSalary: 490000,
      avgSalary: 740000,
      highSalary: 1080000,
    },
    EXTC: {
      lowSalary: 470000,
      avgSalary: 710000,
      highSalary: 1040000,
    },
    Chemical: {
      lowSalary: 460000,
      avgSalary: 700000,
      highSalary: 1020000,
    },
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-10 h-[1.25rem]">Placement Statistics</h1>
      <div className="flex justify-center space-x-4 mt-10">
        {/* Your tab buttons here */}
        <button
          className={`px-4 py-2 rounded-full ${
            selectedTab === 'CS'
              ? 'bg-blue-500 text-white'
              : 'bg-white text-blue-500 border border-blue-500'
          } mx-2`}
          onClick={() => handleTabChange('CS')}
        >
          CS
        </button>
        <button
          className={`px-4 py-2 rounded-full ${
            selectedTab === 'IT'
              ? 'bg-blue-500 text-white'
              : 'bg-white text-blue-500 border border-blue-500'
          } mx-2`}
          onClick={() => handleTabChange('IT')}
        >
          IT
        </button>
        <button
          className={`px-4 py-2 rounded-full ${
            selectedTab === 'AI&DS'
              ? 'bg-blue-500 text-white'
              : 'bg-white text-blue-500 border border-blue-500'
          } mx-2`}
          onClick={() => handleTabChange('AI&DS')}
        >
          AI&DS
        </button>
        <button
          className={`px-4 py-2 rounded-full ${
            selectedTab === 'EXTC'
              ? 'bg-blue-500 text-white'
              : 'bg-white text-blue-500 border border-blue-500'
          } mx-2`}
          onClick={() => handleTabChange('EXTC')}
        >
          EXTC
        </button>
        <button
          className={`px-4 py-2 rounded-full ${
            selectedTab === 'Chemical'
              ? 'bg-blue-500 text-white'
              : 'bg-white text-blue-500 border border-blue-500'
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
        transition duration-300 ease-in-out hover:bg-blue-500 hover:border-blue-500 hover:text-white">
              <div className="text-lg font-semibold">Lowest Salary</div>
              <div className="text-2xl">{Math.round(lowSalary)}</div>
            </div>
            <div className="flex-1 text-center bg-white p-4 border border-blue-500 rounded-md
        transition duration-300 ease-in-out hover:bg-blue-500 hover:border-blue-500 hover:text-white">
              <div className="text-lg font-semibold">Average Salary</div>
              <div className="text-2xl">{Math.round(avgSalary)}</div>
            </div>
            <div className="flex-1 text-center bg-white p-4 border border-blue-500 rounded-md
        transition duration-300 ease-in-out hover:bg-blue-500 hover:border-blue-500 hover:text-white">
              <div className="text-lg font-semibold">Highest Salary</div>
              <div className="text-2xl">{Math.round(highSalary)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementStats;
