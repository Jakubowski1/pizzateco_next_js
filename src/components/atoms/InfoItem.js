import React from "react";
import styled from "styled-components";

const StyledInfoItem = styled.div`
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
`;

const InfoItem = ({ children }) => {
  return <StyledInfoItem>{children}</StyledInfoItem>;
};

export default InfoItem;
