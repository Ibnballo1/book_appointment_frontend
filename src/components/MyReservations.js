import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import fetchReservations from '../redux/reservation/fetchReservations';
import Navigate from './Navigation';
import '../home.css';

const MyReservations = () => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(fetchReservations()); }, [dispatch]);
  const reservationsData = useSelector((state) => state.reservations.data);
  return (
    <div className="container">
      <Navigate />
      <h1 className="reservation-heading">My Reservations</h1>
      <div className="rooms row" style={{ marginTop: '40px' }}>
        {reservationsData.map((reservation) => (
          <div key={reservation.id} className="room-page col-md-4 col-lg-3 col-sm-6 text-center align-center">

            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{reservation.room.name}</h5>
                <p className="card-text">
                  Start date:
                  {' '}
                  {reservation.start_date}
                </p>
                <p className="card-text">
                  End DateL
                  {' '}
                  {reservation.end_date}
                </p>
              </div>

            </div>

          </div>
        ))}
      </div>
      {/* <ul>
        {reservationsData.map((reservation) => (
          <li key={reservation.id}>
            Reservation ID:
            {reservation.id}
            Room ID:
            {reservation.room_id}
            User ID:
            {reservation.user_id}
            Start Date:
            {reservation.start_date}
            End Date:
            {reservation.end_date}
            Room Name:
            {reservation.room.name}
            City:
            {reservation.room.city}
          </li>
        ))}
      </ul> */}
      <div className="d-flex flex-row arrowCont">
        <span className="arr" />
        <Link to="/">Back</Link>
      </div>
    </div>
  );
};

export default MyReservations;
