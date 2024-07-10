import React from 'react';
import styled from 'styled-components';

const Box = styled.li`

  border: 1px solid #000000;
  border-radius: 10px;
  overflow: hidden;
  width: 420px;
  height:588px;
  margin: 20px 40px 20px 40px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;
const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;

`;

const Content = styled.div`
  display: flex;
  flex-direction:column;
  flex-grow:1;
  padding: 20px;
  text-align: left;
  justify-content: space-between;
  border-top: 1px solid #000000;

`;

const Title = styled.h2`
  font-size: 40px;
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
  font-size: 16px;
  gap: 10px;
`;

const Tag = styled.span`
  
  color: #FF9900;
  padding: 2px 20px;
  border: 1px solid #FF9900;
  border-radius: 10px;
    font-size: 16px;

`;
const Tag1 = styled.span`
  
  color: #244FE9;
  padding: 2px 20px;
  border: 1px solid #244FE9;
  border-radius: 10px;
    font-size: 16px;

`;
const Tag2 = styled.span`
  
  color: #D20C0C;
  padding: 2px 20px;
  border: 1px solid #D20C0C;
  border-radius: 10px;
    font-size: 16px;

  
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InfoItem = styled.div`
justify-content: space-between;
  display: flex;
  align-items: center;
  font-size: 20px;
`;

const Icon = styled.span`
  margin-right: 5px;
`;

const Difficulty = styled.div`
  background: ${(props) => props.color[0] || '#ccc'};
  color:  ${(props) => props.color[1] || '#ccc'};
  padding: 4px 20px ;
  border: 1px solid ${(props) => props.color[1]};
  border-radius: 10px;
  font-size: 16px;
  text-align: left;
  margin-top: 10px;
  width:fit-content;
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
