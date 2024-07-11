import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import fetchRecipe from '../services/fetchRecipe'
import styled from 'styled-components';
import logo from '../assets//header.png';

const Box = styled.li`

 
  display: flex;
  flex-direction: row;

`;
const Image = styled.img`
  width: 30%;
 
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

const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
    justify-content: space-between;
    text-align: center;
`;
const Image2 = styled.img`
  width: 80%;
   object-fit: cover;
`;

const Back = styled.button`
  background: white;
  font-family: "Just Me Again Down Here", cursive;
  font-size: 32px;
  color: black;
  height: 48px;
  width: 130px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 40px 0px 40px 50px;
  padding: 4px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    box-shadow: 0px 0px 10px #ff990066;
  }
  &:disabled {
    display: none;
  }
`;

const Instruction = styled.ol`
  font-size: 32px;

`;
const Item = styled.li`
font-size:30px;
`;


export default function Details() {

const [recipe, setRecipe] = useState([]);
const [loading, setLoading] = useState(false);
const params = useParams();
const id = params.id;
useEffect(() => {
    const getRecipes = async () => {
    
      const newRecipe = await fetchRecipe(id);
      setRecipe(newRecipe);
        return recipe;    
    };
    getRecipes();
  }, [id]);

  const difficultyColors = {
    Easy: ['#E6F7E5','#04B100'],
    Medium: ['#FFF5E5','#FF9900'],
    Hard: ['#FAE7E7','#D20C0C']
  };

  return (
    <section>
        <Container>
            <Back>
                Go back
            </Back>
            <Image2 src={logo} alt='logo' />

        </Container>
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
                    <InfoItem>Level
                        <Difficulty color={difficultyColors[recipe.difficulty]}>
                            {recipe.difficulty}
                        </Difficulty>
                    </InfoItem>
                    <InfoItem>Servings
                        <Tag>{recipe.servings}</Tag>
                    </InfoItem>
                    <InfoItem>
                        <Icon>🍴Cuisine</Icon>
                        <Tag1>{recipe.cuisine}</Tag1>
                    </InfoItem>
                    <InfoItem>
                        <Icon>⏲ Cooking Time</Icon>
                        <Tag2>{recipe.cookTimeMinutes} min</Tag2>
                    </InfoItem>
                </Info>

            </Content>
        </Box>
        <Box>
            <Instruction>
                {recipe.instructions.map((inst) => (
                <Item key={inst}>
                    {inst}
                </Item>
                ))
                }
            </Instruction>
            <Instruction>
                {recipe.ingredients.map((ingredient) => (
                <Item key={ingredient}>
                    {ingredient}
                </Item>
                ))
                }
            </Instruction>
        </Box>
    </section>
   

  )
}
