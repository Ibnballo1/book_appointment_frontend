import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import fetchRoom from '../redux/room/fetchRoom';
import Navigate from './Navigation';

const Room = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRoom());
  }, [dispatch]);
  const roomData = useSelector((state) => state.room.data);

  return (
    <div className="container">
      <Navigate />
      <div className="home">
        <div className="header-div">
          <h1>Rooms</h1>
          <p>Please Select a room below</p>
        </div>
        <div className="rooms row" style={{ marginTop: '40px' }}>
          {roomData.map((room) => (
            <div key={room.id} className="room-page col-md-4 col-lg-3 col-sm-6 text-center align-center">

              <div className="card">
                <Link to={`/rooms/${room.id}`}>
                  <img className="card-img-top" src={room.photo} alt="Room Pic" />
                  <div className="card-body">
                    <h5 className="card-title">{room.name}</h5>
                    <p className="card-text">{room.description}</p>
                  </div>
                </Link>
              </div>

              {/* <div className='card'>
              <Link to={`/rooms/${room.id}`}> */}
              {/* Room ID:
              {room.id} */}
              {/* <h3 className="room-title">{room.name}</h3>
                <div>
                  <img src={room.photo} alt="Room Pic" className="room-img" />
                </div>
                <p className="room-info">{room.description}</p> */}
              {/* {room.city} */}
              {/* {room.price} */}
              {/* </Link>
              </div> */}

            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
export default Room;
