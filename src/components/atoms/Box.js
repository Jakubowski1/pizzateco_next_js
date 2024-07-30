import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  display: flex;
  align-items: center;
`;

const Box = ({ children }) => {
  return <StyledBox>{children}</StyledBox>;
};

export default Box;
