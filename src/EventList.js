import React from 'react';
import Event from './Event';

const EventList = ({ events, deleteEvent }) => (
  <div>
    <h2>Event list:</h2>
    <ul>
    {events.map(event => (
      <li><Event key={event.id} event={event} deleteEvent={deleteEvent} /></li>
    ))}
    </ul>
  </div>
);

export default EventList;