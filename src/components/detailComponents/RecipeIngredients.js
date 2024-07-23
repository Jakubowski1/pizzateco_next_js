import React from "react";
import styled from "styled-components";

const Instruction = styled.ul`
  font-size: 32px;
`;

const Item = styled.li`
  font-family: "Nunito Sans", sans-serif;
  font-size: 24px;
`;
const Container = styled.div`
  font-family: "Just Me Again Down Here", cursive;
  font-size: 64px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 0 40px 40px 40px;
  width: 610px;
  @media (max-width: 1760px) {
    margin-bottom: 50px;
  }
`;

const RecipeIngredients = ({ ingredients }) => (
  <Container>
    Ingredients
    <Instruction>
      {ingredients?.map((ingredient, index) => (
        <Item key={index}>{ingredient}</Item>
      )) || <Item>No ingredients available</Item>}
    </Instruction>
  </Container>
);

export default RecipeIngredients;
