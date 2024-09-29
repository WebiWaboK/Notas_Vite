import React, { useState } from 'react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AppHeader from './components/AppBar';
import AddNoteModal from './components/AddNoteModal';
import NotesCollection from './components/NotesCollection';
import { NotesProvider } from './context/NotesContext';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <NotesProvider>
      <AppHeader />
      <NotesCollection />
      <Fab
        color="primary"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        onClick={handleOpenModal}
      >
        <AddIcon />
      </Fab>
      <AddNoteModal open={modalOpen} handleClose={handleCloseModal} />
    </NotesProvider>
  );
};

export default App;
