import React, { useState, useEffect } from 'react';
import Highest_Salary from "../Placement/Analytics/Highest_Salary";

const PlacementStats = () => {
  const [selectedTab, setSelectedTab] = useState('CS');
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
  
  const testimonials = [
    {
      id: 1,
      content: (
        <>
          <p></p>
          {/* <Appearing_Placed data={data1} /> Include your chart component */}
          <div className="flex space-x-4">
            <div
              className="flex-1 text-center bg-white p-4 border border-blue-500 rounded-md
        transition duration-300 ease-in-out hover:bg-indigo-500 hover:border-blue-500 hover:text-white "
            >
              <div className="text-lg font-semibold">Average Salary</div>
              <div className="text-2xl">{Math.round(avgSalary)}</div>
            </div>
            <div
              className="flex-1 text-center bg-white p-4 border border-blue-500 rounded-md
        transition duration-300 ease-in-out hover:bg-indigo-500 hover:border-blue-500 hover:text-white"
            >
              <div className="text-lg font-semibold">Highest Salary</div>
              <div className="text-2xl">{Math.round(highSalary)}</div>
            </div>
            <div
              className="flex-1 text-center bg-white p-4 border border-blue-500 rounded-md
        transition duration-300 ease-in-out hover:bg-indigo-500 hover:border-blue-500 hover:text-white"
            >
              <div className="text-lg font-semibold">Lowest Salary</div>
              <div className="text-2xl">{Math.round(lowSalary)}</div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 2,
      content: (
        <>
          
          <Highest_Salary data={data3} />
        </>
      ),
    },

    // Add more testimonials as needed
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    updateSalaries(selectedTab); // Initial animation when the component mounts
  }, [selectedTab]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change interval time as needed (in milliseconds)

    return () => clearInterval(intervalId);
  }, [testimonials.length]);

  const placementData = {
    IT: {
      lowSalary: 500000,
      avgSalary: 750000,
      highSalary: 1100000,
      totalStudents: 100,
      totalPlaced: 70,
      totalCompanies: 20,
      recruitedCompanies: 15,
    },
    CS: {
      lowSalary: 480000,
      avgSalary: 720000,
      highSalary: 1050000,
      totalStudents: 100,
      totalPlaced: 70,
      totalCompanies: 20,
      recruitedCompanies: 15,
    },
    'AI&DS': {
      lowSalary: 380000,
      avgSalary: 820000,
      highSalary: 1150000,
      totalStudents: 100,
      totalPlaced: 70,
      totalCompanies: 20,
      recruitedCompanies: 15,
    },
    Chemical: {
      lowSalary: 460000,
      avgSalary: 700000,
      highSalary: 1020000,
      totalStudents: 100,
      totalPlaced: 70,
      totalCompanies: 20,
      recruitedCompanies: 15,
    },
    EXTC: {
      lowSalary: 470000,
      avgSalary: 710000,
      highSalary: 1040000,
      totalStudents: 100,
      totalPlaced: 70,
      totalCompanies: 20,
      recruitedCompanies: 15,
    },
  };
  
  return (
    <div className="container mx-auto">
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
          
          <div className="flex justify-center">
      {testimonials.map((testimonial, index) => (
        <div
        key={testimonial.id}
        className={`${
          index === currentTestimonialIndex ? 'block' : 'hidden'
        } bg-white-100 p-8 rounded-lg shadow-lg mr-4 mt-12 relative`}
        style={{ width: '800px', height: '350px' }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white-700 mb-4">{testimonial.content}</p>
        </div>
      </div>
      
      ))}
    </div>
        
    </div>
  </div> 
  </div>
  
  );
};

export default PlacementStats;
