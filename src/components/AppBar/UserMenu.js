import { useSelector, useDispatch } from 'react-redux';
import { fetchLogout } from '../../redux/contacts/operations';
import './styleAppBar.css';

export function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(state => state.userData.name);
  const token = useSelector(state => state.token);

  const handleClick = () => dispatch(fetchLogout(token));

  return (
    <div className="">
      <span className="">Hi, {name}</span>

      <button onClick={handleClick} className="button__nav" type="button">
        Logout
      </button>
    </div>
  );
}
