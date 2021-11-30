import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhones, deleteById } from '../../redux/contacts/operations';

export default function ContactsList() {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const isDelete = useSelector(state => state.isDelete);
  const isSubmit = useSelector(state => state.isSubmit);
  const token = useSelector(state => state.token);

  const dispatch = useDispatch();
  const deleteNum = (id, token) =>
    dispatch(deleteById({ id: id, token: token }));
  const del = ev => deleteNum(ev.target.id, token);

  useEffect(() => {
    dispatch(fetchPhones(token));
  }, [token, dispatch]);
  useEffect(() => {
    if (isDelete) {
      dispatch(fetchPhones(token));
    }
  }, [isDelete, token, dispatch]);
  useEffect(() => {
    if (isSubmit) {
      dispatch(fetchPhones(token));
    }
  }, [isSubmit, token, dispatch]);

  function filterContacts() {
    return contacts.filter(el => {
      const arr = el.name.toLowerCase().split(' ');
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase().match(new RegExp(`^${filter}`)) !== null) {
          return true;
        }
      }
      return false;
    });
  }
  return (
    <ul className="">
      {filterContacts().map(el => (
        <li className="" key={el.id}>
          {el.name}: {el.number}
          <button type="button" className="" id={el.id} onClick={del}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
