import React, { createContext, useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { darkMode } from './Themes/darkMode.js';
import { lightMode } from './Themes/lightMode';
import Todo from './Components/Todo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Settings } from '@mui/icons-material';
import Settings from './Context/Settings/index.jsx';
import NavBar from './Components/Nav/index.jsx';

export const GlobalContext = createContext(null);

const App = () => {
  const [appTheme, setAppTheme] = useState('light');
  const [settingData, setSettingData] = useState({
    displayCount: 3,
    hideCompleted: true,
    sortWord: 'difficulty',
  });
  useEffect(() => {
    const mode = localStorage.getItem('theme');
    setAppTheme(mode);
  }, []);
  console.log(appTheme);
  return (
    <GlobalContext.Provider
      value={{
        displayCount: settingData.displayCount,
        hideCompleted: settingData.hideCompleted,
        sortWord: settingData.sortWord,
        setSettingData,
        toggleAppTheme: () =>
          setAppTheme(appTheme === 'light' ? 'dark' : 'light'),
        appTheme,
      }}
    >
      <ThemeProvider theme={appTheme === 'light' ? lightMode : darkMode}>
        <CssBaseline />
        <Router>
          <NavBar />
          <Routes>
            <Route path="/home" element={<App />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </GlobalContext.Provider>
  );
};

export default App;
