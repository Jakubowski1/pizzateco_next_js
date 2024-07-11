import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchRecipe from '../services/fetchRecipe';
import styled from 'styled-components';
import logo from '../assets/header.png';
import Header from './Header';
import RecipeImage from './RecipeImage';
import RecipeInfo from './RecipeInfo';
import RecipeInstructions from './RecipeInstructions';
import RecipeIngredients from './RecipeIngredients';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: space-between;
  text-align: center;
  
`;
const Main = styled.div`
background: #fffbeb;
 font-family: "Nunito Sans", sans-serif;

`;
const Back = styled.button`
  background: white;
  font-family: "Just Me Again Down Here", cursive;
  font-size: 32px;
  color: black;
  height: 48px;
  width: 130px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 40px 0px 40px 50px;
  padding: 4px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    box-shadow: 0px 0px 10px #ff990066;
  }
  &:disabled {
    display: none;
  }
`;

export default function Details() {
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const getRecipes = async () => {
      setLoading(true);
      try {
        const newRecipe = await fetchRecipe(id);
        setRecipe(prevRecipe => ({
          ...prevRecipe,
          ...newRecipe
        }));
      } catch (error) {
        console.error('Error fetching recipe:', error);
      } finally {
        setLoading(false);
      }
    };

    getRecipes();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Main>
      <Container>
        <Back>
          Go back
        </Back>
        <img src={logo} alt='logo' style={{ width: '80%', objectFit: 'cover' }} />
      </Container>
      
      <div style={{ display: 'flex', gap: '30px'}}>
        <RecipeImage src={recipe.image} alt={recipe.name} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Header title={recipe.name} tags={recipe.tags} />
        <RecipeInfo recipe={recipe} />
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <RecipeInstructions instructions={recipe.instructions} />
        <RecipeIngredients ingredients={recipe.ingredients} />
      </div>
      </Main>
  );
}
