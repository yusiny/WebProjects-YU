import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as CheckedIcon } from "../assets/icon_checked.svg";
import { ReactComponent as UnCheckedIcon } from "../assets/icon_unchecked.svg";

export default function Question({ title, questionList }) {
  const [checkedElement, setCheckedElement] = useState(-1);
  const onChangeRadioButton = (e) => {
    setCheckedElement(Number(e.target.value));
    console.log(e.target.value);
  };

  return (
    <QuestionWrap>
      <div className="questionTitle">{title}</div>
      <div>
        {questionList.map((question, index) => {
          return (
            <RadioWrap key={index}>
              <input
                value={index}
                onChange={onChangeRadioButton}
                checked={checkedElement === index}
                type="radio"
              />
              {checkedElement === index ? <CheckedIcon /> : <UnCheckedIcon />}
              <div className="questionText">{question}</div>
            </RadioWrap>
          );
        })}
      </div>
    </QuestionWrap>
  );
}

const QuestionWrap = styled.div`
  margin-bottom: 14px;

  .questionTitle {
    margin-bottom: 8px;
    font-size: 24px;
    font-weight: bold;
  }
`;

const RadioWrap = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  .questionText {
    margin-left: 8px;
  }

  input {
    display: none;
  }
`;
