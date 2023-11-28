import React, { useState } from 'react';
import EventList from './EventList';
import EventForm from './EventForm';

const App = () => {
  const [events, setEvents] = useState([]);

  // Add event 
  const addEvent = event => {
    event.id = Date.now()   // to create an unique ID for the event base on the current date
    setEvents([...events, event]) // set event in events table
  };

  // Delete event
  const deleteEvent = id => {
    const updatedEvents = events.filter(event => event.id !== id) // return events table without event
    setEvents(updatedEvents)
  };

  return (
    <div>
      <h1>Datetime Event Store</h1>
      <EventForm addEvent={addEvent} />
      <EventList events={events} deleteEvent={deleteEvent} />
    </div>
  );
};

export default App;