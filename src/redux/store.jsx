import { configureStore } from '@reduxjs/toolkit';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { contactsSlice, filterSlice } from './usersSlice';

const enhancer = devToolsEnhancer();

export const store = configureStore(
  {
    reducer: {
      contacts: contactsSlice.reducer,
      filter: filterSlice.reducer,
    },
  },
  enhancer
);
