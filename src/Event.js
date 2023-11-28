import React from 'react'

// list all events in the list + delete button
const Event = ({ event, deleteEvent }) => (
    <div>
        {event.title} - {event.timestamp} 
        <button onClick={() => deleteEvent(event.id)}>Delete</button>
    </div>
);

export default Event