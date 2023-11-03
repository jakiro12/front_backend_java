import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Paper square elevation={3} style={{ padding: '16px', textAlign: 'center' }}>
      <Typography variant="body2">
       {new Date().getFullYear()} © El Emporio del Vidrio.
      </Typography>
    </Paper>
  );
};

export default Footer;
