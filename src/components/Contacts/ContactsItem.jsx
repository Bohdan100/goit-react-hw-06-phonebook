import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/usersSlice';

import {
  ContactsListItem,
  ContactsListText,
  ContactsButtonDelete,
} from '../Phonebook.styled';

const ContactsItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <ContactsListItem>
      <ContactsListText>
        {name}: {number}
      </ContactsListText>

      <ContactsButtonDelete
        type="button"
        onClick={() => dispatch(removeContact(id))}
      >
        Delete
      </ContactsButtonDelete>
    </ContactsListItem>
  );
};

// changeLocalStorage('contacts', newContacts);

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactsItem;
