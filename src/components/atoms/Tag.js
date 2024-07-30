import React from "react";
import styled from "styled-components";

const StyledTag = styled.span`
  border: 1px solid ${(props) => props.color || "#f0f0f0"};
  color: ${(props) => props.color || "#f0f0f0"};
  padding: 5px 10px;
  border-radius: 10px;
  height: 26px;
`;

const Tag = ({ color, children }) => {
  return <StyledTag color={color}>{children}</StyledTag>;
};

export default Tag;
