import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubmitUser } from '../redux/contacts/operations';
import { Navigate } from 'react-router-dom';
import './Register.css';

export function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.isAuth);

  const handleChangeAllInput = ev => {
    switch (ev.target.name) {
      case 'name':
        setName(ev.target.value);
        break;
      case 'email':
        setEmail(ev.target.value);
        break;
      case 'password':
        setPassword(ev.target.value);
        break;

      default:
        alert('Default Alert!');
        break;
    }
  };

  const submitUser = () => dispatch(fetchSubmitUser({ name, email, password }));

  return (
    <>
      <form
        className="form"
        onSubmit={e => {
          e.preventDefault();
          submitUser({ name, email, password });
          setName('');
          setEmail('');
          setPassword('');
        }}
      >
        <h3 className="form__title">Instant registration.</h3>
        <input
          id="inputName"
          type="text"
          name="name"
          className="form__input"
          pattern="\w{4,16}"
          title="The password can consist of Latin letters or numbers from 4 to 16 characters"
          placeholder="Name"
          required
          onChange={handleChangeAllInput}
          value={name}
        />

        <input
          type="text"
          name="email"
          className="form__input"
          pattern="^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$"
          title="Input valid email"
          placeholder="E-mail"
          required
          autoComplete="username"
          onChange={handleChangeAllInput}
          value={email}
        />

        <input
          type="password"
          name="password"
          className="form__input"
          pattern="\w{7,16}"
          title="The password can consist of Latin letters or numbers from 4 to 16 characters"
          placeholder="Password"
          required
          autoComplete="current-password"
          onChange={handleChangeAllInput}
          value={password}
        />

        <button className="form__button" type="submit">
          Register
        </button>
      </form>
      {isAuth && <Navigate to="/contacts" />}
    </>
  );
}
export default Registration;
