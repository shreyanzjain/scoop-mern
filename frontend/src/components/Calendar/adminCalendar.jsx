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

  return (
    <div className="flex justify-center items-center min-h-screen absolute top-4 w-full">
      <div className="text-center">
        <h1 className="text-3xl font-semibold mb-4">Admin Calendar</h1>
        
        {/* Calendar */}
        <div className="mb-4 mx-auto w-72">
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
        
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Scheduled Events</h2>
          <ul className="list-disc mt-2">
            {events.map((event, index) => (
              <li key={index} className="text-lg">
                {`Date: ${event.startDate.toDateString()}, Event Title: "Start of ${event.title}", Category: ${event.category}`}
                <p></p>
                {`Date: ${event.endDate.toDateString()}, Event Title: "End of ${event.title}", Category: ${event.category}`}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminCalendar;
