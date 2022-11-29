import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/slice/contactsSlice';

import shortid from 'shortid';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { changeLocalStorage } from './LocalStorage';

import {
  PhonebookForm,
  PhonebookFormButton,
  PhonebookFormLabel,
  PhonebookFormInput,
} from '../Phonebook.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const nameId = shortid.generate();
  const telId = shortid.generate();

  const handleSubmit = e => {
    e.preventDefault();

    const userName = e.target.elements.name.value;
    const userNumber = e.target.elements.number.value;

    console.log('handleSubmit-contacts', contacts);
    const errorArray = contacts.filter(
      contact => contact.name.toLowerCase() === userName.toLowerCase()
    );

    if (errorArray.length === 0) {
      dispatch(addContact({ name: userName, number: userNumber }));
      toast.success('You add a new contact in your Phonebook!');
    } else {
      toast.info('This contact is already in your Phonebook!');
    }
    changeLocalStorage('contacts', contacts);

    // PhonebookForm.reset();
  };

  return (
    <>
      <PhonebookForm onSubmit={handleSubmit}>
        <PhonebookFormLabel htmlFor={nameId}>Name</PhonebookFormLabel>
        <PhonebookFormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={shortid.generate()}
        />
        <PhonebookFormLabel htmlFor={telId}>Number</PhonebookFormLabel>
        <PhonebookFormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <PhonebookFormButton type="submit">Add contact</PhonebookFormButton>
      </PhonebookForm>
      <ToastContainer autoClose={2000} position="top-center" theme="colored" />
    </>
  );
};
