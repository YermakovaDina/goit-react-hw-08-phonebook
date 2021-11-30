import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { useDispatch, useSelector } from 'react-redux';
import { submitPhone } from '../../redux/contacts/operations';

//import './Form.css';

export default function Form() {
  const inputNameId = uuidv4();
  const inputNumberId = uuidv4();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.contacts);
  const token = useSelector(state => state.token);

  const handleChangeAllInput = ev => {
    if (ev.target.name === 'name') {
      setName(ev.target.value);
    } else if (ev.target.name === 'number') {
      setNumber(ev.target.value);
    }
  };

  const dispatch = useDispatch();
  const addPhone = (data, token) => dispatch(submitPhone(data, token));

  function add(data) {
    if (!contacts.find(el => el.name === data[0])) {
      addPhone({
        data: {
          name: data[0],
          number: data[1],
        },
        token,
      });
    } else {
      alert(`${data[0]} is already in contacts`);
    }
  }

  return (
    <>
      <form
        className=""
        onSubmit={e => {
          e.preventDefault();
          add([name, number]);
        }}
      >
        <label className="" htmlFor={inputNameId}>
          Name
        </label>
        <input
          className=""
          id={inputNameId}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="The name can only consist of letters, apostrophe, dash and spaces."
          required
          onChange={handleChangeAllInput}
        />

        <label className="" htmlFor={inputNumberId}>
          Phone
        </label>
        <input
          className=""
          id={inputNumberId}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses, and can start with +."
          required
          onChange={handleChangeAllInput}
        />

        <button className="" type="submit">
          Add contact
        </button>
      </form>
    </>
  );
}
