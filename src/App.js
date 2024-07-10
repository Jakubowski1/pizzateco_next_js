import React, { useState, useEffect } from 'react';
import './App.css';
import Recipes from './components/Recipes';
import fetchData from './services/fetchData'; 
import Pagination from './components/Pagination'; 

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const recipesPerPage = 10; 

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
      <Recipes recipes={recipes} loading={loading} />
      <Pagination loading={loading} loadMore={loadMore} />
    </div>
  );
}

export default App;
