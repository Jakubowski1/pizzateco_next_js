import React from 'react'

export const Card = () => {
    const Box = styled.li`
    text-align: center;
    margin-top: 20px;
  `;
  const Title = styled.div`
  text-align: center;
  margin-top: 20px;
`;
  return (
    <Box key = {index}>
       
          {recipe.name}
    
    </Box>
  )
}
