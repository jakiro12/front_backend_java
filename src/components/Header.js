import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'; // Importa el componente Button
import IconButton from '@mui/material/IconButton';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Header = ({ onDarkModeToggle }) => {
  const theme = useTheme();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flex: 1 }}>
          Headersito :3
        </Typography>
        <IconButton sx={{ ml: 1 }} onClick={onDarkModeToggle} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
