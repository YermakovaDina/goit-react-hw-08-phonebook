// import { Component } from 'react';
// import PropTypes from 'prop-types';
// import './Form.css';
// import { v4 as uuidv4 } from 'uuid';

// class Form extends Component {
//   state = {
//     contacts: [],
//     name: '',
//     number: '',
//   };

//   nameInputId = uuidv4();
//   numberInputId = uuidv4();

//   handleChange = e => {
//     const { name, value } = e.currentTarget;

//     this.setState({ [name]: value });
//   };

//   handleOnSubmit = e => {
//     e.preventDefault();

//     const obj = {
//       name: this.state.name,
//       number: this.state.number,
//       id: uuidv4(),
//     };

//     this.setState({ contact: obj });
//     this.props.onSubmit(obj);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <div className="App">
//         <form className="form" onSubmit={this.handleOnSubmit}>
//           <label className="form_label" htmlFor={this.nameInputId}>
//             Name
//             <input
//               className="form_input"
//               type="text"
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//               required
//               value={this.state.name}
//               onChange={this.handleChange}
//               id={this.nameInputId}
//             ></input>
//           </label>
//           <label className="form_label" htmlFor={this.numberInputId}>
//             Number
//             <input
//               className="form_input"
//               type="tel"
//               name="number"
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//               required
//               value={this.state.number}
//               onChange={this.handleChange}
//               id={this.numberInputId}
//             ></input>
//           </label>
//           <button className="form_button" type="submit">
//             Add contact
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// Form.protoType = {
//   onSubmit: PropTypes.func,
// };

// export default Form;
