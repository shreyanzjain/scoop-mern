// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

// function AdminCalendar() {
//   const [date, setDate] = useState(new Date());
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [eventTitle, setEventTitle] = useState('');
//   const [eventDuration, setEventDuration] = useState('');
//   const [category, setCategory] = useState('College');
//   const [events, setEvents] = useState([]);
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [editEventTitle, setEditEventTitle] = useState('');
//   const [editEventDuration, setEditEventDuration] = useState('');
//   const [activeButton, setActiveButton] = useState('Add');
//   const [editCategory, setEditCategory] = useState('College');
//   const [editStartDate, setEditStartDate] = useState(null);

//   const handleCategoryChangeEdit = (e) => {
//     setEditCategory(e.target.value);
//   };

//   const handleStartDateChangeEdit = (newDate) => {
//     setEditStartDate(newDate);
//   };

//   const handleDateChange = (newDate) => {
//     setDate(newDate);
//   };

//   const handleDateClick = (value) => {
//     setSelectedDate(value);
//   };

//   const handleEventTitleChange = (e) => {
//     setEventTitle(e.target.value);
//   };

//   const handleEventDurationChange = (e) => {
//     setEventDuration(e.target.value);
//   };

//   const handleCategoryChange = (e) => {
//     setCategory(e.target.value);
//   };

//   const toggleButton = (button) => {
//     setActiveButton(button);
//   };

//   const scheduleEvent = () => {
//     if (!selectedDate || !eventTitle || !eventDuration) {
//       alert('Please fill in all fields before scheduling an event.');
//       return;
//     }

//     const startDate = new Date(selectedDate);
//     const endDate = new Date(selectedDate);
//     endDate.setDate(endDate.getDate() + parseInt(eventDuration, 10));

//     const newEvent = {
//       startDate,
//       endDate,
//       title: eventTitle,
//       duration: parseInt(eventDuration, 10),
//       category,
//     };

//     setEvents([...events, newEvent]);
//     setSelectedDate(null);
//     setEventTitle('');
//     setEventDuration('');
//     setCategory('College');
//   };

//   const toggleModal = (index) => {
//     setEditingIndex(index);
//   };

//   const handleDeleteEvent = (index) => {
//     const updatedEvents = [...events];
//     updatedEvents.splice(index, 1);
//     setEvents(updatedEvents);
//   };

//   const handleEditEvent = (index) => {
//     setEditingIndex(index);
//     const event = events[index];
//     setEditEventTitle(event.title);
//     setEditEventDuration(event.duration.toString());
//     setEditStartDate(new Date(event.startDate));
//     setEditCategory(event.category);
//   };

//   const handleUpdateEvent = () => {
//     if (editingIndex !== null) {
//       const updatedEvents = [...events];
//       const event = updatedEvents[editingIndex];
//       event.title = editEventTitle;
//       event.duration = parseInt(editEventDuration, 10);
//       event.startDate = new Date(editStartDate);
//       event.endDate = new Date(editStartDate);
//       event.endDate.setDate(event.endDate.getDate() + event.duration);
//       event.category = editCategory;

//       setEvents(updatedEvents);
//       setEditingIndex(null);
//       setEditEventTitle('');
//       setEditEventDuration('');
//       setEditStartDate(null);
//     }
//   };

//   const handleCancelEdit = () => {
//     setEditingIndex(null);
//     setEditEventTitle('');
//     setEditEventDuration('');
//   };

//   return (
  
//     <div className="container w-5/6 bg-whitesmoke bg-opacity-30 m-2">
//       <div className="container h-5/6">
//         <div className="flex bg-whitesmoke items-start">
//           <div className="w-1/2 pt-2 px-2">
//             <h1 className="text-3xl font-semibold mb-4">Admin Calendar</h1>

//             <div className="mb-4">
//               <button
//                 onClick={() => toggleButton('Add')}
//                 className={`mr-2 ${
//                   activeButton === 'Add' ? 'bg-blue-500' : 'bg-gray-400'
//                 } hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md`}
//               >
//                 Add
//               </button>
//               <button
//                 onClick={() => toggleButton('Modify')}
//                 className={`${
//                   activeButton === 'Modify' ? 'bg-blue-500' : 'bg-gray-400'
//                 } hover-bg-blue-600 text-white font-semibold py-2 px-4 rounded-md`}
//               >
//                 Modify
//               </button>
//             </div>

