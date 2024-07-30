import fetchRecipe from "../../../services/fetchRecipe";
import DetailsClient from "../../../components/molecules/DetailsClient";

export const generateStaticParams = async () => {
  const response = await fetch("https://dummyjson.com/recipes");
  const data = await response.json();

  return data.recipes.map((recipe) => ({
    id: recipe.id.toString(),
  }));
};

const DetailsPage = async ({ params }) => {
  const { id } = params;
  const recipe = await fetchRecipe(id);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return <DetailsClient recipe={recipe} />;
};

export default DetailsPage;
