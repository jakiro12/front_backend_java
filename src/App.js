import React, { useState } from 'react';
import { Outlet } from 'react-router-dom'; // Importa Outlet en lugar de Route
import Header from './components/Header';
import Footer from './components/Footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppRoutes from './AppRoutes';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header onDarkModeToggle={toggleDarkMode} />
        <Outlet>
          <AppRoutes />
          </Outlet>
          <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
