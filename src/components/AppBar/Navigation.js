import { NavLink } from 'react-router-dom';
import './styleAppBar.css';

export function Navigation() {
  return (
    <div className="container__right">
      <NavLink className="text__right" to="/register">
        Registration
      </NavLink>

      <NavLink className="text__right text__login" to="/login">
        Login
      </NavLink>
    </div>
  );
}
