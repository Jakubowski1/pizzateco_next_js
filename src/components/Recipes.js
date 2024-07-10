import React from 'react';

const Recipes = ({ recipes, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }

    // Ensure recipes is an array
    if (!Array.isArray(recipes)) {
        return <h2>No recipes available</h2>;
    }

    return (
        <ul className='list-group mb-4'>
            {recipes.map((recipe) => (
                <li key={recipe.id} className='list-group-item'>
                    {recipe.name}
                </li>
            ))}
        </ul>
    );
};

export default Recipes;
