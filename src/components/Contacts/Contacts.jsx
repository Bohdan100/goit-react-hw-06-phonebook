import React from 'react';
import { useSelector } from 'react-redux';

import { ContactsList } from './Contacts.styled';
import { ContactsItem } from './ContactsItem';
import { selectVisibleContacts } from 'redux/selectors';

export const Contacts = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ContactsList>
      {visibleContacts.length > 0 &&
        visibleContacts.map(({ id, name, number }) => (
          <ContactsItem key={id} id={id} name={name} number={number} />
        ))}
    </ContactsList>
  );
};
