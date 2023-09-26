import React, { useState } from 'react';
import calendarData from './calendarData.json';

function Calendar() {
  const currentYear = new Date().getFullYear();
  const [displayedYear, setDisplayedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState(null);

  const goToPrevYear = () => {
    if (displayedYear > currentYear - 5) {
      setDisplayedYear(displayedYear - 1);
    }
  };

  const goToNextYear = () => {
    if (displayedYear < currentYear) {
      setDisplayedYear(displayedYear + 1);
    }
  };

  const handleMonthClick = (month) => {
    // Filter the calendarData to get activities for the selected month
    const activitiesForMonth = calendarData.filter(
      (entry) => entry.year === displayedYear && entry.month === month
    );

    // Display the activities for the selected month
    setSelectedMonth(activitiesForMonth);
  };

  const renderCalendar = () => {
    return (
      <div className="p-4 border rounded-lg text-center bg-gradient-to-b from-purple-300 via-purple-300 to-purple-300  absolute top-8 right-4">
        <div className="flex justify-between mb-4">
          <button
            onClick={goToPrevYear}
            className={`w-12 h-12 rounded-full border bg-blue-500 hover:bg-indigo-600 text-white text-2xl`}
            disabled={displayedYear <= currentYear - 5}
          >
            &lt;
          </button>
          <h2 className="text-xl font-bold text-white">{displayedYear}</h2>
          <button
            onClick={goToNextYear}
            className={`w-12 h-12 rounded-full border bg-blue-500 hover:bg-green-600 text-white text-2xl`}
            disabled={displayedYear >= currentYear}
          >
            &gt;
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {Array.from({ length: 12 }, (_, index) => (
            <div
              key={index}
              className="w-12 h-12 border rounded-full flex items-center justify-center bg-white hover:bg-yellow-300 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
              onClick={() => handleMonthClick(index + 1)}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center mt-8">
      {renderCalendar()}
      <div className="mt-4">
        {selectedMonth ? (
          <div>
            <h2>Selected Month Info</h2>
            {selectedMonth.map((activity, index) => (
              <p key={index}>{`${activity.activity} on ${activity.month}/${activity.day}/${activity.year}`}</p>
            ))}
          </div>
        ) : (
          <div>
            <h2>Select a Month</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Calendar;
