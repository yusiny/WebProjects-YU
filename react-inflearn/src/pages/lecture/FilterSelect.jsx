import React, { useState } from "react";
import styled from "styled-components";

import { filters } from "../../assets/filters";
import { ReactComponent as CheckedIcon } from "../../assets/ic_radio_on.svg";
import { ReactComponent as UncheckedIcon } from "../../assets/ic_radio_off.svg";

export default function () {
  const [checkedEl, setCheckEl] = useState(-1);
  const onChangeRadioButton = (e) => {
    setCheckEl(Number(e.target.value));
  };

  const [isShowOptions, setShowOptions] = useState(false);

  return (
    <>
      <Filter onClick={() => setShowOptions(!isShowOptions)}>
        <span className="filter-left">
          <img src="/assets/ic_filter.svg" /> 필터
        </span>

        <div className="filter-right">
          <span className="filter-item">유료</span>
          <img src="/assets/ic_dot.svg" />
          <span className="filter-item">무료</span>
          <img src="/assets/ic_dot.svg" />
          <span className="filter-item">할인중</span>

          <span className="divider"></span>

          <span className="filter-item">입문</span>
          <img src="/assets/ic_dot.svg" />
          <span className="filter-item">초급</span>
          <img src="/assets/ic_dot.svg" />
          <span className="filter-item">중급이상</span>
        </div>

        <SelectOptions show={isShowOptions}>
          <OptionArea>{filters[0].title}</OptionArea>

          <Option>
            <input
              type="radio"
              value="0"
              onChange={onChangeRadioButton}
              checked={checkedEl === 0}
            />
            {checkedEl == 0 ? <CheckedIcon /> : <UncheckedIcon />}
            <span>유료 강의</span>
          </Option>
          <Option>
            <input
              type="radio"
              value="1"
              onChange={onChangeRadioButton}
              checked={checkedEl === 1}
            />
            {checkedEl == 1 ? <CheckedIcon /> : <UncheckedIcon />}
            <span> 무료 강의 </span>
          </Option>
          <Option>
            <input
              type="radio"
              value="2"
              onChange={onChangeRadioButton}
              checked={checkedEl === 2}
            />
            {checkedEl == 2 ? <CheckedIcon /> : <UncheckedIcon />}
            <span>할인 중 강의 </span>
          </Option>

          <OptionArea>{filters[1].title}</OptionArea>

          <Option>
            <input
              type="radio"
              value="3"
              onChange={onChangeRadioButton}
              checked={checkedEl === 3}
            />
            {checkedEl == 3 ? <CheckedIcon /> : <UncheckedIcon />}
            <span> 입문 </span>
          </Option>
          <Option>
            <input
              type="radio"
              value="4"
              onChange={onChangeRadioButton}
              checked={checkedEl === 4}
            />
            {checkedEl == 4 ? <CheckedIcon /> : <UncheckedIcon />}
            <span> 초급 </span>
          </Option>
          <Option>
            <input
              type="radio"
              value="5"
              onChange={onChangeRadioButton}
              checked={checkedEl === 5}
            />
            {checkedEl == 5 ? <CheckedIcon /> : <UncheckedIcon />}
            <span>중급이상</span>
          </Option>
        </SelectOptions>
      </Filter>
    </>
  );
}

const Filter = styled.div`
  z-index: 2;
  position: relative;

  display: flex;
  padding: 10px 12px 10px 14px;
  border: 1px solid #abb0b5;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;

  &:hover {
    border-color: #616568;
  }

  .filter-left {
    display: flex;
    align-items: center;
    color: #3e4042;
    line-height: 1.43;
    font-size: 14px;
  }

  img {
    box-sizing: content-box;
    font-size: inherit;
    width: 1rem;
    height: 1rem;
    line-height: 1;
    margin-right: 3px;
  }

  .filter-right {
    display: flex;
    align-items: center;
    margin-left: 12px;
  }

  .filter-item {
    font-weight: 400;
    line-height: 1.43;
    letter-spacing: -0.3px;
    font-size: 14px;
    font-weight: 500;
    color: #abb0b5;
  }

  .divider {
    display: inline-block;
    margin: 0 6px;
    height: 12px;
    width: 1px;
    background-color: #e9ebee;
    margin-left: 6px;
    margin-right: 6px;
  }

  @media screen and (max-width: 1020px) {
    width: 95%;
    margin: 0 auto;
  }
`;

const SelectOptions = styled.div`
  width: 100%;
  position: absolute;
  list-style: none;
  top: 41px;
  left: 0;
  padding: 10px 16px;
  overflow: hidden;
  display: ${(props) => (props.show ? "0" : "none")};

  background-color: white;
  border-radius: 0 0 4px 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: black;
`;

const OptionArea = styled.div`
  padding-left: 12px;
  padding-top: 20px;
  padding-bottom: 8px;
  font-size: 12px;
  color: #858a8d;
`;

const Option = styled.label`
  display: flex;
  align-items: center;

  font-size: 14px;
  padding-left: 12px;
  height: 40px;
  border-radius: 4px;
  color: #3e4042;

  input {
    display: none;
  }

  span {
    margin-left: 5px;
  }
`;
