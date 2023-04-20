import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import fetchRoom from '../redux/room/fetchRoom';
import Navigate from './Navigation';

const Room = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRoom());
  }, [dispatch]);
  const roomData = useSelector((state) => state.room.data);
  const navigate = useNavigate();
  const signOut = () => {
    localStorage.removeItem('token');
    navigate('/signin');
  };

  return (
    <div>
      <Navigate />
      <div className="header-div">
        <h1>Rooms</h1>
        <p>Please Select a room below</p>
      </div>
      <div className="rooms">
        {roomData.map((room) => (
          <div key={room.id} className="room-page">
            <Link to={`/rooms/${room.id}`}>
              {/* Room ID:
              {room.id} */}
              <h3 className="room-title">{room.name}</h3>
              <div>
                <img src={room.photo} alt="Room Pic" className="room-img" />
              </div>
              <p className="room-info">{room.description}</p>
              {/* {room.city} */}
              {/* {room.price} */}
            </Link>
          </div>
        ))}
      </div>
      <button onClick={signOut} type="button">
        SignOut
      </button>
    </div>
  );
};
export default Room;
