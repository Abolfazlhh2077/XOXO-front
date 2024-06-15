
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TicTacToeGame from './TicTacToeGame';

const Login = () => {
  const [user1, setUser1] = useState('');
  const [user2, setUser2] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (user1 && user2) {
      setLoggedIn(true);
    } else {
      alert('Please enter both usernames.');
    }
  };

  return (
    <div style={styles.container}>
      {loggedIn ? (
        <TicTacToeGame user1={user1} user2={user2} />
      ) : (
        <>
          <h1>Login</h1>
          <div style={styles.form}>
            <input
              type="text"
              placeholder="User 1"
              value={user1}
              onChange={(e) => setUser1(e.target.value)}
              style={styles.input}
            />
            <input
              type="text"
              placeholder="User 2"
              value={user2}
              onChange={(e) => setUser2(e.target.value)}
              style={styles.input}
            />
            <button onClick={handleLogin} style={styles.button}>Login</button>
          </div>
          <Link to="/" style={styles.link}>Back to Home</Link>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  },
  input: {
    marginBottom: '10px',
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
  },
  link: {
    marginTop: '20px',
    textDecoration: 'none',
    color: '#007bff',
  },
};

export default Login;
