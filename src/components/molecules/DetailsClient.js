"use client";

import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";
import Header from "../atoms/Header";
import RecipeImage from "../atoms/RecipeImage";
import RecipeInfo from "./RecipeInfo";
import RecipeInstructions from "../atoms/RecipeInstructions";
import RecipeIngredients from "./RecipeIngredients";
import logo from "../../assets/header.png";
import {
  Main,
  Container,
  Logo,
  BackButton,
  FlexRow,
  FlexRow2,
  FlexColumn,
} from "../../styles/detailStyles";

const DetailsClient = ({ recipe }) => {
  const router = useRouter();

  console.log("Recipe in DetailsClient:", recipe);

  if (!recipe) {
    return <div>No recipe data</div>;
  }

  return (
    <>
      <Container>
        <BackButton onClick={() => router.back()}>Go back</BackButton>
        <Logo src={logo.src} alt="logo" />
      </Container>
      <Main>
        <FlexRow>
          <RecipeImage src={recipe.image} alt={recipe.name} />
          <FlexColumn>
            <Header title={recipe.name} tags={recipe.tags} />
            <RecipeInfo recipe={recipe} />
          </FlexColumn>
        </FlexRow>
        <FlexRow2>
          <RecipeInstructions instructions={recipe.instructions} />
          <RecipeIngredients ingredients={recipe.ingredients} />
        </FlexRow2>
      </Main>
    </>
  );
};

DetailsClient.propTypes = {
  recipe: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    instructions: PropTypes.arrayOf(PropTypes.string),
    ingredients: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default DetailsClient;
