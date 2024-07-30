// NotFound.js
import React from "react";
import styled from "styled-components";
import notFoundImage from "../../assets/pizzaguy.png";
import Link from "next/link";

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

export default function NotFound() {
  return (
    <Container>
      <Image src={notFoundImage.src} alt="404 Not Found" />
      <Title>404</Title>
      <Message>Oops! The page you're looking for doesn't exist.</Message>
      <Link href="/">Return Home</Link>
    </Container>
  );
}
