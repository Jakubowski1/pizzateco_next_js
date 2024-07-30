import React from "react";
import cuisine from "../../assets/cuisine.png";
import cooking from "../../assets/time.png";
import level from "../../assets/level.png";
import serving from "../../assets/servings.png";
import Icon from "../atoms/Icon";
import DifficultyTag from "../atoms/DifficultyTag";
import Tag from "../atoms/Tag";
import Box from "../atoms/Box";
import InfoItem from "../atoms/InfoItem";
import Info from "../atoms/Info";

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
          <Icon src={level.src} alt="icon" />
          Level
        </Box>
        <DifficultyTag color={difficultyColor}>
          {recipe.difficulty}
        </DifficultyTag>
      </InfoItem>
      <InfoItem>
        <Box>
          <Icon src={serving.src} alt="icon" />
          Servings
        </Box>
        <Tag color="#C64F00">{recipe.servings}</Tag>
      </InfoItem>
      <InfoItem>
        <Box>
          <Icon src={cuisine.src} alt="icon" /> Cuisine
        </Box>
        <Tag color="#D20C0C">{recipe.cuisine}</Tag>
      </InfoItem>
      <InfoItem>
        <Box>
          <Icon src={cooking.src} alt="photo" /> Cooking Time
        </Box>
        <Tag color="#244FE9">{recipe.cookTimeMinutes} min</Tag>
      </InfoItem>
    </Info>
  );
};

export default RecipeInfo;
