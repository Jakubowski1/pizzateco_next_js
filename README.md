# PizzaTeco: Preparation for Software Engineering position

## Overview

 Users can search for recipes by name, view detailed information about each recipe, and paginate through multiple pages of recipes. 
 The app is built with React and styled-components and utilizes a custom dummy API for fetching recipe data.

## Features

- **Search for recipes by name**
- **Filter recipes by difficulty level** (Easy, Medium, Hard)
- **View detailed information about each recipe**
- **Pagination** for navigating through multiple pages of recipes
- **Responsive design** for mobile and desktop views

## Technologies Used

- React
- React Router
- styled-components
- Custom API for fetching recipes

## Usage

1. **Start the development server:**
    ```bash
    npm start
    ```

2. **Open your browser and navigate to:** 
    [http://localhost:3000](http://localhost:3000)

## Project Structure

- `src/assets`: Contains image assets
  - `cuisine.png`
  - `header.png`
  - `level.png`
  - `loupe.png`
  - `mainLogo.png`
  - `servings.png`
  - `time.png`

- `src/components`: Contains React components for the app
  - `detailComponents`
    - `Details.js`
    - `Header.js`
    - `RecipeImage.js`
    - `RecipeInfo.js`
    - `RecipeIngredients.js`
    - `RecipeInstructions.js`
  - `mainComponents`
    - `Filters.js`
    - `Pagination.js`
    - `Recipes.js`

- `src/services`: Contains API service for fetching recipe data
  - `fetchData.js`
  - `fetchRecipe.js`
  - `FirebaseConfig.js`

- `src/styles`: Contains styled-components styles
  - `App.css`
  - `appStyles.js`
  - `filtersStyles.js`
  - `recipesStyles.js`

- `App.js`: Main application component
- `App.test.js`: Application tests
- `index.css`: Global CSS (not used)
- `index.js`: Entry point of the application
- `reportWebVitals.js`: For measuring performance
- `setupTests.js`: Test setup file


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- I had fun.
