import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import setAuthToken from './setAuthToken';

function SignIn() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:3000/auth/login', user)
      .then((response) => {
        if (response.status !== 200) {
          setError('email or password is incorrect');
        } else {
          setError(null);
          const { token } = response.data;
          localStorage.setItem('token', token);
          setAuthToken(token);
          navigate('/');
        }
      })
      .catch(() => setError('email or password is incorrect'));

    setUser({
      email: '',
      password: '',
    });
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="entry-page-components">
      <img src="https://content.pymnts.com/wp-content/uploads/2016/05/Hotel-Room-Secondary-Market-1000x600.jpg" alt="hotel" className="hotel-image" />
      <div className="entry-page-container">
        <h1>
          Sign In
        </h1>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit} className="form-container">
          <input type="text" placeholder="Email" name="email" value={user.email} onChange={handleChange} className="form-input" />
          <input type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange} className="form-input" />
          <div className="form-action-buttons">
            <Link to="/signup">
              Sign Up
            </Link>
            <input type="submit" value="Sign In" />
          </div>
        </form>
      </div>
    </div>

  );
}

export default SignIn;
