import React, { useState } from 'react';

const Reserve = () => {
  const [roomId, setRoomId] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [message, setMessage] = useState('');

  const reserveRoom = async (roomId, startDate, endDate) => {
    const url = 'http://127.0.0.1:3000/api/v1/reservations';
    const data = { roomId, startDate, endDate };
    const headers = { 'Content-Type': 'application/json' };
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    });
    const json = await response.json();
    return json;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    reserveRoom(roomId, startDate, endDate).then((response) => {
      setMessage(response.success ? 'Reservation created successfully!' : response.error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="room-id">
        Room ID:
        <input id="room-id" type="text" value={roomId} onChange={(e) => setRoomId(e.target.value)} />
      </label>
      <br />
      <label htmlFor="start-date">
        Start Date:
        <input id="start-date" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      </label>
      <br />
      <label htmlFor="end-date">
        End Date:
        <input id="end-date" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </label>
      <br />
      <button type="submit">Reserve Room</button>
      {message && <div>{message}</div>}
    </form>
  );
};

export default Reserve;
