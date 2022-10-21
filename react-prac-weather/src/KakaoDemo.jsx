import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Kakao } from "./api";
import Result from "./Result";

export default function KakaoDemo() {
  const [result, setResult] = useState({});
  const [query, setQuery] = useState("");

  const search = async (query) => {
    try {
      const data = await Kakao.get("search/web?query=" + query);
      console.log(data);
      setResult(data);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <HeaderWrap>
        <div className="title">Kakao Search Demo</div>

        <input
          type="text"
          placeholder="검색어를 입력하세요"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={() => search(query)}>Search</button>
      </HeaderWrap>

      {Object.keys(result).length !== 0 && (
        <ResultWrap>
          {result.data.documents.map((document) => {
            return <Result document={document} />;
          })}
        </ResultWrap>
      )}
    </div>
  );
}

const ResultWrap = styled.div`
  width: 100%;
  background-color: #e8ebee;
  padding: 20px 0 20px 0;
`;

const HeaderWrap = styled.div`
  position: sticky;
  top: 0;

  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0 20px 0;
  border-bottom: 1px solid #ebeeef;
  box-shadow: 0 1px 4px 0 rgb(0 0 0 / 5%);
  background-color: #fff;
  margin: 0;

  .title {
    font-size: 24px;
    font-weight: 600;
    margin: 20px 10px;
  }
  input {
    width: 500px;
    font-size: 14px;

    background-color: rgba(192, 216, 205, 0.12);
    border: 1px solid rgba(29, 192, 120, 0.24);

    padding: 10px 20px;
    border-radius: 10px;
    transition: all 0.2s ease;

    box-sizing: border-box;
    display: inline-flex;
    font-size: 1rem;
    justify-content: flex-start;
    line-height: 1.5;

    margin-bottom: 10px;
  }

  input::placeholder {
    color: rgba(12, 95, 58, 0.3);
  }

  input:focus {
    background-color: #fff;
    border: none;
    outline: none;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
    border: 1px solid rgb(0 0 0 / 10%);
  }

  button {
    padding: 5px 10px;
    background-color: rgba(29, 192, 120, 0.24);
    color: #fff;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    padding: 8px;
    margin-right: 8px;

    font-size: 1rem;
    line-height: 1;

    background-color: #00c471;
    border: none;
    color: #fff;
    font-weight: 400;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
  }
`;
