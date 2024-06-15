
import React from 'react';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div style={styles.container}>
      <Link to="/Login" style={styles.link}>
        <button style={styles.button}>Start</button>
      </Link>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'hsl(249, 58%, 39%)'
  },
  link: {
    textDecoration: 'none',
  },
  button: {
    borderRadius: '50px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: 'orangered',
    color: '#fff',
    border: 'none',
    outline: 'none',
  },
};

export default App;

