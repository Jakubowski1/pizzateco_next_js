import React from "react";
import styled from "styled-components";

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 16px;
  gap: 10px;
`;

const Tag = styled.span`
  color: #ff9900;
  padding: 2px 20px;
  border: 1px solid #ff9900;
  border-radius: 10px;
  font-size: 16px;
`;

const Title = styled.h2`
  font-size: 80px;
  margin: 0;
  margin-bottom: 10px;
  color: #333;
  font-family: "Just Me Again Down Here", cursive;
  font-weight: 400;
  font-style: normal;
`;

const Header = ({ title, tags }) => (
  <div>
    <Tags>
      {tags?.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </Tags>
    <Title>{title}</Title>
  </div>
);

export default Header;
