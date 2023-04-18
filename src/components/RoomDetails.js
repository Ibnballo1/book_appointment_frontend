import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import fetchRoom from '../redux/room/fetchRoom';

const RoomDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRoom());
  }, [dispatch]);
  const roomId = parseInt(id, 10);
  const roomData = useSelector((state) => state.room.data);
  const roomDetail = (roomData.filter((room) => room.id === roomId))[0];
  return (
    <div>
      <div>
        <h1>{roomDetail.name}</h1>
        <img src={roomDetail.photo} alt="room" />
        <h2>{roomDetail.city}</h2>
        <h2>{roomDetail.price}</h2>
        <p>{roomDetail.description}</p>
      </div>
      <Link to={`/rooms/${roomDetail.id}/reserve`}>
        <button type="button">
          Reserve Room
        </button>
      </Link>
      <div><Link to="/">Back</Link></div>
    </div>
  );
};

export default RoomDetails;