//             {activeButton === 'Add' && (
//               <div className="mb-4">
//                 <div className="mx-auto w-72">
//                   <Calendar
//                     onChange={handleDateChange}
//                     value={date}
//                     onClickDay={handleDateClick}
//                   />
//                   {selectedDate && (
//                     <p className="text-lg mt-4">
//                       Selected Date: {selectedDate.toDateString()}
//                     </p>
//                   )}
//                 </div>

//                 <div className="mt-4">
//                   <input
//                     type="text"
//                     placeholder="Enter event title"
//                     className="border p-2 w-64 mx-auto rounded-md"
//                     value={eventTitle}
//                     onChange={handleEventTitleChange}
//                   />
//                   <input
//                     type="number"
//                     placeholder="Enter event duration (in days)"
//                     className="border p-2 w-64 mx-auto rounded-md mt-2"
//                     value={eventDuration}
//                     onChange={handleEventDurationChange}
//                   />

//                   <select
//                     className="border p-2 w-64 mx-auto rounded-md mt-2"
//                     value={category}
//                     onChange={handleCategoryChange}
//                   >
//                     <option value="College">College</option>
//                     <option value="Placement">Placement</option>
//                   </select>
//                   <button
//                     onClick={scheduleEvent}
//                     className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
//                   >
//                     Schedule Event
//                   </button>
//                 </div>
//               </div>
//             )}

//             {activeButton === 'Modify' && editingIndex !== null && (
//               <div className="modal-overlay">
//                 <div className="modal-content">
//                   <input
//                     type="text"
//                     placeholder="Edit event title"
//                     className="border p-2 w-64 mx-auto rounded-md"
//                     value={editEventTitle}
//                     onChange={(e) => setEditEventTitle(e.target.value)}
//                   />
//                   <input
//                     type="number"
//                     placeholder="Edit event duration (in days)"
//                     className="border p-2 w-64 mx-auto rounded-md mt-2"
//                     value={editEventDuration}
//                     onChange={(e) => setEditEventDuration(e.target.value)}
//                   />
//                   <input
//                     type="date"
//                     placeholder="Edit start date"
//                     className="border p-2 w-64 mx-auto rounded-md mt-2"
//                     value={editStartDate}
//                     onChange={(e) => handleStartDateChangeEdit(e.target.value)}
//                   />
//                   <select
//                     className="border p-2 w-64 mx-auto rounded-md mt-2"
//                     value={editCategory}
//                     onChange={handleCategoryChangeEdit}
//                   >
//                     <option value="College">College</option>
//                     <option value="Placement">Placement</option>
//                   </select>
//                   <button
//                     onClick={handleUpdateEvent}
//                     className="mt-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md"
//                   >
//                     Update
//                   </button>
//                   <button
//                     onClick={handleCancelEdit}
//                     className="mt-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md ml-2"
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </div>
//             )}

//             {activeButton === 'Modify' && (
//               <table className="w-full mt-4 border">
//                 <thead>
//                   <tr className="bg-blue-100">
//                     <th className="border p-2">No.</th>
//                     <th className="border p-2">Date</th>
//                     <th className="border p-2">Description</th>
//                     <th className="border p-2">Category</th>
//                     <th className="border p-2">Edit</th>
//                     <th className="border p-2">Delete</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {events.map((event, index) => (
//                     <tr key={index}>
//                       <td className="border p-2 px-4 py-2 ">{index + 1}</td>
//                       <td className="border p-2 px-4 py-2  text-center">
//                         {event.startDate.toDateString()}<br />
//                         {event.endDate.toDateString()}<br />
//                       </td>
//                       <td className="border p-2 px-4 py-2  text-center">
//                         Start of {event.title}<br />
//                         End of {event.title}
//                       </td>
//                       <td className="border p-2 px-4 py-2  text-center">
//                         {event.category}
//                       </td>
//                       <td className="border p-2 px-4 py-2 ">
//                         <button
//                           onClick={() => handleEditEvent(index)}
//                           className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-1 px-2 rounded-md"
//                         >
//                           Edit
//                         </button>
//                       </td>
//                       <td className="border p-2 px-4 py-2 ">
//                         <button
//                           onClick={() => handleDeleteEvent(index)}
//                           className="bg-red-500 hover-bg-red-600 text-white font-semibold py-1 px-2 rounded-md"
//                         >
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminCalendar;
import React, { useState } from 'react';
import Calendar from './Calendar'; // Import your Calendar component

