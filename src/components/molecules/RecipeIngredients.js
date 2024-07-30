import React from "react";
import Container from "../atoms/Container";
import Instruction from "../atoms/Instruction";
import Item from "../atoms/Item";

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
