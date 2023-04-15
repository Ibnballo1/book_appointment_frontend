import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchReservations from '../redux/reservation/fetchReservations';

const MyReservations = () => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(fetchReservations()); }, []);
  const reservationsData = useSelector((state) => state.reservations.data);
  return (
    <main>
      My Reservations
      {reservationsData.map((reservation) => (
        <div key={reservation.id}>
          {reservation.id}
          {reservation.room_id}
          {reservation.user_id}
          {reservation.start_date}
          {reservation.end_date}
          {reservation.created_at}
          {reservation.updated_at}
        </div>
      ))}
    </main>
  );
};

export default MyReservations;
