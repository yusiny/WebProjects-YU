import React, { useState } from "react";
import styled from "styled-components";

export default function () {
  const [currentValue, setCurrentValue] = useState("추천순");
  const [isShowOptions, setShowOptions] = useState(false);

  const handleSelectedOption = (e) => {
    const { innerText } = e.target;
    setCurrentValue(innerText);
  };

  return (
    <SelectBox onClick={() => setShowOptions(!isShowOptions)}>
      <Label>
        {currentValue} <img src="/assets/ic_down.svg" />
      </Label>
      <SelectOptions show={isShowOptions}>
        <Option onClick={handleSelectedOption}>추천순</Option>
        <Option onClick={handleSelectedOption}>인기순</Option>
        <Option onClick={handleSelectedOption}>최신순</Option>
        <Option onClick={handleSelectedOption}>평점순</Option>
        <Option onClick={handleSelectedOption}>좋아요순</Option>
      </SelectOptions>
    </SelectBox>
  );
}

const SelectBox = styled.div`
  z-index: 2;
  position: relative;
  padding: 0 8px;
  border: 1px solid #abb0b5;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;

  &:hover {
    border-color: #616568;
  }

  @media screen and (max-width: 1020px) {
    margin: 5px 0;
    border: none;
  }
`;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  margin-left: 4px;
  text-align: center;

  img {
    margin-left: 8px;
  }
`;

const SelectOptions = styled.ul`
  position: absolute;
  list-style: none;
  top: 41px;
  left: 0;
  width: 100%;
  overflow: hidden;
  max-height: ${(props) => (props.show ? "none" : "0")};

  background-color: white;
  border-radius: 0 0 4px 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: black;
`;

const Option = styled.li`
  font-size: 14px;
  padding: 6px 8px;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #c0c0c0;
  }
`;
