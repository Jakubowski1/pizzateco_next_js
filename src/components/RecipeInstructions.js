import React from 'react';
import styled from 'styled-components';

const Instruction = styled.ol`
  font-size: 32px;
`;

const Item = styled.li`
 font-family: "Nunito Sans", sans-serif;
  font-size: 24px;
`;
const Container = styled.div`
  font-family: "Just Me Again Down Here", cursive;
  font-size: 64px;
 

`;

const RecipeInstructions = ({ instructions }) => (
  <Container>Instructions
  <Instruction>
    {instructions?.map((inst, index) => (
      <Item key={index}>{inst}</Item>
    )) || <Item>No instructions available</Item>}
  </Instruction>
  </Container>
);

export default RecipeInstructions;
