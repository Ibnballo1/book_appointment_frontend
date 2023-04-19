import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import fetchRoom from '../redux/room/fetchRoom';

const Reserve = () => {
  const [roomId, setRoomId] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRoom());
  }, [dispatch]);
  const roomData = useSelector((state) => state.room.data);

  const reserveRoom = async (roomId, startDate, endDate) => {
    const url = 'http://127.0.0.1:3000/api/v1/reservations';
    const data = { room_id: roomId, start_date: startDate, end_date: endDate };
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    });
    return response;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (startDate === '' || endDate === '') {
      setError('date field should not be blank');
    } else {
      reserveRoom(roomId, startDate, endDate).then(() => {
        window.location.href = '/reservations';
      });
    }
  };

  return (
    <>
      {error && error}
      <form onSubmit={handleSubmit}>
        <label htmlFor="room-id">
          Room ID:
          <select id="room-id" onChange={(e) => setRoomId(e.target.value)} value={roomId}>
            <option value="">Select a room</option>
            {
            roomData.map((room) => (
              <option key={room.id} value={room.id}>{room.name}</option>
            ))
          }
          </select>
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
        <div><Link to="/">Back</Link></div>
      </form>
    </>

  );
};

export default Reserve;
