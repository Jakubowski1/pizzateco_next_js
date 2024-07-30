import styled from "styled-components";

export const Button = styled.button.withConfig({
  shouldForwardProp: (prop) =>
    !["bgColor", "borderColor", "focusColor"].includes(prop),
})`
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

  @media (max-width: 1290px) {
    width: 90px;
    height: 30px;
    font-size: 16px;
    padding: 4px 16px;
  }
`;

export const SearchBoxWrapper = styled.div`
  position: relative;
  width: 320px;

  @media (max-width: 1290px) {
  }
`;

export const SearchInput = styled.input`
  box-sizing: border-box;
  width: 320px;
  padding: 10px 10px 10px 40px;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 20px;

  &:focus {
    outline: none;
    box-shadow: 0 0 10px yellow;
  }
`;

export const LoupeIcon = styled.img`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 25px;
  height: 25px;

  @media (max-width: 1290px) {
    width: 20px;
    height: 20px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin: 20px auto;
  flex-wrap: nowrap;

  @media (max-width: 1290px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
    justify-content: center;
  }
`;

export const SelectContainer = styled.div`
  display: none;
  position: relative;
  width: 320px;

  @media (max-width: 1290px) {
    display: flex;
  }
`;

export const Select = styled.select`
  display: none;
  width: 100%;
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

  @media (max-width: 1290px) {
    display: block;
    font-size: 24px;
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

  @media (max-width: 1290px) {
    display: block;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 1290px) {
    display: none;
  }
`;
