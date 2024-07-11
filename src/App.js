import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Recipes from "./components/mainComponents/Recipes";
import fetchData from "./services/fetchData";
import Pagination from "./components/mainComponents/Pagination";
import Details from "./components/detailComponents/Details";
import { Container, Image, StyledLink } from "./styles/appStyles";
import Filters from "./components/mainComponents/Filters";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [activeButton, setActiveButton] = useState(0);
  const [query, setQuery] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const recipesPerPage = 9;
  const background = "backgroundPicture.png";
  const difficultyColors = {
    Easy: ["#E6F7E5", "#04B100"],
    Medium: ["#FFF5E5", "#FF9900"],
    Hard: ["#FAE7E7", "#D20C0C"],
    All: ["#E9EDFD", "#244FE9"],
  };

  useEffect(() => {
    const getRecipes = async () => {
      setLoading(true);
      const newRecipes = await fetchData(page, recipesPerPage);
      setRecipes((prevRecipes) => {
        const recipeNames = new Set(prevRecipes.map((recipe) => recipe.name));
        const filteredRecipes = newRecipes.filter(
          (recipe) => !recipeNames.has(recipe.name)
        );
        return [...prevRecipes, ...filteredRecipes];
      });
      setHasMore(newRecipes.length === recipesPerPage);
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
    return recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  const searchRecipes = getFilteredRecipes(query, filteredRecipes);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleFilter = (level) => {
    let recipesByLevel;
    switch (level) {
      case 1:
        recipesByLevel = recipes.filter(
          (recipe) => recipe.difficulty === "Easy"
        );
        break;
      case 2:
        recipesByLevel = recipes.filter(
          (recipe) => recipe.difficulty === "Medium"
        );
        break;
      case 3:
        recipesByLevel = recipes.filter(
          (recipe) => recipe.difficulty === "Hard"
        );
        break;
      case 0:
      default:
        recipesByLevel = recipes;
    }
    setFilteredRecipes(recipesByLevel);
    setActiveButton(level);
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Image src={background} alt="photo" />
              <Filters
                query={query}
                setQuery={setQuery}
                handleFilter={handleFilter}
                activeButton={activeButton}
                difficultyColors={difficultyColors}
              />
              <Container>
                {searchRecipes.length === 0 ? (
                  <p
                    style={{
                      fontFamily: '"Just Me Again Down Here", cursive',
                      fontSize: "80px",
                      marginTop: "80px",
                      textAlign: "center",
                    }}
                  >
                    Sorry, looks like nothing matches your filters :(
                  </p>
                ) : (
                  searchRecipes.map((recipe) => (
                    <StyledLink
                      key={recipe.id}
                      to={`/details/${recipe.id}/${recipe.name}`}
                    >
                      <Recipes recipe={recipe} />
                    </StyledLink>
                  ))
                )}
              </Container>
              {searchRecipes.length > 0 && (
                <Pagination
                  loading={loading}
                  loadMore={loadMore}
                  hasMore={hasMore}
                />
              )}
            </div>
          }
        />
        <Route path="/details/:id/:name" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
