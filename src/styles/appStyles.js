import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.ul`
  font-family: "Nunito Sans", sans-serif;
  display: flex;
  flex-wrap: wrap;
  padding: 0 5%;
  justify-content: center;
  margin: 0;
  row-gap: 40px;
`;

export const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
