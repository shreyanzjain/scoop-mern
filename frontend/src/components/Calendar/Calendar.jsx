// import React, { useState, useEffect } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import jsonData from './calendardata.json';
// import './CustomCalendar.css';

// const CalendarComponent = ({ showModal = true }) => {
//   const [date, setDate] = useState(new Date());
//   const [highlightedDates, setHighlightedDates] = useState([]);
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   useEffect(() => {
//     // Process your JSON data to extract the date information and set it in the state
//     const dates = jsonData.map(({ year, month, day }) => new Date(year, month - 1, day));
//     setHighlightedDates(dates);
//   }, []);

//   const centerStyle = {
//     display: 'flex',
//     flexDirection: 'column',  // Change to column direction
//     justifyContent: 'center', // Align items to the top
//     alignItems: 'center',
//     minHeight: '70vh', // Adjust the height as needed
//   };

//   const calendarStyle = {
//     width: '800px', // Adjust the width to make the calendar larger
//     height: '800px', // Adjust the height to make the calendar larger
//   };

//   const modalStyle = {
//     backgroundColor: '#D3D3D3',
//     position: 'fixed',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: '600px',
//     height: '450px',
//     border: '1px solid #000',
//     color: '#000',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//   };

//   const closeButtonStyle = {
//     position: 'absolute',
//     top: '10px', // Adjust the top position for the button
//     right: '10px', // Adjust the right position for the button
//     cursor: 'pointer',
//     fontSize: '24px',
//   };

//   const modalContentStyle = {
//     padding: '20px',
//     fontSize: '24px',
//     textAlign: 'center',
    
//   };

//   const tileClassName = ({ date }) => {
//     if (highlightedDates.find((d) => d.toDateString() === date.toDateString())) {
//       return 'highlighted-date';
//     }
//     return '';
//   };

//   const handleDateClick = (value) => {
//     if (!showModal) {
//       // Handle the date click for adminCalendar (no modal)
//       // You can add your adminCalendar-specific logic here
//       return;
//     }
//     const clickedDate = value.toDateString();
//     const events = jsonData.filter((item) => new Date(item.year, item.month - 1, item.day).toDateString() === clickedDate);
//     setSelectedEvent(events);
//   };
  

//   const closeModal = () => {
//     setSelectedEvent(null);
//   };

//   const blurredContainerStyle = {
//     position: 'fixed',
//     top: '0',
//     left: '0',
//     width: '100%',
//     height: '100%',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the alpha value for the desired level of transparency
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backdropFilter: selectedEvent ? 'blur(5px)' : 'none', // Apply blur when modal is open
//     transition: 'backdrop-filter 0.3s ease', // Add transition for smooth effect
//   };
//   return (
//     <div style={centerStyle}>
//       <style>
//         {`
//           .highlighted-date {
//             background-color: #FFA500;
//             color: #fff;
//             border-radius: 50%;
//             padding: 6px;
//             font-weight: bold;
//           }

//           .modal-content {
//             padding: 20px;
//             font-size: 24px;
//             text-align: center;
            
//           }
//         `}
//       </style>
//       <Calendar
//         onChange={setDate}
//         value={date}
//         tileClassName={tileClassName}
//         style={calendarStyle}
//         onClickDay={handleDateClick}
//       />
//       {showModal && selectedEvent && (
//         <div className="blurred-container" style={blurredContainerStyle}>
//           <div className="modal" style={modalStyle}>
//             <span className="close" style={closeButtonStyle} onClick={closeModal}>
//               &times;
//             </span>
//             <div className="modal-content" style={modalContentStyle}>
//               {selectedEvent.length > 0 ? (
//                 <table className="w-full mt-4 border">
//                   <thead>
//                     <tr className="bg-blue-100">
//                       <th className="border p-2">Date</th>
//                       <th className="border p-2">Activity</th>
//                       <th className="border p-2">Category</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {selectedEvent.map((event, index) => (
//                       <tr key={index}>
//                         <td className="border p-2 text-center">{`${event.day}/${event.month}/${event.year}`}</td>
//                         <td className="border p-2 text-center">{event.activity}</td>
//                         <td className="border p-2 text-center">{event.catgeory}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               ) : (
//                 <p>No events on this date.</p>
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// };

// export default CalendarComponent;

import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import jsonData from './demo.json';
import './CustomCalendar.css';

const CalendarComponent = ({ showEdit = false }) => {
  const [date, setDate] = useState(new Date());
  const [highlightedDates, setHighlightedDates] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);



  useEffect(() => {
    // Process your JSON data to extract the date information and set it in the state
    const dates = jsonData.map(({ year, month, day }) => new Date(year, month - 1, day));
    setHighlightedDates(dates);
  }, []);

  const topRightCornerStyle = {
    position: 'absolute',
    padding: '20px',
    ...(showEdit ? { marginRight: '50px' } : { top: '50', right: '0' }),
  };

  const clickBlockStyle = {
    cursor: 'pointer',
    border: '1px solid #ddd',
    padding: '10px',
  };

  const centerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  };
  const modalStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  }
  const tableContainerStyle = {
    margin: '20px',
    
  };

  const tileClassName = ({ date }) => {
    if (highlightedDates.find((d) => d.toDateString() === date.toDateString())) {
      return 'highlighted-date';
    }
    return '';
  };


  const handleDateClick = (value) => {
    const clickedDate = value.toDateString();
    const events = jsonData.filter(
      (item) => new Date(item.year, item.month - 1, item.day).toDateString() === clickedDate
    );
    setSelectedEvent(events);
  };
  
  const handleDeleteEvent = (eventId, eventTitle) => {
    if (window.confirm(`Are you sure you want to delete this event "${eventTitle}"?`)) {
      // Add logic to delete the event (e.g., an API call or updating state)
      // Example: deleteEvent(eventId);
    }
  };
  const [modalOpen, setModalOpen] = useState(false);
  const [eventToEdit, setEventToEdit] = useState(null);


  // ... your existing handleDateClick function ...

  const handleEditEvent = (event) => {
    setEventToEdit(event);
    setModalOpen(true);
    if (event.department === 'ALL') {
      // If department is 'ALL', set all departments as selected
      const allDepartmentNames = departments.map(dep => dep.name);
      setSelectedDepartments(allDepartmentNames);
    } else {
      // Otherwise, set selected departments based on the event's department
      const selectedDepartmentsFromEvent = event.department ? event.department.split(',') : [];
      setSelectedDepartments(selectedDepartmentsFromEvent);
    }
  };


  const handleModalClose = () => {
    setModalOpen(false);
    setEventToEdit(null);
  };

  const handleSaveChanges = () => {
    if (window.confirm(`Are you sure you want to Update this event "${eventToEdit.activity}"?`)) {
      // Add logic to delete the event (e.g., an API call or updating state)
      // Example: deleteEvent(eventId);
    }
  };

  
  const [departments, setDepartments] = useState([
    
    { id: 1, name: 'CS' },
    { id: 2, name: 'IT' },
    { id: 3, name: 'AI/DS' },
    { id: 4, name: 'EXTC' },
    { id: 5, name: 'CHEMICAL' }
    
    // Add more departments as needed
  ]);
  
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  
  const handleDepartmentCheckboxChange = (e, department) => {
    const isChecked = e.target.checked;
  
    if (department === 'ALL') {
      const updatedDepartments = isChecked ? departments.map((dep) => dep.name) : [];
    setSelectedDepartments(updatedDepartments);
    } else {
      const updatedSelectedDepartments = isChecked
        ? [...selectedDepartments, department]
        : selectedDepartments.filter((dep) => dep !== department);
      setSelectedDepartments(updatedSelectedDepartments);
    }
  };
  const totalDepartments = departments.length;
