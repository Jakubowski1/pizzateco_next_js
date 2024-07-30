"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Filters from "../components/molecules/Filters";
import fetchData from "../services/fetchData";
import Recipes from "../components/organisms/Recipes";
import usePageBottom from "../utils/usePageBottom";
import background from "../assets/backgroundPicture.png";
import {
  Container,
  BackgroundImage,
  StyledLink,
  Footer,
  NoRecipesMessage,
  EmptySpace,
} from "../styles/homePageStyles";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [activeButton, setActiveButton] = useState(0);
  const [query, setQuery] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const recipesPerPage = 9;

  const difficultyColors = {
    Easy: ["#E6F7E5", "#04B100"],
    Medium: ["#FFF5E5", "#FF9900"],
    Hard: ["#FAE7E7", "#D20C0C"],
    All: ["#E9EDFD", "#244FE9"],
  };

  useEffect(() => {
    const initialLoad = async () => {
      const newRecipes = await fetchData(page, recipesPerPage);

      setLoading(false);

      setRecipes((prevRecipes) => {
        const recipeNames = new Set(prevRecipes.map((recipe) => recipe.name));
        const filteredRecipes = newRecipes.filter(
          (recipe) => !recipeNames.has(recipe.name)
        );
        return [...prevRecipes, ...filteredRecipes];
      });
      setHasMore(newRecipes.length === recipesPerPage);
    };
    initialLoad();
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

  usePageBottom(loadMore);

  return (
    <div>
      <BackgroundImage src={background.src} alt="photo" />
      <Filters
        query={query}
        setQuery={setQuery}
        handleFilter={handleFilter}
        activeButton={activeButton}
        difficultyColors={difficultyColors}
      />
      <Container>
        {searchRecipes.length === 0 && !loading ? (
          <NoRecipesMessage>
            Sorry, looks like nothing matches your filters :(
          </NoRecipesMessage>
        ) : (
          searchRecipes.map((recipe) => (
            <StyledLink key={recipe.id} href={`/details/${recipe.id}`}>
              <Recipes recipe={recipe} />
            </StyledLink>
          ))
        )}
      </Container>
      {!loading && hasMore ? (
        <Footer>Loading more recipes...</Footer>
      ) : (
        <EmptySpace />
      )}
    </div>
  );
};

export default HomePage;
