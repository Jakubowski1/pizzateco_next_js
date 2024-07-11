import axios from 'axios';

const fetchRecipe = async (id) => {

  try {
    const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
    console.log(response.data);
    return response.data; 
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export default fetchRecipe;
    