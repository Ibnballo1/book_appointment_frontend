import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Hello from './components/Hello';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Hello />} />,
  ),
);

const App = () => (
  <RouterProvider router={router} />
);

export default App;
