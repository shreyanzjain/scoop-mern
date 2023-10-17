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

// Calendar.jsx
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import jsonData from './calendardata.json';

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());
  const [highlightedDates, setHighlightedDates] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    // Process your JSON data to extract the date information and set it in the state
    const dates = jsonData.map(({ year, month, day }) => new Date(year, month - 1, day));
    setHighlightedDates(dates);
  }, []);

  const centerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '70vh', // Adjust the height as needed
  };

  const calendarStyle = {
    width: '600px', // Adjust the width to make the calendar larger
    height: '600px', // Adjust the height to make the calendar larger
  };

  const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '600px',
    height: '450px',
    border: '1px solid #000',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '10px', // Adjust the top position for the button
    right: '10px', // Adjust the right position for the button
    cursor: 'pointer',
    fontSize: '24px',
  };

  const modalContentStyle = {
    padding: '20px',
    fontSize: '24px',
    textAlign: 'center',
  };

  const tileClassName = ({ date }) => {
    if (highlightedDates.find((d) => d.toDateString() === date.toDateString())) {
      return 'highlighted-date';
    }
    return '';
  };

  const handleDateClick = (value) => {
    const clickedDate = value.toDateString();
    const event = jsonData.find((item) => new Date(item.year, item.month - 1, item.day).toDateString() === clickedDate);
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div style={centerStyle}>
      <style>
        {`
          .highlighted-date {
            background-color: #FFA500;
            color: #fff;
            border-radius: 50%;
            padding: 6px;
            font-weight: bold;
          }

          .modal-content {
            padding: 20px;
            font-size: 24px;
            text-align: center;
          }
        `}
      </style>
      <Calendar
        onChange={setDate}
        value={date}
        tileClassName={tileClassName}
        style={calendarStyle}
        onClickDay={handleDateClick}
      />
      {selectedEvent && (
        <div className="modal" style={modalStyle}>
          <span className="close" style={closeButtonStyle} onClick={closeModal}>
            &times;
          </span>
          <div className="modal-content" style={modalContentStyle}>
            <h2>Event Information</h2>
            <p>Date: {selectedEvent.day}/{selectedEvent.month}/{selectedEvent.year}</p>
            <p>Activity: {selectedEvent.activity}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarComponent;
