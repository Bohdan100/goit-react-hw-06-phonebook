import React from 'react';
import { useSelector } from 'react-redux';

import { ContactsList } from '../Phonebook.styled';
import ContactsItem from './ContactsItem';

export const Contacts = ({ onDeleteContact }) => {
  const contacts = useSelector(state => state.contacts);
  const filterName = useSelector(state => state.filter);

  const findVisibleContacts = () =>
    contacts.filter(contact => contact.name.toLowerCase().includes(filterName));

  const visibleContacts = findVisibleContacts();

  return (
    <ContactsList>
      {visibleContacts.length > 0 &&
        visibleContacts.map(({ id, name, number }) => (
          <ContactsItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        ))}
    </ContactsList>
  );
};
