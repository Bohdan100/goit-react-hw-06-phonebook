import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/slice/contactsSlice';

import {
  ContactsListItem,
  ContactsListText,
  ContactsButtonDelete,
} from './ContactsItem.styled';

export const ContactsItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeContact(id));
  };

  return (
    <ContactsListItem>
      <ContactsListText>
        {name}: {number}
      </ContactsListText>

      <ContactsButtonDelete type="button" onClick={handleClick}>
        Delete
      </ContactsButtonDelete>
    </ContactsListItem>
  );
};

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
