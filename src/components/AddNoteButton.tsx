import React from 'react';
import { Add } from '@styled-icons/material/Add'; // Asegúrate de tener este paquete instalado
import styled from 'styled-components';

// Define la interfaz para las props
interface AddNoteButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>; // Especifica el tipo de onClick
}

// Componente funcional con tipado
const AddNoteButton: React.FC<AddNoteButtonProps> = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <AddIcon />
      Agregar Nota
    </Button>
  );
};

// Estilos del botón
const Button = styled.button`
  background-color: #ffddd2; /* Color pastel */
  color: #000; /* Contraste adecuado */
  padding: 10px 20px;
  border: none;
  border-radius: 30px; /* Forma redondeada */
  margin: 20px;
  display: flex;
  align-items: center;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #ffc6c6;
  }
`;

// Estilos del icono
const AddIcon = styled(Add)`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

export default AddNoteButton;
