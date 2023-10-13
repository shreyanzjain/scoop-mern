import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function AdminCalendar() {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventTitle, setEventTitle] = useState('');
  const [eventDuration, setEventDuration] = useState('');
  const [category, setCategory] = useState('College');
  const [events, setEvents] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null); // To track which event is being edited
  const [editEventTitle, setEditEventTitle] = useState('');
  const [editEventDuration, setEditEventDuration] = useState('');
  const [activeButton, setActiveButton] = useState('Add'); // Add is the default active button

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

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const toggleButton = (button) => {
    setActiveButton(button);
  };

  const scheduleEvent = () => {
    if (!selectedDate) {
      // Check if a date is selected, and if not, show an alert
      alert('Please select a date before scheduling an event.');
      return;
    }
    else if (!eventTitle) {
      // Check if a date is selected, and if not, show an alert
      alert('Please write a title before scheduling an event.');
      return;
    }
    else if (!eventDuration) {
      // Check if a date is selected, and if not, show an alert
      alert('Please write the duration of the event before scheduling an event.');
      return;
    }

    if (eventTitle && eventDuration) {
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
    }
  };
  // Function to toggle the modal
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
  };

  const handleUpdateEvent = () => {
    if (editingIndex !== null) {
      const updatedEvents = [...events];
    const event = updatedEvents[editingIndex];
    event.title = editEventTitle;
    event.duration = parseInt(editEventDuration, 10);
    // Recalculate the end date based on the new duration
    event.endDate = new Date(event.startDate);
    event.endDate.setDate(event.endDate.getDate() + event.duration);
    setEvents(updatedEvents);
    setEditingIndex(null);
    // Clear the edit form inputs
    setEditEventTitle('');
    setEditEventDuration('');
    }
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    // Clear the edit form inputs
    setEditEventTitle('');
    setEditEventDuration('');
  };

  return (
    <div className="flex justify-center items-center min-h-screen absolute top-4 w-full">
      <div className="text-center">
        <h1 className="text-3xl font-semibold mb-4">Admin Calendar</h1>

        {/* Navbar with Add and Modify buttons */}
        <div className="mb-4">
          <button
            onClick={() => toggleButton('Add')}
            className={`mr-2 ${
              activeButton === 'Add' ? 'bg-blue-500' : 'bg-gray-400'
            } hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md`}
          >
            Add
          </button>
          <button
            onClick={() => toggleButton('Modify')}
            className={`${
              activeButton === 'Modify' ? 'bg-blue-500' : 'bg-gray-400'
            } hover-bg-blue-600 text-white font-semibold py-2 px-4 rounded-md`}
          >
            Modify
          </button>
        </div>

        {/* Calendar and Event Scheduling Section (Only visible when "Add" is active) */}
        {activeButton === 'Add' && (
          <div className="mb-4">
            <div className="mx-auto w-72">
              <Calendar onChange={handleDateChange} value={date} onClickDay={handleDateClick} />
              {selectedDate && (
                <p className="text-lg mt-4">Selected Date: {selectedDate.toDateString()}</p>
              )}
            </div>

            {/* Event Scheduling Section */}
            <div className="mt-4">
              <input
                type="text"
                placeholder="Enter event title"
                className="border p-2 w-64 mx-auto rounded-md"
                value={eventTitle}
                onChange={handleEventTitleChange}
              />
              <input
                type="number"
                placeholder="Enter event duration (in days)"
                className="border p-2 w-64 mx-auto rounded-md mt-2"
                value={eventDuration}
                onChange={handleEventDurationChange}
              />
              <select
                className="border p-2 w-64 mx-auto rounded-md mt-2"
                value={category}
                onChange={handleCategoryChange}
              >
                <option value="College">College</option>
                <option value="Placement">Placement</option>
              </select>
              <button
                onClick={scheduleEvent}
                className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
              >
                Schedule Event
              </button>
            </div>
          </div>
        )}
        {/* Modal for Editing Event */}
        {editingIndex !== null && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Edit Event</h2>
              <input
                type="text"
                placeholder="Edit event title"
                className="border p-2 w-64 mx-auto rounded-md"
                value={editEventTitle}
                onChange={(e) => setEditEventTitle(e.target.value)}
              />
              <input
                type="number"
                placeholder="Edit event duration (in days)"
                className="border p-2 w-64 mx-auto rounded-md mt-2"
                value={editEventDuration}
                onChange={(e) => setEditEventDuration(e.target.value)}
              />
              <button
                onClick={handleUpdateEvent}
                className="mt-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md"
              >
                Update
              </button>
              <button
                onClick={handleCancelEdit}
                className="mt-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md ml-2"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
        {activeButton === 'Modify' && (
  <table className="w-full mt-4 border">
    <thead>
      <tr className="bg-blue-100">
        <th className="border p-2">No.</th>
        <th className="border p-2">Description</th>
        <th className="border p-2">Category</th>
        <th className="border p-2">Edit</th>
        <th className="border p-2">Delete</th>
      </tr>
    </thead>
    <tbody>
      {events.map((event, index) => (
        <tr key={index}>
          <td className="border p-2">{index + 1}</td>
          <td className="border p-2 text-center">
            Date: {event.startDate.toDateString()}, Start of {event.title}<br />
            Date: {event.endDate.toDateString()}, End of {event.title}
          </td>
          <td className="border p-2 text-center">
            {event.category}
          </td>
          <td className="border p-2">
            <button
              onClick={() => handleEditEvent(index)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-1 px-2 rounded-md"
            >
              Edit
            </button>
          </td>
          <td className="border p-2">
            <button
              onClick={() => handleDeleteEvent(index)}
              className="bg-red-500 hover-bg-red-600 text-white font-semibold py-1 px-2 rounded-md"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
)}




      </div>
    </div>
  );
  
}

export default AdminCalendar;
