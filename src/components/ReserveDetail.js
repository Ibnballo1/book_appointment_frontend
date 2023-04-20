/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import fetchRoom from '../redux/room/fetchRoom';

const ReserveDetail = ({ id, name }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRoom());
  }, [dispatch]);

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
      reserveRoom(id, startDate, endDate).then(() => {
        window.location.href = '/reservations';
      });
    }
  };

  return (
    <>
      {error && error}
      <form onSubmit={handleSubmit} className="reserve-form-container">
        <label htmlFor="room-id">
          <span className="reserve-label">Room ID:</span>
          <select id="room-id" className="reserve-form-input">
            <option value={id}>{name}</option>
          </select>
        </label>
        <br />
        <label htmlFor="start-date">
          <span className="reserve-label">Start Date:</span>
          <input id="start-date" className="reserve-form-input" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </label>
        <br />
        <label htmlFor="end-date">
          <span className="reserve-label">End Date:</span>
          <input id="end-date" className="reserve-form-input" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </label>
        <br />
        <button type="submit" className="add-btn">Reserve Room</button>
        <div className="d-flex flex-row arrowCont mt-3">
          <span className="arr" />
          <Link to="/">Back</Link>
        </div>
      </form>

    </>

  );
};

export default ReserveDetail;
