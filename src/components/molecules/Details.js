import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import fetchRecipe from "../../services/fetchRecipe";
import logo from "../../assets/header.png";
import Header from "../atoms/Header";
import RecipeImage from "../atoms/RecipeImage";
import RecipeInfo from "./RecipeInfo";
import RecipeInstructions from "../atoms/RecipeInstructions";
import RecipeIngredients from "./RecipeIngredients";
import {
  Main,
  Container,
  Logo,
  BackButton,
  FlexRow,
  FlexRow2,
  FlexColumn,
} from "../../styles/detailStyles";

export default function Details() {
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const newRecipe = await fetchRecipe(id);
        setRecipe((prevRecipe) => ({
          ...prevRecipe,
          ...newRecipe,
        }));
      } catch (error) {
        console.error("Error fetching recipe:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Container>
        <BackButton onClick={() => navigate(-1)}>Go back</BackButton>
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
}
