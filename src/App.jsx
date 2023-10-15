import React, { createContext, useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { darkMode } from './Themes/darkMode.js';
import { lightMode } from './Themes/lightMode';
import Todo from './Components/Todo';

export const GlobalContext = createContext(null);

const App = () => {
  const [appTheme, setAppTheme] = useState('light');

  useEffect(() => {
    const mode = localStorage.getItem('theme');
    setAppTheme(mode);
  }, []);
  console.log(appTheme);
  return (
    <GlobalContext.Provider
      value={{
        displayCount: 3,
        hideCompleted: true,
        sortWord: 'difficulty',
        toggleAppTheme: () =>
          setAppTheme(appTheme === 'light' ? 'dark' : 'light'),
        appTheme,
      }}
    >
      <ThemeProvider theme={appTheme === 'light' ? lightMode : darkMode}>
        <CssBaseline />
        <Todo />
      </ThemeProvider>
    </GlobalContext.Provider>
  );
};

export default App;
