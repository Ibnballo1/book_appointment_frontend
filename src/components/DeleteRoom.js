import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import fetchRoom from '../redux/room/fetchRoom';

const Room = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRoom());
  }, [dispatch]);
  const roomData = useSelector((state) => state.room.data);
  const [error, setError] = useState(null);
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  };

  const handleDeleteRoom = async (id) => {
    await fetch(`http://127.0.0.1:3000/api/v1/rooms/${id}`, {
      method: 'DELETE',
      headers,
    })
      .then((response) => {
        if (response.status === 401) {
          setError(response.statusText);
        } else {
          window.location.href = '/';
        }
      });
  };

  return (
    <div>
      { error && error}
      <h1>Delete Room</h1>
      <div>
        {roomData.map((room) => (
          <div key={room.id}>
            <p>{room.name}</p>
            <img src={room.photo} alt={room.name} />
            <button type="button" onClick={() => handleDeleteRoom(room.id)}>Delete</button>
          </div>
        ))}
      </div>
      <div><Link to="/">Back</Link></div>
    </div>
  );
};
export default Room;
