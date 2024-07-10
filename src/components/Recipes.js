import React from 'react';

const Recipes = ({ recipes, loading }) => {
  if (loading && recipes.length === 0) {
    return <h2>Loading...</h2>;
  }

  if (!Array.isArray(recipes) || recipes.length === 0) {
    return <h2>No recipes available</h2>;
  }

  return (
    <ul className='list-group mb-4'>
      {recipes.map((recipe,index) => (
        <li key={index} className='list-group-item'>
          {recipe.name}
        </li>
      ))}
    </ul>
  );
};

export default Recipes;
