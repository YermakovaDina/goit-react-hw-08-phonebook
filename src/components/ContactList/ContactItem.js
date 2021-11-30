// import PropTypes from 'prop-types';
// import { useDeleteContactMutation } from '../../services/contactsApi';
// import './ContactList.css';

// export default function ContactItem({ contact }) {
//   const [delItem] = useDeleteContactMutation();
//   return (
//     <li className="list_item">
//       <p className="">{contact.name}</p>
//       <p className="">{contact.phone}</p>
//       <button
//         className="button_list"
//         id={contact.id}
//         onClick={() => delItem(contact.id)}
//       >
//         Delete
//       </button>
//     </li>
//   );
// }

// ContactItem.propTypes = {
//   contact: PropTypes.shape({
//     name: PropTypes.string,
//     phone: PropTypes.string,
//     id: PropTypes.string,
//   }),
//   delItem: PropTypes.func,
// };

// //==========
// // //import { useEffect } from 'react';
// // import { connect } from 'react-redux';
// // import { fetchContact, deleteContact } from '../../redux/contacts/operations';

// // function ContactsItem({ contacts, deleteContact, fetchContact }) {
// //   //   выдает ошибку
// //   //   useEffect(() => {
// //   //     fetchContact();
// //   //   }, []);

// //   return contacts.map(el => {
// //     return (
// //       <li className="list_item" key={el.id}>
// //         {el.name}: {el.number}
// //         <button
// //           className="button_list"
// //           type="button"
// //           id={el.id}
// //           onClick={e => {
// //             deleteContact(e.target.id);
// //           }}
// //         >
// //           Delete
// //         </button>
// //       </li>
// //     );
// //   });
// // }

// // const mapStateToProps = state => {
// //   return {
// //     contacts: state.contacts.items,
// //   };
// // };

// // const mapDispatchToProps = dispatch => ({
// //   fetchContact: () => dispatch(fetchContact()),
// //   deleteContact: id => dispatch(deleteContact(id)),
// // });

// // export default connect(mapStateToProps, mapDispatchToProps)(ContactsItem);
