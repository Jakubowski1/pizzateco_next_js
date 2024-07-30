import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 660px;
  height: 460px;
  object-fit: cover;
  border: 1px solid black;
  border-radius: 10px;
  @media (max-width: 1760px) {
    margin-bottom: 50px;
  }
`;

const RecipeImage = ({ src, alt }) => <Image src={src} alt={alt} />;

export default RecipeImage;
