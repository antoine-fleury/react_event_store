import React, { useState } from 'react'

const EventForm = ({addEvent}) => {
  const [title, setTitle] = useState('')
  const [timestamp, setTimestamp] = useState('')

  // When submit button is pressed
  const submit = event => {
    event.preventDefault() // prevent page reload
    if (!title || !timestamp) return // stof function if title or timestamp is null
      addEvent({ title, timestamp }) // add event to list
      setTitle('')
      setTimestamp('')
  };

  // Form to add an event
  return (
    <div>
      <h2>Add an event:</h2>
      <form onSubmit={submit}>
        <input type="text" placeholder="Event name" value={title} onChange={event => setTitle(event.target.value)}/>
        <input type="datetime-local" value={timestamp} onChange={event => setTimestamp(event.target.value)}/>
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
};

export default EventForm