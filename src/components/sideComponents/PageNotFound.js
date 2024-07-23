// NotFound.js
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import notFoundImage from "../../assets/pizzaguy.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #fff8e1;
  font-family: "Nunito Sans", sans-serif;
`;

const Image = styled.img`
  object-fit: cover;
`;

const Title = styled.h1`
  font-size: 48px;
  color: #d32f2f;
  font-family: Nunito Sans;
`;

const Message = styled.p`
  font-size: 24px;
  color: #555;
  font-family: Nunito Sans;
`;

const Button = styled.button`
  background: #d32f2f;
  font-size: 20px;
  color: white;
  height: 48px;
  width: 200px;
  font-family: Nunito Sans;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;
  &:hover {
    background-color: #b71c1c;
  }
`;

export default function NotFound() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <Container>
      <Image src={notFoundImage} alt="404 Not Found" />
      <Title>404</Title>
      <Message>Oops! The page you're looking for doesn't exist.</Message>
      <Button onClick={goHome}>Go to Home</Button>
    </Container>
  );
}
