import React from "react";
import {
  Box,
  Image,
  Content,
  Title,
  Tags,
  Tag,
  Tag1,
  Tag2,
  Info,
  InfoItem,
  Icon,
  Difficulty,
} from "../../styles/recipesStyles";

const Recipes = ({ recipe }) => {
  if (!recipe) {
    return null;
  }
  const difficultyColors = {
    Easy: ["#E6F7E5", "#04B100"],
    Medium: ["#FFF5E5", "#FF9900"],
    Hard: ["#FAE7E7", "#D20C0C"],
  };

  return (
    <Box>
      <Image src={recipe.image} alt={recipe.name} />
      <Content>
        <Tags>
          {recipe.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
        <Title>{recipe.name}</Title>
        <Info>
          <InfoItem>
            <Icon>🍴Cuisine</Icon>
            <Tag1>{recipe.cuisine}</Tag1>
          </InfoItem>
          <InfoItem>
            <Icon>⏲ Cooking Time</Icon>
            <Tag2>{recipe.cookTimeMinutes} min</Tag2>
          </InfoItem>
        </Info>
        <Difficulty color={difficultyColors[recipe.difficulty]}>
          {recipe.difficulty}
        </Difficulty>
      </Content>
    </Box>
  );
};

export default Recipes;
