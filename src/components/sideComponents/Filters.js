import React, { useState } from "react";
import {
  SearchBoxWrapper,
  SearchInput,
  LoupeIcon,
  Button,
  ButtonContainer,
  Select,
  FlexContainer,
  SelectContainer,
  ArrowIcon,
} from "../../styles/filtersStyles";
import loupe from "../../assets/loupe.png";
import arrow from "../../assets/arrow.png";

const Filters = ({
  query,
  setQuery,
  handleFilter,
  activeButton,
  difficultyColors,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <FlexContainer>
      <SearchBoxWrapper>
        <LoupeIcon src={loupe} alt="search" />
        <SearchInput
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        ></SearchInput>
      </SearchBoxWrapper>
      <ButtonContainer>
        <Button
          onClick={() => handleFilter(0)}
          bgColor={activeButton === 0 ? difficultyColors.All[0] : "white"}
          borderColor={activeButton === 0 ? difficultyColors.All[1] : "black"}
          focusColor={difficultyColors.All}
          style={{
            color: activeButton === 0 ? difficultyColors.All[1] : "black",
          }}
        >
          All
        </Button>
        <Button
          onClick={() => handleFilter(1)}
          bgColor={activeButton === 1 ? difficultyColors.Easy[0] : "white"}
          borderColor={activeButton === 1 ? difficultyColors.Easy[1] : "black"}
          focusColor={difficultyColors.Easy}
          style={{
            color: activeButton === 1 ? difficultyColors.Easy[1] : "black",
          }}
        >
          Easy
        </Button>
        <Button
          onClick={() => handleFilter(2)}
          bgColor={activeButton === 2 ? difficultyColors.Medium[0] : "white"}
          borderColor={
            activeButton === 2 ? difficultyColors.Medium[1] : "black"
          }
          focusColor={difficultyColors.Medium}
          style={{
            color: activeButton === 2 ? difficultyColors.Medium[1] : "black",
          }}
        >
          Medium
        </Button>
        <Button
          onClick={() => handleFilter(3)}
          bgColor={activeButton === 3 ? difficultyColors.Hard[0] : "white"}
          borderColor={activeButton === 3 ? difficultyColors.Hard[1] : "black"}
          focusColor={difficultyColors.Hard}
          style={{
            color: activeButton === 3 ? difficultyColors.Hard[1] : "black",
          }}
        >
          Hard
        </Button>
      </ButtonContainer>
      <SelectContainer>
        <Select
          onChange={(e) => handleFilter(parseInt(e.target.value))}
          onClick={() => setOpen(!open)}
          onBlur={() => setOpen(false)}
        >
          <option value="0">All</option>
          <option value="1">Easy</option>
          <option value="2">Medium</option>
          <option value="3">Hard</option>
        </Select>
        <ArrowIcon src={arrow} open={open} />
      </SelectContainer>
    </FlexContainer>
  );
};

export default Filters;
