
// import React from 'react';

// const Login = () => {
//   return <h1>lkkkkk </h1>;
// };

// export default Login;

// Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    // For simplicity, let's just check if both fields are non-empty
    if (username && password) {
      alert('Logged in successfully!');
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <div style={styles.container}>
      <h1>Login</h1>
      <div style={styles.form}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleLogin} style={styles.button}>Login</button>
      </div>
      <Link to="/" style={styles.link}>Back to Home</Link>
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

