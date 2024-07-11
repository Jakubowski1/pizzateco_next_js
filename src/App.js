import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Recipes from './components/Recipes';
import styled from 'styled-components';
import fetchData from './services/fetchData'; 
import Pagination from './components/Pagination'; 
import Details from "./components/Details";

const Container = styled.ul`
  font-family: "Nunito Sans", sans-serif;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  justify-content: center;
  margin:0;
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

function App() {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
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

  useEffect(() => {
    setFilteredRecipes(recipes);
  }, [recipes]);

  const getFilteredRecipes = (query, recipes) => {
    if (!query) {
      return recipes;
    }
    return recipes.filter(recipe => recipe.name.toLowerCase().includes(query.toLowerCase()));
  }

  const [query, setQuery] = useState("");
  const searchRecipes = getFilteredRecipes(query, filteredRecipes);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleFilter = (level) => {
    let recipesByLevel;
    switch (level) {
      case 1:
        recipesByLevel = recipes.filter(recipe => recipe.difficulty === "Easy");
        break;
      case 2:
        recipesByLevel = recipes.filter(recipe => recipe.difficulty === "Medium");
        break;
      case 3:
        recipesByLevel = recipes.filter(recipe => recipe.difficulty === "Hard");
        break;
      case 0:
        recipesByLevel = recipes;
    }
    setFilteredRecipes(recipesByLevel);
  }

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Image src={background} alt="photo" />
              <Container>
                <label>Search</label>
                <input type="text" onChange={e => setQuery(e.target.value)} />
                <button onClick={() => handleFilter(0)}>All</button>
                <button onClick={() => handleFilter(1)}>Easy</button>
                <button onClick={() => handleFilter(2)}>Medium</button>
                <button onClick={() => handleFilter(3)}>Hard</button>

                {searchRecipes.map((recipe) => (
                  <StyledLink key={recipe.id} to={`/details/${recipe.id}/${recipe.name}`}>
                    <Recipes recipe={recipe} />
                  </StyledLink>
                ))}
              </Container>
              <Pagination loading={loading} loadMore={loadMore} />
            </div>
          }
        />
        <Route path="/details/:id/:name" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
