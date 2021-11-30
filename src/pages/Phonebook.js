import Form from '../components/Forms/Form';
import Filter from '../components/Filters/Filter';
import ContactsList from '../components/ContactList/ContactList';

export function Phonebook() {
  return (
    <div>
      <h1>Phonebook</h1>

      <Form />

      <h2>Contacts</h2>

      <Filter />

      <ContactsList />
    </div>
  );
}

//export default Phonebook;
