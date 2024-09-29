import React, { useContext } from 'react';
import { NotesContext } from '../context/NotesContext';
import Note from './Note';

const NotesCollection = () => {
  const { state, dispatch } = useContext(NotesContext)!;

  const handleDelete = (id: string) => {
    dispatch({ type: 'REMOVE_NOTE', payload: id });
  };

  return (
    <>
      {state.notes.map((note) => (
        <Note key={note.id} id={note.id} title={note.title} content={note.content} onDelete={handleDelete} />
      ))}
    </>
  );
};

export default NotesCollection;
