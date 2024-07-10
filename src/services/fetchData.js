import axios from 'axios';

const fetchData = async (page, limit) => {
  const skip = (page - 1) * limit;
  try {
    const response = await axios.get('https://dummyjson.com/recipes', {
      params: {
        limit,
        skip,
        
      },
    });
    console.log(response.data.recipes);
    return response.data.recipes; 
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export default fetchData;
    