import { configureStore } from '@reduxjs/toolkit';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { contactsSlice } from '../slice/contactsSlice';
import { filterSlice } from '../slice/filterSlice';

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
