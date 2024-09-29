import React, { createContext, useReducer, ReactNode } from 'react';

interface Note {
  id: string;
  title: string;
  content: string;
  category?: string;
  tags?: string[];
}

interface NotesState {
  notes: Note[];
}

type Action =
  | { type: 'ADD_NOTE'; payload: Note }
  | { type: 'REMOVE_NOTE'; payload: string }
  | { type: 'EDIT_NOTE'; payload: Note };

const initialState: NotesState = { notes: [] };

const notesReducer = (state: NotesState, action: Action): NotesState => {
  switch (action.type) {
    case 'ADD_NOTE':
      return { ...state, notes: [...state.notes, action.payload] };
    case 'REMOVE_NOTE':
      return { ...state, notes: state.notes.filter(note => note.id !== action.payload) };
    case 'EDIT_NOTE':
      return {
        ...state,
        notes: state.notes.map(note =>
          note.id === action.payload.id ? action.payload : note
        )
      };
    default:
      return state;
  }
};

const NotesContext = createContext<{
  state: NotesState;
  dispatch: React.Dispatch<Action>;
} | undefined>(undefined);

const NotesProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(notesReducer, initialState);
  return (
    <NotesContext.Provider value={{ state, dispatch }}>
      {children}
    </NotesContext.Provider>
  );
};

export { NotesProvider, NotesContext };
