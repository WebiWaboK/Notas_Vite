import React from 'react';
import styled from 'styled-components';

const AppBar = () => {
  return (
    <AppBarContainer>
      <Title>Mi Aplicación de Notas</Title>
      <Subtitle>Bienvenido a tu organizador personal</Subtitle>
    </AppBarContainer>
  );
};

const AppBarContainer = styled.div`
  background-color: #a8dadc; /* Color pastel */
  padding: 20px;
  margin: 0;
  border-radius: 10px; /* Bordes redondeados */
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 10px;
`;

const Subtitle = styled.h2`
  font-weight: 400;
`;

export default AppBar;
