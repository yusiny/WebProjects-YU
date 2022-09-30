import React, { useRef } from "react";
import styled from "styled-components";

import { menus, tags } from "../../assets/lecture_menus";
import { lectures } from "../../assets/courses";

import Accordion from "./Accordion";
import OrderbySelect from "./OrderbySelect";

import { faTimes, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LectureCard from "../../components/LectureCard";
import FilterSelect from "./FilterSelect";

export default function Lecture() {
  console.log(lectures);

  return (
    <section className="section_lecture">
      <Container>
        <Sidebar>
          {menus.map((accordion) => {
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
            <FilterSelect />

            <OrderbySelect />
          </Options>

          <LectureWrapper>
            {lectures[0].map((lecture) => {
              return <LectureCard lecture={lecture} />;
            })}
            {lectures[1].map((lecture) => {
              return <LectureCard lecture={lecture} />;
            })}
            {lectures[2].map((lecture) => {
              return <LectureCard lecture={lecture} />;
            })}
          </LectureWrapper>
        </LectureBody>
      </Container>

      <Footer>
        <div className="wrapper">
          <div className="footer-div">
            <div className="footer-title">지식 공유자 되기</div>
            <div className="footer-desc">
              많은 사람들에게 배움의 기회를 주고, <br /> 경제적 보상을
              받아보세요.
            </div>
            <ButtonG>지식공유참여</ButtonG>
          </div>
          <div className="footer-div">
            <div className="footer-title">기업 공유를 위한 인프런</div>
            <div className="footer-desc">
              "인프런 비즈니스"를 통해 모든 팀원이 인프런의 강의를
              <br />
              자유롭게 학습하는 환경을 제공하세요.
            </div>
            <ButtonG>인프런 비즈니스</ButtonG>
          </div>
        </div>
      </Footer>
    </section>
  );
}

const Container = styled.div`
  padding: 2rem 0;
  background: #fff;
  max-width: 1180px;
  margin: 0 auto;

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

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const LectureBody = styled.div`
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

  @media screen and (max-width: 1020px) {
    font-size: 0.75rem;
  }
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
  margin: 24px 0 16px;

  @media screen and (max-width: 1020px) {
    flex-direction: column;
    align-items: flex-end;
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

const LectureWrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-wrap: wrap;

  .lecture_root {
    width: 25%;
  }

  @media screen and (min-width: 1020px) and (max-width: 1200px) {
    .lecture_root {
      width: 33.33333%;
    }
  }

  @media screen and (min-width: 760px) and (max-width: 1020px) {
    .lecture_root {
      width: 50%;
    }
  }
`;

const PaginationWrapper = styled.div``;

const Footer = styled.div`
  background: #f3f4f7;

  .wrapper {
    display: flex;
    padding: 96px 0;
    max-width: 1152px;
    margin: 0 auto;
    justify-content: space-around;
  }

  .footer-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-title {
    font-size: 24px;
    color: #333;
    margin-bottom: 8px;
  }

  .footer-desc {
    font-size: 16px;
    font-weight: 400;
    color: #333;
    margin-bottom: 24px;
  }
`;

const ButtonG = styled.button`
  background: #1dc078;
  color: #fff;
  font-size: 20px;
  border-radius: 2px;
  padding: 8px 16px;
  border: none;

  cursor: pointer;
  justify-content: center;
`;
