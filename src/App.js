import {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Recipes from './components/Recipes';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(10);

useEffect(() => {
  const fetchRecipes = async () => {
    setLoading(true);
    const res = await axios.get('https://dummyjson.com/recipes');
    setRecipes(res.data.recipes);
    setLoading(false);
  }
  fetchRecipes();
}, []);

console.log(recipes);
  return (
    <div className="container">
      <Recipes recipes={recipes} loading={loading} />
     
    </div>
  );
}

export default App;
