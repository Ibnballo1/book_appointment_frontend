import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Reserve = () => {
  const [roomId, setRoomId] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const navigate = useNavigate();

  const reserveRoom = async (roomId, startDate, endDate) => {
    const url = 'http://127.0.0.1:3000/api/v1/reservations';
    const data = { room_id: roomId, start_date: startDate, end_date: endDate };
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
    await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    });
    navigate('/reservations');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    reserveRoom(roomId, startDate, endDate).then(() => {
      window.location.href = '/reservations';
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
    </form>
  );
};

export default Reserve;
