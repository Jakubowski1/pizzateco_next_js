import React from "react";
import cuisine from "../../assets/cuisine.png";
import cooking from "../../assets/time.png";
import level from "../../assets/level.png";
import serving from "../../assets/servings.png";
import {
  Info,
  InfoItem,
  Icon,
  Tag,
  Difficulty,
  Box,
} from "../../styles/detailStyles";

const RecipeInfo = ({ recipe }) => {
  const difficultyColors = {
    Easy: ["#E6F7E5", "#04B100"],
    Medium: ["#FFF5E5", "#FF9900"],
    Hard: ["#FAE7E7", "#D20C0C"],
  };

  const difficultyColor = difficultyColors[recipe.difficulty] || [
    "#ccc",
    "#000",
  ];

  return (
    <Info>
      <InfoItem>
        <Box>
          <Icon src={level} alt="icon" />
          Level
        </Box>
        <Difficulty color={difficultyColor}>{recipe.difficulty}</Difficulty>
      </InfoItem>
      <InfoItem>
        <Box>
          <Icon src={serving} alt="icon" />
          Servings
        </Box>
        <Tag>{recipe.servings}</Tag>
      </InfoItem>
      <InfoItem>
        <Box>
          <Icon src={cuisine} alt="icon" /> Cuisine
        </Box>
        <Tag color="#244FE9">{recipe.cuisine}</Tag>
      </InfoItem>
      <InfoItem>
        <Box>
          <Icon src={cooking} alt="photo" /> Cooking Time
        </Box>
        <Tag color="#D20C0C">{recipe.cookTimeMinutes} min</Tag>
      </InfoItem>
    </Info>
  );
};

export default RecipeInfo;
