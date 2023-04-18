import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import fetchRoom from '../redux/room/fetchRoom';
import Reserve from './Reserve';

const RoomDetails = () => {
  const { id } = useParams();
  const [showReserve, setShowReserve] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRoom());
  }, [dispatch]);
  const roomId = parseInt(id, 10);
  const roomData = useSelector((state) => state.room.data);
  const roomDetail = (roomData.filter((room) => room.id === roomId))[0];

  const handleReserveClick = () => {
    setShowReserve(true);
  };

  return (
    <div>
      <div>
        <h1>{roomDetail.name}</h1>
        <img src={roomDetail.photo} alt="room" />
        <h2>{roomDetail.city}</h2>
        <h2>{roomDetail.price}</h2>
        <p>{roomDetail.description}</p>
        <p>
          Room ID:
          {roomDetail.id}
        </p>
      </div>

      {showReserve ? (
        <Reserve />
      ) : (
        <button type="button" onClick={handleReserveClick}>
          Reserve Room
        </button>
      )}
      {!showReserve && (
        <div>
          <Link to="/">Back</Link>
        </div>
      )}
    </div>
  );
};

export default RoomDetails;
