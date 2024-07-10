import React from 'react';
import styled from 'styled-components';

const Box = styled.li`
  list-style: none;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 500px;
  height:700px;
  margin: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Nunito Sans';
  font-weight: 400;
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 20px;
  text-align: left;
`;

const Title = styled.h2`
  font-size: 2.9em;
  margin: 0;
  margin-bottom: 10px;
  color: #333;
  font-family: "Just Me Again Down Here", cursive;
  font-weight: 400;
  font-style: normal;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
  gap: 5px;
`;

const Tag = styled.span`
  
  color: #D20C0C;
  padding: 5px 10px;
  border: 1px solid #D20C0C;
  border-radius: 25px;
  font-size: 0.8em;
`;
const Tag1 = styled.span`
  
  color: #244FE9;
  padding: 5px 10px;
  border: 1px solid #244FE9;
  border-radius: 25px;
  font-size: 0.8em;
`;
const Tag2 = styled.span`
  
  color: #C65F00;
  padding: 5px 10px;
  border: 1px solid #C65F00;
  border-radius: 25px;
  font-size: 0.8em;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9em;
`;

const Icon = styled.span`
  margin-right: 5px;
`;

const Difficulty = styled.div`
  background: ${(props) => props.color[0] || '#ccc'};
  color:  ${(props) => props.color[1] || '#ccc'};
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.8em;
  text-align: center;
  margin-top: 10px;
`;

const Recipes = ({ recipe }) => {
  if (!recipe) {
    return null;
  }
  const difficultyColors = {
    Easy: ['#E6F7E5','#04B100'],
    Medium: ['#FFF5E5','#FF9900'],
    Hard: ['#FAE7E7','#D20C0C']
  };


  return (
    <Box>
    <Image src={recipe.image} alt={recipe.name} />
    <Content>
      <Tags>
        {recipe.tags.map((tag) => (
          <Tag key={tag}>
            {tag}
          </Tag>
        ))}
      </Tags>
      <Title>{recipe.name}</Title>
      <Info>
        <InfoItem>
          <Icon>🍴</Icon>
          <span>Cuisine <Tag1 >{recipe.cuisine}</Tag1></span>
        </InfoItem>
        <InfoItem>
          <Icon>⏲</Icon>
          <span>Cooking Time <Tag2 color="#3498db">{recipe.cookTimeMinutes} min</Tag2></span>
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
