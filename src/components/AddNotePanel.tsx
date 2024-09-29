import React, { useState } from 'react';
import styled from 'styled-components';

// Definición de la interfaz para las props del componente
interface AddNotePanelProps {
  isOpen: boolean; // Estado para controlar si el panel está abierto
  onClose: () => void; // Función para cerrar el panel
  onSave: (title: string, content: string) => void; // Función para guardar la nota
}

const AddNotePanel: React.FC<AddNotePanelProps> = ({ isOpen, onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  if (!isOpen) return null;

  // Función para manejar el guardado de la nota
  const handleSave = () => {
    onSave(title, content); // Pasar título y contenido a la función onSave
    setTitle(''); // Limpiar el título
    setContent(''); // Limpiar el contenido
  };

  return (
    <Overlay>
      <Panel>
        <Input 
          type="text" 
          placeholder="Título" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <Textarea 
          placeholder="Contenido" 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
        />
        <ButtonContainer>
          <Button onClick={handleSave}>Guardar</Button>
          <Button onClick={onClose} cancel>Cancelar</Button>
        </ButtonContainer>
      </Panel>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Panel = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 100px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button<{ cancel?: boolean }>` // Se ha especificado que cancel es una prop opcional
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${({ cancel }) => (cancel ? '#ff9999' : '#90be6d')};
  color: #fff;

  &:hover {
    background-color: ${({ cancel }) => (cancel ? '#ff6666' : '#6ab47b')};
  }
`;

export default AddNotePanel;
