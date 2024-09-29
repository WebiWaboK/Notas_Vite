import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const AppHeader = () => (
  <AppBar position="static" sx={{ bgcolor: '#ffd1dc', padding: '20px', borderRadius: '0 0 15px 15px' }}>
    <Toolbar>
      <Typography variant="h4" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
        Gestor de Notas
      </Typography>
      <Typography variant="h6" component="div" sx={{ fontWeight: 400 }}>
        Organiza tus ideas
      </Typography>
    </Toolbar>
  </AppBar>
);

export default AppHeader;
