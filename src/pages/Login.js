import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogin } from '../redux/contacts/operations';
import { Navigate } from 'react-router-dom';

export function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const loginUser = data => dispatch(fetchLogin(data));
  const isAuth = useSelector(state => state.isAuth);

  const handleChangeAllInput = ev => {
    if (ev.target.name === 'login') {
      setLogin(ev.target.value);
    } else if (ev.target.name === 'password') {
      setPassword(ev.target.value);
    }
  };

  return (
    <>
      <form
        className=""
        onSubmit={e => {
          e.preventDefault();
          loginUser({ email: login, password });
          setLogin('');
          setPassword('');
        }}
      >
        <h3 className="">Is yours login.</h3>

        <input
          id="inputName"
          type="text"
          name="login"
          className=""
          pattern="^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$"
          title="Input valid email"
          placeholder="E-mail"
          required
          autoComplete="username"
          onChange={handleChangeAllInput}
          value={login}
        />

        <input
          type="password"
          name="password"
          className=""
          pattern="\w{4,16}"
          title="The password can consist of Latin letters or numbers from 4 to 16 characters"
          placeholder="Password"
          required
          autoComplete="current-password"
          onChange={handleChangeAllInput}
          value={password}
        />
        <button className="" type="submit">
          Login
        </button>
      </form>
      {isAuth && <Navigate to="/contacts" />}
    </>
  );
}
export default Login;
//================
// export default function Login() {

//   return (
//     <>
//       <h2>Login Form</h2>
//       <form>
//         <input />
//       </form>
//     </>
//   );
// }
