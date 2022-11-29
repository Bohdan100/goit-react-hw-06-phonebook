import { ContactForm } from './ContactForm';
import { Contacts } from './Contacts';
import { Filter } from './Filter';
import { PhonebookTitle, ContactsTitle } from './Phonebook.styled';

export const Phonebook = () => {
  return (
    <>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm />

      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      <Contacts />
    </>
  );
};
