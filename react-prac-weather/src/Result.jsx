import React, { useNavigate } from "react";
import styled from "styled-components";

import "./styles/index.css";
export default function Result(document) {
  return (
    <ResultWrap onClick={() => window.open(document.document.url, "_blank")}>
      <div className="title">{document.document.title}</div>
      <div className="datetime">{document.document.datetime}</div>
      <div className="content">{document.document.contents}</div>
    </ResultWrap>
  );
}

const ResultWrap = styled.div`
  border: 1px solid #e8ebee;
  border-radius: 6px;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 3%);
  background-color: #fff;
  margin: 0 20px 10px 20px;
  padding: 20px 10px;

  .title {
    font-size: 20px;
    font-weight: 600;
    margin: 0;
    margin-bottom: 5px;
  }
  .datetime {
    font-size: 12px;
    font-weight: 100;
    color: #b4b2b2;
    margin-bottom: 10px;
  }
  .content {
    font-size: 14px;
    font-weight: 100;
  }
`;
