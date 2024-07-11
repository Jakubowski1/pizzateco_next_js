import styled from "styled-components";

export const Button = styled.button`
  border: 1px solid black;
  border-radius: 10px;
  color: black;
  font-size: 20px;
  padding: 4px 20px;
  width: 110px;
  height: 35px;
  margin: 0;
  cursor: pointer;
  background-color: ${(props) => props.bgColor || "white"};
  border-color: ${(props) => props.borderColor || "black"};

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    background-color: ${(props) => props.focusColor[0] || "white"};
    color: ${(props) => props.focusColor[1] || "black"};
    border-color: ${(props) => props.focusColor[1] || "black"};
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const SearchBoxWrapper = styled.div`
  position: relative;
  width: 320px;
  margin-left: 16%;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px 10px 10px 40px;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 20px;

  &:focus {
    outline: none;
    box-shadow: 0 0 10px yellow;
  }
  @media (max-width: 1000px) {
    transform: translateX(-20%);
  }
`;

export const LoupeIcon = styled.img`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 25px;
  height: 25px;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  flex-wrap: nowrap;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    margin: 30px;
    gap: 10px;
    justify-content: center;
  }
`;

export const SelectContainer = styled.div`
  position: relative;
  width: 200px;
  margin: 5px;
`;

export const Select = styled.select`
  display: none;
  width: 200px;
  padding: 10px;
  font-size: 32px;
  border-radius: 10px;
  border: 1px solid black;
  cursor: pointer;
  appearance: none;
  font-family: "Just Me Again Down Here", cursive;
  --highlight-color: FF9900;
  &:focus {
    outline: none;
    box-shadow: 0 0 10px #fff5e5;
    border-color: #fff5e5;
  }

  @media (max-width: 1000px) {
    display: block;
    width: 100%;
  }
  option:hover {
    background-color: var(--highlight-color);
  }
`;

export const ArrowIcon = styled.img`
  display: none;
  position: absolute;
  top: 50%;
  right: 10px;
  width: 20px;
  height: 20px;
  transform: translateY(-50%)
    ${(props) => (props.open ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.2s;
  @media (max-width: 1000px) {
    display: block;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin: 0 100px 0 100px;
  gap: 20px;
  @media (max-width: 1000px) {
    margin: 0;

    align-items: center;
  }
`;
