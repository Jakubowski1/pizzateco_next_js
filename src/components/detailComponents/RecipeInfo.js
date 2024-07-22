import React from "react";
import styled from "styled-components";
import cuisine from "../../assets/cuisine.png";
import cooking from "../../assets/time.png";
import level from "../../assets/level.png";
import serving from "../../assets/servings.png";

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 600px;
`;

const InfoItem = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  font-size: 20px;
`;

const Icon = styled.img`
  height: 30px;
`;

const Tag = styled.span`
  color: ${(props) => props.color || "#000"};
  padding: 2px 20px;
  border: 1px solid ${(props) => props.color || "#000"};
  border-radius: 10px;
  font-size: 16px;
`;

const Difficulty = styled.div`
  background: ${(props) => props.color[0] || "#ccc"};
  color: ${(props) => props.color[1] || "#ccc"};
  padding: 4px 20px;
  border: 1px solid ${(props) => props.color[1]};
  border-radius: 10px;
  font-size: 16px;
  text-align: left;
  margin-top: 10px;
  width: fit-content;
`;

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

  const Box = styled.div`
    justify-content: space-between;
  `;
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
