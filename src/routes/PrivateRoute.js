import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

export function PrivateRoute({ component: Component }) {
  const isAuth = useSelector(state => state.isAuth);
  return (
    <>
      {/* <h1>PRIVATE</h1> */}
      {isAuth ? <Component /> : <Navigate to="/login" />}
    </>
  );
}
