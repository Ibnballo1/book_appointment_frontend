import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import fetchRoom from '../redux/room/fetchRoom';

const Room = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRoom());
  }, []);
  const roomData = useSelector((state) => state.room.data);

  return (
    <div>
      <h1>
        Rooms
      </h1>
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
    </div>
  );
};

export default Room;
