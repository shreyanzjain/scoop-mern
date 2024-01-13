import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import jsonData from './calendardata.json';
import './CustomCalendar.css';

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
    flexDirection: 'column',  // Change to column direction
    justifyContent: 'center', // Align items to the top
    alignItems: 'center',
    minHeight: '70vh', // Adjust the height as needed
  };

  const calendarStyle = {
    width: '800px', // Adjust the width to make the calendar larger
    height: '800px', // Adjust the height to make the calendar larger
  };

  const modalStyle = {
    backgroundColor: '#D3D3D3',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '600px',
    height: '450px',
    border: '1px solid #000',
    color: '#000',
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
    const events = jsonData.filter((item) => new Date(item.year, item.month - 1, item.day).toDateString() === clickedDate);
    setSelectedEvent(events);
  };
  

  const closeModal = () => {
    setSelectedEvent(null);
  };

  const blurredContainerStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the alpha value for the desired level of transparency
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backdropFilter: selectedEvent ? 'blur(5px)' : 'none', // Apply blur when modal is open
    transition: 'backdrop-filter 0.3s ease', // Add transition for smooth effect
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
        <div className="blurred-container" style={blurredContainerStyle}>
          <div className="modal" style={modalStyle}>
            <span className="close" style={closeButtonStyle} onClick={closeModal}>
              &times;
            </span>
            <div className="modal-content" style={modalContentStyle}>
              {selectedEvent.length > 0 ? (
                <table className="w-full mt-4 border">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="border p-2">Date</th>
                      <th className="border p-2">Activity</th>
                      <th className="border p-2">Category</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedEvent.map((event, index) => (
                      <tr key={index}>
                        <td className="border p-2 text-center">{`${event.day}/${event.month}/${event.year}`}</td>
                        <td className="border p-2 text-center">{event.activity}</td>
                        <td className="border p-2 text-center">{event.catgeory}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>No events on this date.</p>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default CalendarComponent;
