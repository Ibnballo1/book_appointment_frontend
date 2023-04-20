import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import fetchRoom from '../redux/room/fetchRoom';
import '../home.css';
import Navigate from './Navigation';

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
    <div className="container">
      <Navigate />
      { error && error}
      <div className="home">
        <div className="header-div">
          <h1>Delete Rooms</h1>
        </div>
        <div className="rooms row" style={{ marginTop: '40px' }}>
          {roomData.map((room) => (
            <div key={room.id} className="room-page col-md-4 col-lg-3 col-sm-6 text-center align-center">

              <div className="card">
                <img className="card-img-top" src={room.photo} alt="Room Pic" />
                <div className="card-body">
                  <h5 className="card-title">{room.name}</h5>
                  <p className="card-text">{room.description}</p>
                  <button type="button" className="btn btn-outline-danger" onClick={() => handleDeleteRoom(room.id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex flex-row arrowCont">
        <span className="arr" />
        <Link to="/">Back</Link>
      </div>
    </div>
  );
};
export default Room;
