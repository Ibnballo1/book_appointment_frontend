import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Room from './components/Room';
import MyReservations from './components/MyReservations';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import setAuthToken from './components/setAuthToken';

const App = () => {
  const token = localStorage.getItem('token');
  if (token) {
    setAuthToken(token);
  }

  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Room />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route exact path="/reserve" element={<Reserve />} />
          <Route exact path="/reserve/:id" element={<Reserve />} /> */}
          <Route exact path="/reservations" element={<MyReservations />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
