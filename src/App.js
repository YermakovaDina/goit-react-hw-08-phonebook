import './App.css';
import { AppBar } from './components/AppBar/App';
import { Registration } from './pages/Register';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Route, Routes } from 'react-router';
import { PrivateRoute } from './routes/PrivateRoute';
import { PublicRoute } from './routes/PublicRoute';
import { Phonebook } from './pages/Phonebook';

import { fetchCurrentUser } from './redux/contacts/operations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const dispatch = useDispatch();
  const isError = useSelector(state => state.error);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(fetchCurrentUser(localStorage.getItem('token')));
    }
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      toast('Something went wrong... Please try again later.');
    }
  }, [isError]);

  return (
    <>
      <AppBar />

      <main>
        <Routes>
          <Route path="/" element={<PublicRoute component={Home} />} />

          <Route
            path="/register"
            element={<PublicRoute component={Registration} />}
          />

          <Route path="/login" element={<PublicRoute component={Login} />} />

          <Route
            path="/contacts"
            element={<PrivateRoute component={Phonebook} />}
          />
        </Routes>
      </main>

      <ToastContainer />
    </>
  );
}
