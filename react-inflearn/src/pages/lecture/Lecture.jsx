import React, { useRef } from "react";
import styled from "styled-components";
import { menus, tags } from "../../assets/lecture_menus";
import Accordion from "./Accordion";
import { faTimes, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import OrderbySelect from "./OrderbySelect";

export default function Lecture() {
  const orderbyRef = useRef(null);
  const [showOrderBy, setShowOrderBy] = useState(false);
  const setOrderby = (boolean) => {
    if (boolean) {
      orderbyRef.toggle();
    } else {
      orderbyRef.hide();
    }
  };

  return (
    <section className="section_lecture">
      <Container>
        <Sidebar>
          {menus.map((accordion) => {
            console.log(accordion);
            return (
              <Accordion
                isToggle={accordion.isToggle}
                title={accordion.title}
                menus={accordion.menus}
              />
            );
          })}
        </Sidebar>

        <LectureBody>
          <Search>
            <input
              type="text"
              enterKeyHint="go"
              className="input"
              placeholder="강의 검색하기"
            />
            <button className="button">검색</button>
          </Search>

          <h3 className="title">전체</h3>
          <Tags>
            <div className="search">
              <input className="input" type="text" placeholder="기술검색" />
              <div className="clear-button">
                <FontAwesomeIcon icon={faTimes} />
              </div>
            </div>
            <TagActive>
              MS-Office <span>x</span>
            </TagActive>
            {tags.map((tag) => {
              return <Tag>{tag}</Tag>;
            })}
            <div className="more">
              <FontAwesomeIcon icon={faEllipsis} />
            </div>
          </Tags>

          <Options>
            <div className="filter">
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
            </div>

            <OrderbySelect />
          </Options>
        </LectureBody>
      </Container>
    </section>
  );
}

const Container = styled.div`
  padding: 2rem 0;
  background: #fff;
  max-width: 1180px;
  margin: 0 auto;
  border: 1px solid red;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .title {
    color: #454545;
    font-size: 18px;
    font-weight: 700;
    margin-top: 8px;
  }
`;

const Sidebar = styled.aside`
  width: fit-content;
  display: flex;
  flex-direction: column;
`;

const LectureBody = styled.div`
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  padding-left: 0.75rem;
  padding-right: 0.75rem;
`;

const Search = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  overflow-y: hidden;

  padding-bottom: 1.5rem;
  border-bottom: 1px solid #dedede;

  .input {
    flex: 1 1 300px;
    max-width: 300px;
    height: 36px;
    border: 1px solid #dedede;
    background: #fff;
    border-radius: 0;
    box-sizing: border-box;
    padding: calc(0.375em - 1px) calc(0.625em - 1px);
  }

  .button {
    min-width: 53px;
    height: 36px;
    background: #1dc078;
    color: #fff;
    font-weight: 800;
    font-size: 1rem;
    border-radius: 0;
    margin-left: -1rem;
    border: none;
    box-sizing: border-box;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 8px;

  .search {
    display: inline-flex;
    width: 11rem;
    margin-bottom: 0.4rem;
    margin-right: 0.5rem;
  }

  .input {
    border-radius: 3px;
    box-shadow: none;
    background: #f6f6f6;
    color: #5f5f5f;
    border: 1px solid transparent;
    box-sizing: border-box;
  }

  .input::placeholder {
    padding-left: 5px;
    color: #b8b8b8;
    font-size: 14px;
    font-weight: 300;
  }

  .clear-button {
    height: 31px;
    background-color: #1dc078;
    border-color: transparent;
    color: #fff;
    cursor: pointer;
    justify-content: center;
    padding: calc(0.375em - 1px) 0.75em;
    text-align: center;
    border-radius: 0 3px 3px 0;
    box-sizing: border-box;

    display: flex;
    align-items: center;
  }

  .more {
    padding: 2px 0.6rem;
    background: #3298dc;
    font-weight: 800;
    font-size: 0.9rem;
    height: 2em;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;

    color: white;
  }
`;

const Tag = styled.button`
  cursor: pointer;
  background: #b8b8b8;
  color: #fff;
  border: none;
  padding: 1px 0.8rem 2px 0.8rem;
  border-radius: 4px;
  font-size: 1rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;

  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  height: 2em;
  justify-content: center;

  font-weight: 400;
  font-size: 16px;
`;

const TagActive = styled(Tag)`
  background: #1dc078;

  span {
    margin-left: 10px;
    font-size: 0.8rem;
  }
`;

const Options = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 24px 12px 16px;

  .filter {
    display: flex;
    padding: 10px 12px 10px 14px;
    border: 1px solid #abb0b5;
    border-radius: 4px;
    background-color: #fff;
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

  .orderBy {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 85px;
    height: 40px;
    padding: 0 8px;
    border: 1px solid #abb0b5;
    border-radius: 4px;
  }

  .selectBox {
    width: fit-content;
    border: 1px solid #b8b8b8;
    overflow: hidden;
    font-size: 18px;
    color: #666666;
    padding: 10px 0 10px 18px;
    width: 155px;
  }

  .select-ul {
    list-style-type: none;
    overflow-x: hidden;
    overflow-y: auto;
    font-size: 18px;
    color: #666666;
    border: 1px solid #b8b8b8;
    position: absolute;
    background: #ffffff;
    border-top: none;
    display: none;
  }

  .select-ul li {
    padding: 10px 0 10px 18px;
  }
`;

const LectureWrapper = styled.div``;
