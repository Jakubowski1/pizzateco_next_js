import styled, { keyframes } from "styled-components";
import Link from "next/link";

export const Container = styled.div`
  font-family: "Nunito Sans", sans-serif;
  display: flex;
  flex-wrap: wrap;
  padding: 0 5%;
  justify-content: center;
  margin: 0;
  row-gap: 40px;
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const blink = keyframes`
  50% {
    opacity: 0.3;
  }
`;

export const Footer = styled.div`
  text-align: center;
  font-family: "Just Me Again Down Here", cursive;
  padding: 20px;
  font-size: 50px;
  animation: ${blink} 1s ease-in infinite;
`;

export const NoRecipesMessage = styled.p`
  font-family: "Just Me Again Down Here", cursive;
  font-size: 80px;
  margin: 250px 0 100px 0;
  text-align: center;
`;

export const EmptySpace = styled.div`
  margin: 20px;
`;
