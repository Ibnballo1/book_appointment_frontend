import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function hasJWT() {
  let flag = false;
  if (localStorage.getItem('token')) {
    flag = true;
  } else {
    flag = false;
  }
  return flag;
}

function Protected({ children }) {
  if (!hasJWT()) {
    return <Navigate to="/signin" replace />;
  }
  return children;
}

Protected.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Protected;
