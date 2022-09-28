import React from "react";
import styled from "styled-components";
import { dummy } from "../questionDummy";
import Question from "./Question";

export default function () {
  return (
    <RootWrap>
      {dummy.map((item) => {
        return (
          <Question
            key={item.idx}
            title={item.title}
            questionList={item.questionList}
          />
        );
      })}
    </RootWrap>
  );
}

const RootWrap = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  max-width: 500px;

  left: 50%;
  transform: translate(-50%, 0);

  background-color: white;
  border: 1px solid red;

  padding-left: 8px;
`;
