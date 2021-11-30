import Form from '../components/Forms/Form';
import Filter from '../components/Filters/Filter';
import ContactsList from '../components/ContactList/ContactList';
import './Phonebook.css';

export function Phonebook() {
  return (
    <div className="form__phone">
      <h1 className="form__title">Phonebook</h1>

      <Form />

      <h2>Contacts</h2>

      <Filter />

      <ContactsList />
    </div>
  );
}

//export default Phonebook;
