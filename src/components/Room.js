import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import fetchRoom from '../redux/room/fetchRoom';

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
      <h1>Rooms</h1>
      <nav>
        <Link to="/add_room">Add Room</Link>
      </nav>
      <div>
        {roomData.map((room) => (
          <div key={room.id}>
            <Link to={`/rooms/${room.id}`}>
              {room.name}
              {room.description}
              {room.id}
              {room.photo}
              {room.city}
              {room.price}
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