const AdminCalendar = () => {
  const [activeNavItem, setActiveNavItem] = useState('schedule');
  const [eventTitle, setEventTitle] = useState('');
  const [eventDuration, setEventDuration] = useState('');
  const [category, setCategory] = useState('College');
  const [selectedDate, setSelectedDate] = useState(null);
  const [date, setDate] = useState(new Date());
  const [activeButton, setActiveButton] = useState('Add');
  const [events, setEvents] = useState([]);
  const [editEventTitle, setEditEventTitle] = useState('');
  const [editEventDuration, setEditEventDuration] = useState('');
  const [editCategory, setEditCategory] = useState('College');
  const [editStartDate, setEditStartDate] = useState(null);
  const [editbatchYear, setbatchYear] = useState(null);
  
  
  const handleCategoryChangeEdit = (e) => {
    setEditCategory(e.target.value);
  };

  const handleStartDateChangeEdit = (newDate) => {
    setEditStartDate(newDate);
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleDateClick = (value) => {
    setSelectedDate(value);
  };

  const handleEventTitleChange = (e) => {
    setEventTitle(e.target.value);
  };

  const handleEventDurationChange = (e) => {
    setEventDuration(e.target.value);
  };
  const handleBatchPassOutChange = (e) => {
    setbatchYear(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const toggleButton = (button) => {
    setActiveButton(button);
  };

  const scheduleEvent = () => {
    if (!selectedDate || !eventTitle || !eventDuration) {
      alert('Please fill in all fields before scheduling an event.');
      return;
    }

    const startDate = new Date(selectedDate);
    const endDate = new Date(selectedDate);
    endDate.setDate(endDate.getDate() + parseInt(eventDuration, 10));

    const newEvent = {
      startDate,
      endDate,
      title: eventTitle,
      duration: parseInt(eventDuration, 10),
      category,
    };

    setEvents([...events, newEvent]);
    setSelectedDate(null);
    setEventTitle('');
    setEventDuration('');
    setCategory('College');
  };

  const toggleModal = (index) => {
    setEditingIndex(index);
  };

  const handleDeleteEvent = (index) => {
    const updatedEvents = [...events];
    updatedEvents.splice(index, 1);
    setEvents(updatedEvents);
  };

  const handleEditEvent = (index) => {
    setEditingIndex(index);
    const event = events[index];
    setEditEventTitle(event.title);
    setEditEventDuration(event.duration.toString());
    setEditStartDate(new Date(event.startDate));
    setEditCategory(event.category);
  };

  const handleUpdateEvent = () => {
    if (editingIndex !== null) {
      const updatedEvents = [...events];
      const event = updatedEvents[editingIndex];
      event.title = editEventTitle;
      event.duration = parseInt(editEventDuration, 10);
      event.startDate = new Date(editStartDate);
      event.endDate = new Date(editStartDate);
      event.endDate.setDate(event.endDate.getDate() + event.duration);
      event.category = editCategory;

      setEvents(updatedEvents);
      setEditingIndex(null);
      setEditEventTitle('');
      setEditEventDuration('');
      setEditStartDate(null);
    }
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    setEditEventTitle('');
    setEditEventDuration('');
  };
  const [departments, setDepartments] = useState([
    { id: 1, name: 'CS' },
    { id: 2, name: 'IT' },
    { id: 3, name: 'AI/DS' },
    { id: 4, name: 'EXTC' },
    { id: 5, name: 'CHEMICAL' }
    // Add more departments as needed
  ]);

  // State to hold selected departments
  const [selectedDepartments, setSelectedDepartments] = useState([]);

  // Handler for department change
  const handleDepartmentChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    setSelectedDepartments(selectedOptions);
  };

  // New state for date
  const [selectedDatePicker, setSelectedDatePicker] = useState('');

  // Handler for date change
  const handleDatePickerChange = (e) => {
    setSelectedDatePicker(e.target.value); // Fix the function to use setSelectedDatePicker
  };
  
  const [isFormVisible, setIsFormVisible] = useState(true);

  // Function to toggle the visibility of the schedule form
  
  const [isH1Small, setIsH1Small] = useState(false);

  // Function to toggle the size of the h1 tag
  const toggleH1Size = () => {
    setIsH1Small(!isH1Small);
  };

  // Function to toggle the visibility of the schedule form
  const toggleMinimize = () => {
    setIsFormVisible(!isFormVisible);
    toggleH1Size(); // Toggle the size of h1 when form visibility changes
  };

  return (
    <div className="flex bg-whitesmoke h-screen lg:text-md sm:text-base">
      
      {/* Left side with Calendar */}
      <div className="flex-shrink-0 flex-glow-0 p-4 h-full bg-whitesmoke" style={{ width: '1050px' }}>
        <Calendar showEdit={true} />
      </div>

      {/* Right side container */}
       <div className={`flex-shrink-0 flex-glow-0 p-4 bg-whitesmoke`} style={{ position: 'relative', right: 0, top: 0, bottom: 0, width: '340px' }}>
      
  {/* Schedule Event Form */}
        {/* Schedule Event Form */}
        <div className="border border-gray-400 p-4 ">
          <div className="flex justify-end">
            <div className="text-sm font-bold cursor-pointer" onClick={toggleMinimize}>
            <img
            src={isFormVisible ? "https://img.icons8.com/material-outlined/24/000000/chevron-up.png" : "https://img.icons8.com/material-outlined/24/000000/chevron-down.png"}
              alt="Family Icon"
              className="cursor-pointer" // Add any additional styling if needed
              onClick={toggleMinimize}
            />
            </div>
          </div>
          <h1 className={`text-3xl font-semibold mr-12 ${isH1Small ? 'text-m' : ''}`}>
            Schedule Event</h1>
          {isFormVisible && (<form>
            <div className="mb-4">
              <label htmlFor="BatchPassOut" className="block text-sm font-medium text-gray-700">
                Batch PassOut Year
              </label>
              <input
                type="number"
                id="BatchPassOut"
                name="Batch PassOut Year"
                value={editbatchYear}
                onChange={handleBatchPassOutChange}
                className="border p-2 w-64 mx-auto rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="eventTitle" className="block text-sm font-medium text-gray-700">
                Event Title
              </label>
              <input
                type="text"
                id="eventTitle"
                name="eventTitle"
                value={eventTitle}
                onChange={handleEventTitleChange}
                className="border p-2 w-64 mx-auto rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={selectedDatePicker}
                onChange={handleDatePickerChange}
                className="border p-2 w-64 mx-auto rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="eventDuration" className="block text-sm font-medium text-gray-700">
                Event Duration (in days)
              </label>
              <input
                type="number"
                id="eventDuration"
                name="eventDuration"
                value={eventDuration}
                onChange={handleEventDurationChange}
                className="border p-2 w-64 mx-auto rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={category}
                onChange={handleDepartmentChange}
                className="border p-2 w-64 mx-auto rounded-md"
              >
                <option value="College">College</option>
                <option value="Placement">Placement</option>
              </select>
            </div>
            
            <div className="mb-4">
            <label htmlFor="department" className="block text-sm font-medium text-gray-700">
              Department
            </label>
            <div id="Department">
                  <div className="flex flex-col items-center justify-center mt-4">
                      <div className="flex flex-row justify-between">
                        <div className="inputs-container">
                          <div className="flex flex-col space-x-4 space-y-4">
                            
                                         <div className="flex items-center" style={{marginLeft: '15px'}}>
                                            <input type="checkbox" id="CS" className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                                            <label htmlFor="CS" className="ml-3 block text-sm font-medium text-gray-700">CS</label>
                                          </div>
                                          <div className="flex items-center">
                                            <input type="checkbox" id="IT" className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                                            <label htmlFor="IT" className="ml-3 block text-sm font-medium text-gray-700">IT</label>
                                          </div>
                                          <div className="flex items-center">
                                            <input type="checkbox" id="AI/DS" className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                                            <label htmlFor="AI/DS" className="ml-3 block text-sm font-medium text-gray-700">AI/DS</label>
                                          </div>
                          </div>
                        </div>
                        <div className="inputs-container">
                          <div className="flex flex-col space-x-4 space-y-4">
                            {/* Checkbox groups here */}
                            <div className="flex items-center" style={{marginLeft: '15px'}}>
                                            <input type="checkbox" id="EXTC" className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                                            <label htmlFor="EXTC" className="ml-3 block text-sm font-medium text-gray-700">EXTC</label>
                                          </div>
                            <div className="flex items-center">
                                            <input type="checkbox" id="CHEMICAL" className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                                            <label htmlFor="CHEMICAL" className="ml-3 block text-sm font-medium text-gray-700">CHEMCIAL</label>
                                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
          </div>
            {/* Add other form elements and event handling as needed */}
            <button
              type="submit"
              className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
            >
              Schedule Event
            </button>
          </form>)}
        </div>
        
      </div>
    </div>
  );
};

export default AdminCalendar;
