import React from "react";
import styled from "styled-components";

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;
`;

const Info = ({ children }) => {
  return <StyledInfo>{children}</StyledInfo>;
};

export default Info;
