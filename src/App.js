import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router,Route,Routes, Link, useNavigate} from 'react-router-dom';
import './App.css';
import Recipes from './components/Recipes';
import styled from 'styled-components';
import fetchData from './services/fetchData'; 
import Pagination from './components/Pagination'; 
import Details from "./components/Details";


const Container = styled.ul`
display: flex;
flex-wrap: wrap;
padding: 0;
justify-content: center;
background: #fffbeb;
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  background: #fffbeb;

`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  background: #fffbeb;

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
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Image src={background} alt="photo" />
              <Container>
                {recipes.map((recipe) => (
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
    </Router>
  </div>
);
}

export default App;
