import React from 'react';
import './Home.css';

export function Home() {
  return (
    <div className="title">
      <h1>
        Welcome to Phonebook!
        <br />
        Please,{' '}
        <a className="title__registre" href="./register">
          Register
        </a>{' '}
        or{' '}
        <a className="title__login" href="./login">
          Login
        </a>{' '}
        to start!
      </h1>
    </div>
  );
}
export default Home;
