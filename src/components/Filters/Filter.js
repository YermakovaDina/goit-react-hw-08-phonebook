import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from '../../redux/contacts/actions';
import './Filter.css';

export default function Filter() {
  const value = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const onChange = e => dispatch(filterContact(e.currentTarget.value));
  return (
    <div>
      <label className="filter_label">Find contacts by name:</label>
      <input
        type="text"
        id="find"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="The name can only consist of letters, apostrophes, dashes and spaces."
        required
        value={value}
        onChange={onChange}
        className="filter_input"
      />
    </div>
  );
}
