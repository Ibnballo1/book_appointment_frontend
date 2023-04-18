import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Room from './components/Room';
import AddRoom from './redux/room/AddRoom';
import MyReservations from './components/MyReservations';
import Reserve from './components/Reserve';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import setAuthToken from './components/setAuthToken';
import Protected from './components/Protected';

const App = () => {
  const token = localStorage.getItem('token');
  if (token) {
    setAuthToken(token);
  }

  return (
    <Router>
      <>
        <Routes>
          <Route
            path="/"
            element={(
              <Protected>
                <Room />
              </Protected>
        )}
          />
          <Route path="/redux/room/AddRoom" element={<AddRoom />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route exact path="/reserve" element={<Reserve />} />
          <Route exact path="/reserve/:id" element={<Reserve />} /> */}
          <Route exact path="/reservations" element={<MyReservations />} />
          <Route exact path="/reserve" element={<Reserve />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
