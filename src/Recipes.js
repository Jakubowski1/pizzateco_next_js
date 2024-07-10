import React from 'react'

const Recipes = ({recipes, loading}) => {
    if(loading){
        return <h2>loading...</h2>
    }

    return <ul className=' list-group mb-4'></ul>

};

export default Recipes;