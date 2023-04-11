import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Room from './components/Room';
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
    <>
      <Routes>
        <Route
          path="/"
          element={(
            <Protected>
              <Route path="/" element={<Room />} />
            </Protected>
          )}
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default App;
