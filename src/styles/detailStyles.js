import styled from "styled-components";

export const Main = styled.div`
  background: #fffbeb;
  font-family: "Nunito Sans", sans-serif;
  padding: 20px;
  margin: 0 150px;
  @media (max-width: 1760px) {
    margin: 0 auto;
  }
`;

export const Container = styled.div`
  margin-left: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 90px;
  text-align: center;
  margin-bottom: 40px;
  justify-content: space-between;
  @media (max-width: 1400px) {
    margin: 0;
  }
`;

export const Logo = styled.img`
  width: 80%;
  object-fit: cover;
  margin-bottom: 20px;
  @media (max-width: 1400px) {
    width: 100%;
  }
`;

export const BackButton = styled.button`
  background: white;
  font-family: "Just Me Again Down Here", cursive;
  font-size: 30px;
  color: black;
  height: 48px;
  width: 130px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  min-width: 130px;
  align-items: center;
  border-radius: 10px;
  padding: 4px 20px;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  margin-bottom: 20px;
  &:hover {
    box-shadow: 0px 0px 10px #ff990066;
  }
  @media (max-width: 1400px) {
    display: none;
  }
`;

export const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 100px;
  min-gap: 50px;
  @media (max-width: 1760px) {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`;

export const FlexRow2 = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 100px;
  min-gap: 50px;
  @media (max-width: 1760px) {
    flex-direction: column-reverse;
    justify-content: space-around;
    align-items: center;
  }
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

//used in RecipeInfo below

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 600px;
`;

export const InfoItem = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  font-size: 20px;
`;

export const Icon = styled.img`
  height: 30px;
`;

export const Tag = styled.span`
  color: ${(props) => props.color || "#000"};
  padding: 2px 20px;
  border: 1px solid ${(props) => props.color || "#000"};
  border-radius: 10px;
  font-size: 16px;
`;

export const Difficulty = styled.div`
  background: ${(props) => props.color[0] || "#ccc"};
  color: ${(props) => props.color[1] || "#ccc"};
  padding: 4px 20px;
  border: 1px solid ${(props) => props.color[1]};
  border-radius: 10px;
  font-size: 16px;
  text-align: left;
  margin-top: 10px;
  width: fit-content;
`;
export const Box = styled.div`
  justify-content: space-between;
`;
