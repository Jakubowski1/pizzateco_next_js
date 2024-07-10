import logo from './logo.svg';
import {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(10);

useEffect(() => {
  const fetchRecipes = async () => {
    setLoading(true);
    const res = await axios.get('https://dummyjson.com/recipes');
    setRecipes(res.data);
    setLoading(false);
  }
  fetchRecipes();
}, []);

console.log(recipes);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
