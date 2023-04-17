import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import fetchRoom from '../redux/room/fetchRoom';

const RoomDetails = () => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    dispatch(fetchRoom(id));
  }, [dispatch, id]);
  const roomDetail = useSelector((state) => state.room.data[0]);
  console.log(roomDetail);
  const dataFetchedRef = useRef(false);
  if (!roomDetail) {
    return <p>No Room found</p>;
  }
  return (
    <div>
      <div>
        <h1>{roomDetail.name}</h1>
        <img src={roomDetail.photo} />
        <h2>{roomDetail.city}</h2>
        <h2>{roomDetail.price}</h2>
        <p>{roomDetail.description}</p>
      </div>
      <Link to={`/rooms/${roomDetail.id}/reserve`}>
        <button type="button">
          Reserve Room
        </button>
      </Link>
    </div>
  );
};

export default RoomDetails;
