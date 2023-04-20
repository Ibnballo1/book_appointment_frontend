/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import fetchRoom from '../redux/room/fetchRoom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigate from './Navigation';
import ReserveDetail from './ReserveDetail';

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
    <div className="container">
      <Navigate />
      <div className="container d-flex mt-3">
        <div className="container">
          <img src={roomDetail.photo} alt="room" />
        </div>

        <div className="container flex-column">
          <h2 className="text-end">
            {' '}
            {roomDetail.name}
          </h2>
          <p className="text-end">
            {' '}
            {roomDetail.name}
            {' '}
            is
            {' '}
            {roomDetail.description}
          </p>
          <table className="table table-striped">
            <tbody>
              <tr>
                <th scope="row">{roomDetail.name}</th>
                <td>
                  $
                  {roomDetail.price}
                </td>
              </tr>
              <tr>
                <th scope="row">Location</th>
                <td>{roomDetail.city}</td>
              </tr>
            </tbody>
          </table>
          <h4>80% Sold out!!</h4>
          <div className="container d-flex flex-column mt-5 reserveCont">
            {!showReserve && (
            <div className="d-flex flex-row arrowCont">
              <Link to="/">Back</Link>
              <span className="arrow" />
            </div>
            )}
            {showReserve ? (
              <ReserveDetail id={roomDetail.id} name={roomDetail.name} />
            ) : (
              <button className="btn btn-round btn-success reserve" type="submit" onClick={handleReserveClick}>
                Reserve
              </button>
            )}
          </div>
        </div>
      </div>
    </div>

  );
};

export default RoomDetails;
