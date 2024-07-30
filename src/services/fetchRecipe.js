// ../../../services/fetchRecipe.js
export default async function fetchRecipe(id) {
  const res = await fetch(`https://dummyjson.com/recipes/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch recipe");
  }
  return await res.json();
}
