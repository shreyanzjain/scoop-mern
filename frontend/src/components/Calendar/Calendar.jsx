// import React, { useState } from 'react';
// import calendarData from './calendarData.json';



// function Calendar() {
//   const currentYear = new Date().getFullYear();
//   const minYear = currentYear - 5;
//   const maxYear = currentYear + 2;

//   const [displayedYear, setDisplayedYear] = useState(currentYear);
//   const [selectedMonth, setSelectedMonth] = useState(null);
//   const [selectedDay, setSelectedDay] = useState(null);
  
//   const goToPrevYear = () => {
//     if (displayedYear > minYear) {
//       setDisplayedYear(displayedYear - 1);
//     }
//   };

//   const goToNextYear = () => {
//     if (displayedYear < maxYear) {
//       setDisplayedYear(displayedYear + 1);
//     }
//   };

//   const handleMonthClick = (month) => {
//     // Filter the calendarData to get activities for the selected month
//     const activitiesForMonth = calendarData.filter(
//       (entry) => entry.year === displayedYear && entry.month === month
//     );

//     if (activitiesForMonth.length > 0) {
//       // Display the activities for the selected month
//       setSelectedMonth(activitiesForMonth);
//       setSelectedDay(null); // Reset selected day when a new month is clicked
//     } else {
//       // No data for the selected month, display a message
//       setSelectedMonth([]);
//       setSelectedDay(null);
//     }
//   };

//   const handleDayClick = (day) => {
//     // Find the activity for the selected day
//     const activityForDay = selectedMonth ? selectedMonth.find((entry) => entry.day === day) : null;

//     // Display the activity for the selected day
//     setSelectedDay(activityForDay ? activityForDay.activity : '');
//   };

//   const renderLeftSide = () => {
//     const categories = ['Placement', 'College'];
//     const totalDays = selectedMonth ? new Date(displayedYear, selectedMonth[0].month, 0).getDate() : 0;

//     const dayRows = [];
//     for (let day = 1; day <= totalDays; day++) {
//       const activitiesForDay = selectedMonth
//         ? selectedMonth.filter((entry) => entry.day === day)
//         : [];

//       const placementActivity = activitiesForDay.find((entry) => entry.catgeory === 'Placement');
//       const collegeActivity = activitiesForDay.find((entry) => entry.catgeory === 'College');

//       dayRows.push(
//         <tr key={day} onClick={() => handleDayClick(day)} className="cursor-pointer">
//           <td className="px-4 py-2 text-center">{placementActivity ? placementActivity.activity : '-'}</td>
//           <td className="px-4 py-2 text-center font-bold">{day}</td>
//           <td className="px-4 py-2 text-center">{collegeActivity ? collegeActivity.activity : '-'}</td>
//         </tr>
//       );
//     }

//     return (
//       <div className="w-full absolute top-8 left-4">
//         {selectedMonth && selectedMonth.length > 0 ? (
//           <table className="w-4/5">
//             <thead>
//               <tr>
//                 <th className="px-4 py-2">Placement</th>
//                 <th className="px-4 py-2">Day</th>
//                 <th className="px-4 py-2">College</th>
//               </tr>
//             </thead>
//             <tbody>{dayRows}</tbody>
//           </table>
//         ) : (
//           <p className="text-gray-500 text-center">No current events on this month</p>
//         )}
//       </div>
//     );
//   };

//   const renderCalendar = () => {
//     return (
//       <div className="p-4 border rounded-lg text-center bg-gradient-to-b from-purple-300 via-purple-300 to-purple-300 fixed top-8 right-4">
//         <div className="flex justify-between mb-4">
//           <button
//             onClick={goToPrevYear}
//             className={`w-12 h-12 rounded-full border bg-blue-500 hover:bg-indigo-600 text-white text-2xl ${
//               displayedYear <= minYear ? 'opacity-50 cursor-not-allowed' : ''
//             }`}
//             disabled={displayedYear <= minYear}
//           >
//             &lt;
//           </button>
//           <h2 className="text-xl font-bold text-white">{displayedYear}</h2>
//           <button
//             onClick={goToNextYear}
//             className={`w-12 h-12 rounded-full border bg-blue-500 hover:bg-green-600 text-white text-2xl ${
//               displayedYear >= maxYear ? 'opacity-50 cursor-not-allowed' : ''
//             }`}
//             disabled={displayedYear >= maxYear}
//           >
//             &gt;
//           </button>
//         </div>
//         <div className="grid grid-cols-4 gap-4">
//           {Array.from({ length: 12 }, (_, index) => (
//             <div
//               key={index}
//               className="w-12 h-12 border rounded-full flex items-center justify-center bg-white hover:bg-yellow-300 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
//               onClick={() => handleMonthClick(index + 1)}
//             >
//               {index + 1}
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="mt-8">
//       {renderLeftSide()}
//       <div className="w-2/3 mx-auto">{renderCalendar()}</div>
//     </div>
//   );
  
// }

// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

// function CalendarComponent() {
//   // State to track the selected month
//   const [selectedMonth, setSelectedMonth] = useState(null);

//   // Function to handle month click
//   const handleMonthClick = (date) => {
//     setSelectedMonth(date);
//   };

//   return (
//     <div className="relative flex">
//       {selectedMonth && (
//         <div className="w-1/2 p-4 abosolute top-0 right-0"> {/* First calendar at the top-right corner */}
//           <h1 className="text-xl mb-4">
//             {selectedMonth.toLocaleString('default', { month: 'long' })} Calendar
//           </h1>
//           <Calendar value={selectedMonth} />
//         </div>
//       )}

//       <div className="w-1/2 p-4 abosolute top-0 right-0"> {/* Second calendar on the right */}
//         <h1 className="text-xl mb-4">Month-Wise Calendar</h1>
//         <Calendar
//           view="year"
//           showMonthNavigation={false}
//           showNeighboringMonth={false}
//           onClickMonth={handleMonthClick} // Handle month click
//         />
//       </div>
//     </div>
//   );
// };
// export default CalendarComponent

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MonthCalendar = () => {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const currentMonth = today.getMonth();
  const [selectedMonth, setSelectedMonth] = useState(null);

  const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December',
  ];

  const handlePrevYear = () => {
    setYear(year - 1);
  };

  const handleNextYear = () => {
    setYear(year + 1);
  };

  const handleMonthClick = (monthIndex) => {
    setSelectedMonth(monthIndex);
  };

  return (
    <div className="full-height-container"> {/* Add a container for full height */}
      <div className="flex p-4">
        <div className="flex-grow"></div>
        <div className="calendar-container border-black border-2">
          <div className="calendar-year flex items-center justify-center">
            <button onClick={handlePrevYear} className="mr-2">&lt;</button>
            {year}
            <button onClick={handleNextYear} className="ml-2">&gt;</button>
          </div>
          <div className="grid grid-cols-3 grid-rows-4 gap-4 p-4">
            {months.map((month, index) => (
              <div
                key={index}
                className={`text-lg bg-white rounded-lg border border-gray-300 p-2
                ${index === currentMonth ? 'bg-blue-200' : ''}
                hover:bg-yellow-200 hover:bg-opacity-75 cursor-pointer`}
                onClick={() => handleMonthClick(index)}
              >
                {month}
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedMonth !== null && (
        <div className="calendar-calendar p-4" style={{ position: 'absolute', bottom: 4 ,right:2}}>
          <Calendar
            value={new Date(year, selectedMonth)}
            onChange={(value) => setSelectedMonth(value.getMonth())}
          />
        </div>
      )}
    </div>
  );
};

export default MonthCalendar;
