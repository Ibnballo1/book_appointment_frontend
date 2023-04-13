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
    <div>
      <h1>
        SignIn
      </h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="email" name="email" value={user.email} onChange={handleChange} />
        <input type="password" placeholder="password" name="password" value={user.password} onChange={handleChange} />
        <input type="submit" />
      </form>
      <Link to="/signup">
        SignUp
      </Link>
    </div>

  );
}

export default SignIn;
