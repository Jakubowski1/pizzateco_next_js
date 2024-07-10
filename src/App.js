import React, { useState, useEffect } from 'react';
import './App.css';
import Recipes from './components/Recipes';
import styled from 'styled-components';
import fetchData from './services/fetchData'; 
import Pagination from './components/Pagination'; 

const Container = styled.ul`
display: flex;
flex-wrap: wrap;
padding: 0;
justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const recipesPerPage = 9; 
  const background = 'backgroundPicture.png';


  useEffect(() => {
    const getRecipes = async () => {
      setLoading(true);
      const newRecipes = await fetchData(page, recipesPerPage);
      setRecipes(prevRecipes => {
        const recipeNames = new Set(prevRecipes.map(recipe => recipe.name));
        const filteredRecipes = newRecipes.filter(recipe => !recipeNames.has(recipe.name));
        return [...prevRecipes, ...filteredRecipes];
      });
      setLoading(false);
    };
    getRecipes();
  }, [page]);
  

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
 };

  return (
    <div className="container">
       <Image src={background} alt="photo"/>
      <Container>

  
        {recipes && recipes.map((recipe) => (
        <Recipes key={recipe.id} recipe={recipe} />
        ))}
      </Container>
      <Pagination loading={loading} loadMore={loadMore} />
    </div>
    
  );
  
}

export default App;
