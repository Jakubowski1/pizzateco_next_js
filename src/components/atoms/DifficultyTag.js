import React from "react";
import styled from "styled-components";

const StyledDifficultyTag = styled.span`
  background-color: ${(props) => props.color[0]};
  color: ${(props) => props.color[1]};
  border: 1px solid ${(props) => props.color[1]};
  padding: 5px 10px;
  border-radius: 10px;
  height: 26px;
`;

const DifficultyTag = ({ color, children }) => {
  return <StyledDifficultyTag color={color}>{children}</StyledDifficultyTag>;
};

export default DifficultyTag;
