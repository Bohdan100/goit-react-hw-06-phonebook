import { ThemeProvider } from '@emotion/react';
import { theme } from 'constants';
import { GlobalStyle } from 'GlobalStyle';

import { AppContainer } from 'App.styled';
import { Phonebook } from 'components';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <Phonebook />
      </AppContainer>
    </ThemeProvider>
  );
};