const midIndex = Math.ceil(totalDepartments / 2);

const leftDepartments = departments.slice(0, midIndex);
const rightDepartments = departments.slice(midIndex);
  
  
  return (
    <div>
      <style>
        {`
          .highlighted-date {
            background-color: #000000;
            color: #fff;
            border-radius: 50%;
            padding: 6px;
            font-weight: bold;
          }

          .table-container {
            margin: 20px;
            
          }

          .event-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: -125px;
            
          }
          
          .event-table th,
          .event-table td {
            border: 1px solid #ddd;
            padding: 8px 25px; /* Adjust the padding as needed */
            text-align: center;
            px-4 py-2;
          }
          
          .event-table th, .event-table td {
            background-color: #f2f2f2;
            padding: 8px 25px;
            background-color: ${showEdit ? '#f2f2f2' : '#ffffff'};
          }

          .edit-btn,
          .delete-btn {
            background-color: #4caf50;
            /* Green */
            color: white;
            border: none;
            padding: 8px 25px;
        
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
            border-radius: 5px;
          }

          .delete-btn {
            background-color: #f44336;
            padding: 8px 25px;
            /* Red */
          }
        `}
      </style>

      {!selectedEvent ? (
        <div style={centerStyle}>
          <Calendar
            onChange={setDate}
            value={date}
            tileClassName={tileClassName}
            onClickDay={handleDateClick}
          />
        </div>
      ) : (
        <>
          <div style={topRightCornerStyle}>
            <div style={clickBlockStyle} className=" rounded-lg shadow-md" onClick={() => setSelectedEvent(null)}>
              Click to see the Calendar
            </div>
          </div>
          <div style={centerStyle}>
          {selectedEvent.length > 0 ? (
  <div style={tableContainerStyle}>
    <table className="event-table  rounded-lg shadow-md">
      <thead>
        <tr>
          <th>Batch PassOut Year</th>
          <th>Date</th>
          <th>Duration</th>
          <th>Activity</th>
          <th>Category</th>
          <th>Department</th>
          {showEdit && <th>Edit</th>}
          {showEdit && <th>Delete</th>}
        </tr>
      </thead>
      <tbody>
        {selectedEvent.map((event, index) => (
          <tr key={index}>
            <td className="border p-2 text-center">{event.batch_passout_year}</td>
            <td className="border p-2 text-center">{`${event.day}/${event.month}/${event.year}`}</td>            
            <td className="border p-2 text-center">{event.duration}</td>
            <td className="border p-2 text-center">{event.activity}</td>
            <td className="border p-2 text-center">{event.category}</td>
            <td className="border p-2 text-center">{event.department}</td>

            {showEdit && (
              <td>
                {/* Open the modal on the "Edit" button click */}
                <button className="edit-btn"  onClick={() => handleEditEvent(event)}>
                  Edit
                </button>
              </td>
            )}
            
            {showEdit && (
              <td>
                <button className="delete-btn" value={event.event_id} onClick={() => handleDeleteEvent(event.event_id,event.activity)}>Delete</button>
              </td>
            )}
          </tr>
        ))}
        
      </tbody>
    </table>
  </div>
) : (
  <p style={{ marginTop: '20px', fontSize: '50px', color: '#888' }}>
    No events yet scheduled.
  </p>
)}

          </div>
        </>
      )}
  {modalOpen && (
      <div className="modal-container" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100,
      }}>
        <div className="modal-box" style={{
         backgroundColor: '#fff',
         border: '1px solid #ccc',
         padding: '20px',
         borderRadius: '5px',
         boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
         height: '500px',
         width: '600px',
         display: 'flex', /* Added flexbox for vertical arrangement */
         flexDirection: 'column', /* Arrange content vertically */
         justifyContent: 'space-between', /* Distribute content with space */
         maxHeight: '80%', /* Prevent overflow if content is too long */
         overflowY: 'auto',
        }}>
          <div className="modal-header">
          <h2 className="flex justify-center items-center text-lg font-semibold">Edit Event</h2>
          </div>
          <div className="modal-content">
            {/* Display event attributes using eventToEdit, centered */}
            <div className="flex flex-col items-center justify-center mt-4">
              <div className="flex flex-row justify-between">
                {/* Left side inputs */}
                <div className="inputs-container w-1/2" style={{marginRight: '20px' }}>
                  <div className="input-group mb-4">
                    {/* ... first three input groups here ... */}
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="batch-passout-year">Batch Passout Year:</label>
                    <input type="text" id="batch-passout-year" value={eventToEdit.batch_passout_year} onChange={(e) => setEventToEdit({ ...eventToEdit, batch_passout_year: e.target.value })}
className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                  </div>
                    <div className="input-group mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="eventTitle">event Title:</label>
                    <input type="text" id="eventTitle" value={eventToEdit.activity} onChange={(e) => setEventToEdit({ ...eventToEdit, activity: e.target.value })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                  </div>
                  <div className="input-group mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="eventDate">event Date:</label>
                    <input type="date" id="eventDate" value={`${eventToEdit.year}-${eventToEdit.month}-${eventToEdit.day}`} onChange={(e) => {const [year, month, day] = e.target.value.split("-");
                      setEventToEdit({ ...eventToEdit, year, month, day });
                    }}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
/>

                  </div>
                </div>

                {/* Right side inputs */}
                <div className="inputs-container w-1/2">
                  <div className="input-group mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="eventDuration">event Duration:</label>
                    <input type="text" id="eventDuration" value={eventToEdit.duration} onChange={(e) => setEventToEdit({ ...eventToEdit, duration: e.target.value })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                  </div>
                  <div className="input-group mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="eventCategory">event Category:</label>
                    <select id="eventCategory" value={eventToEdit.category} onChange={(e) => setEventToEdit({ ...eventToEdit, category: e.target.value })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">

                      
                  <option
                  
                  value="College">College</option>
                      <option value="Placement">Placement</option>
                     
                    </select>
                  </div>
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="Department">Department:</label>
                  <div id="Department">
                  <div className="flex flex-col items-center justify-center mt-4">
                      <div className="flex flex-row justify-between">
                      <div className="flex">
    {/* Left column */}
    <div className="flex flex-col">
      {leftDepartments.map((department) => (
        <div key={department.id} className="flex items-center" style={{ marginLeft: '15px' }}>
          <input
            type="checkbox"
            id={department.name}
            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            checked={selectedDepartments.includes(department.name)}
            onChange={(e) => handleDepartmentCheckboxChange(e, department.name)}
          />
          <label htmlFor={department.name} className="ml-3 block text-sm font-medium text-gray-700">
            {department.name}
          </label>
        </div>
      ))}
    </div>

    {/* Right column */}
    <div className="flex flex-col ml-6">
      {rightDepartments.map((department) => (
        <div key={department.id} className="flex items-center" style={{ marginLeft: '15px' }}>
          <input
            type="checkbox"
            id={department.name}
            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            checked={selectedDepartments.includes(department.name)}
            onChange={(e) => handleDepartmentCheckboxChange(e, department.name)}
          />
          <label htmlFor={department.name} className="ml-3 block text-sm font-medium text-gray-700">
            {department.name}
          </label>
        </div>
      ))}
    </div>
  </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              
          </div>
          <div className="modal-footer" style={{
            display: 'flex',
            justifyContent: 'center', /* Center buttons horizontally */
            alignItems: 'center', /* Center buttons vertically within footer */
          }}>
            <button className="save-btn" style={{
              backgroundColor: 'green',
              color: 'white', /* Ensure text is readable on green background */
              border: 'none', /* Remove default border */
              padding: '10px 20px', /* Adjust padding as needed */
              borderRadius: '5px', /* Add rounded corners */
              cursor: 'pointer', /* Indicate interactivity */
              marginRight: '20px' 
            }} onClick={handleSaveChanges}>
              Save Changes
            </button>
            <button className="cancel-btn" style={{
              backgroundColor: 'red',
              color: 'white', /* Ensure text is readable on red background */
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
            }} onClick={handleModalClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
      
    )}    
    </div>
  );
};

export default CalendarComponent;
