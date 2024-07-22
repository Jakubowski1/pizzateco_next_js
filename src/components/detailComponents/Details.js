import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import fetchRecipe from "../../services/fetchRecipe";
import logo from "../../assets/header.png";
import Header from "./Header";
import RecipeImage from "./RecipeImage";
import RecipeInfo from "./RecipeInfo";
import RecipeInstructions from "./RecipeInstructions";
import RecipeIngredients from "./RecipeIngredients";

const Main = styled.div`
  background: #fffbeb;
  font-family: "Nunito Sans", sans-serif;
  padding: 20px;
  margin: 0 200px;
`;

const Container = styled.div`
  margin-left: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 90px;
  text-align: center;
  margin-bottom: 40px;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 80%;
  object-fit: cover;
  margin-bottom: 20px;
`;

const BackButton = styled.button`
  background: white;
  font-family: "Just Me Again Down Here", cursive;
  font-size: 24px;
  color: black;
  height: 48px;
  width: 130px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  min-width: 130px;
  align-items: center;
  border-radius: 10px;
  padding: 4px 20px;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  margin-bottom: 20px;
  &:hover {
    box-shadow: 0px 0px 10px #ff990066;
  }
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 100px;
  min-gap: 50px;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

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
        <Logo src={logo} alt="logo" />
      </Container>
      <Main>
        <FlexRow>
          <RecipeImage src={recipe.image} alt={recipe.name} />
          <FlexColumn>
            <Header title={recipe.name} tags={recipe.tags} />
            <RecipeInfo recipe={recipe} />
          </FlexColumn>
        </FlexRow>

        <FlexRow>
          <RecipeInstructions instructions={recipe.instructions} />
          <RecipeIngredients ingredients={recipe.ingredients} />
        </FlexRow>
      </Main>
    </>
  );
}
