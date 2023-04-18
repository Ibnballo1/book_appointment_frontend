import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import fetchReservations from '../redux/reservation/fetchReservations';

const MyReservations = () => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(fetchReservations()); }, [dispatch]);
  const reservationsData = useSelector((state) => state.reservations.data);
  return (
    <div>
      <h1>My Reservations</h1>
      <ul>
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
      </ul>
      <div><Link to="/">Back</Link></div>
    </div>
  );
};

export default MyReservations;
