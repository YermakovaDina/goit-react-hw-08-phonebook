import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Navigation } from './Navigation';
import { UserMenu } from './UserMenu';
import './styleAppBar.css';

export function AppBar() {
  const isAuth = useSelector(state => state.isAuth);

  return (
    <header className="container">
      <div className="container__left">
        <NavLink className="text__left" to="/contacts">
          Contacts
        </NavLink>
      </div>

      {isAuth ? <UserMenu /> : <Navigation />}
    </header>
  );
}
