import React, { useState } from "react";

import Modal from "./Modal";
import LoginModal from "./LoginModal";
import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  faUser,
  faList,
  faHomeAlt,
  faRoad,
  faEllipsisH,
  faPencil,
  faBookmark,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell as faBellR,
  faUser as faUserR,
  faBookmark as faBookmarkR,
} from "@fortawesome/free-regular-svg-icons";

export default function Nav() {
  const [login, setLogin] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <NavBar>
        <NavDesktop id="nav_desktop">
          <a href="/" id="nav_logo">
            <img src="/assets/ic_inflearn_logo.svg" />
          </a>

          <div id="nav_bar">
            <div id="nav_bar_left">
              <Link to="/lectures" class="a_nav">
                강의
              </Link>
              <Link to="/roadmaps" class="a_nav">
                로드맵
              </Link>
              <Link to="/mentorings" class="a_nav">
                멘토링
              </Link>
              <Link to="/communities" class="a_nav">
                커뮤니티
              </Link>
              <Link to="/inflearns" class="a_nav">
                인프런
              </Link>
            </div>

            <div id="nav_bar_right">
              <div id="nav_search_div">
                <input id="nav_search" type="text" />
                <img
                  class="search_icon"
                  id="nav_search_icon"
                  src="/assets/ic_search.svg"
                />
              </div>

              <Button onClick={() => setLogin(!login)}>로그인</Button>
              <ButtonOrange class="button_orange"> 회원가입 </ButtonOrange>

              <ButtonGreen class="button_green">
                <FontAwesomeIcon icon={faPencil} />
                <span>최근강의</span>
              </ButtonGreen>

              <NavItem className="nav_item">
                <a
                  className="nav_item_hoverble"
                  id="nav_bookmark"
                  onMouseEnter={() => setIsHover(true)}
                  onMouseLeave={() => setIsHover(false)}
                >
                  {!isHover ? (
                    <FontAwesomeIcon icon={faBookmarkR} />
                  ) : (
                    <FontAwesomeIcon
                      icon={faBookmark}
                      style={{ color: "#00c471" }}
                    />
                  )}
                </a>

                <div className="nav_bookmark_count">1</div>
              </NavItem>
              <NavItem className="nav_item">
                <a className="nav_item_hoverble" id="nav_notification">
                  <FontAwesomeIcon icon={faBellR} />
                </a>
              </NavItem>
              <NavItem className="nav_item" id="nav_user">
                <a className="nav_item_hoverble">
                  <FontAwesomeIcon icon={faUserR} />
                </a>
              </NavItem>
            </div>
          </div>
        </NavDesktop>

        <NavMobile id="nav_mobile">
          <div id="mobile_left">
            <img src="/assets/ic_asidebar.svg" />
          </div>

          <a href="/" id="mobile_logo">
            <img src="/assets/ic_inflearn_logo.svg" />
          </a>

          <div id="mobile_right">
            <a class="button button_small" onClick={() => setLogin(!login)}>
              로그인
            </a>
            <a class="button_orange button_small"> 회원가입 </a>
          </div>
        </NavMobile>
      </NavBar>

      <NavBottom id="nav_bottom">
        <span className="nav_el">
          <FontAwesomeIcon className="nav_el_icon" icon={faUser} />
          <div className="nav_el_title">대시보드</div>
        </span>

        <span className="nav_el">
          <FontAwesomeIcon className="nav_el_icon" icon={faList} />
          <div className="nav_el_title">강의</div>
        </span>

        <span className="nav_el">
          <FontAwesomeIcon className="nav_el_icon" icon={faHomeAlt} />
          <div className="nav_el_title">홈</div>
        </span>

        <span className="nav_el">
          <FontAwesomeIcon className="nav_el_icon" icon={faRoad} />
          <div className="nav_el_title">로드맵</div>
        </span>

        <span className="nav_el">
          <FontAwesomeIcon className="nav_el_icon" icon={faEllipsisH} />
          <div className="nav_el_title">더보기</div>
        </span>
      </NavBottom>

      {login && (
        <Modal closeModal={() => setLogin(!login)}>
          <LoginModal closeModal={() => setLogin(!login)} />
        </Modal>
      )}
    </>
  );
}

const NavBar = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: #fff;
  z-index: 75;
  box-shadow: 0 2px 4px 0 hsl(0deg 0% 81% / 50%);
  display: flex;
  align-items: center;

  @media screen and (max-width: 1010px) {
    #nav_mobile {
      display: flex;
    }
    #nav_desktop {
      display: none;
    }
  }

  @media screen and (min-width: 1010px) {
    #nav_mobile {
      display: none;
    }
    #nav_desktop {
      display: flex;
    }
  }
`;

const NavDesktop = styled.div`
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 32px;

  display: flex;
  align-items: center;

  #nav_logo {
    height: 100%;
  }

  #nav_bar {
    height: 100%;
    flex-grow: 1;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  #nav_bar_left {
    height: 100%;

    display: flex;
    flex-direction: row;
  }

  #nav_bar_right {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .a_nav {
    padding: 8px 16px;
    color: #4a4a4a;
    align-self: center;
  }

  #nav_search {
    width: 100%;
    height: 100%;
    border-radius: 3px;
    box-shadow: none;
    background: #f6f6f6;
    color: #5f5f5f;
    border: 1px solid transparent;

    padding: calc(0.375em - 1px) calc(0.625em - 1px);
    box-sizing: border-box;
    font-size: 1rem;
  }

  #nav_search:hover {
    border-color: #b5b5b5;
  }

  #nav_search:focus {
    outline: 0.04rem auto #1dc078;
    box-shadow: 0 0 0 0.125em rgb(29 192 120 / 25%);
  }

  #nav_search_div {
    position: relative;
    width: 140px;
    height: 34px;
    margin: 8px 20px;
  }

  .search_icon {
    position: absolute;
    top: 8px;
    right: 5px;
    margin: 0;
    cursor: pointer;
  }

  #nav_search_icon {
    width: 20px;
  }
`;

const NavMobile = styled.div`
  padding: 0 24px;
  width: 1200px;
  height: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  #mobile_left {
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
  }

  #mobile_logo {
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #mobile_right {
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

const NavBottom = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 66px;

  background-color: #fff;
  box-shadow: 0 -2px 4px 0 rgb(33 37 41 / 8%);
  z-index: 75;

  @media screen and (max-width: 1200px) {
    display: flex;
  }

  @media screen and (min-width: 1200px) {
    display: none;
  }

  align-items: center;
  justify-content: space-evenly;

  .nav_el {
    display: flex;
    width: 72px;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 8px;
    color: #495057;
  }
  .nav_el_icon {
    padding: 5px 0;
  }
  .nav_el_title {
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.5;
  }
`;

const Button = styled.a`
  background-color: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  padding: 8px;
  margin-right: 8px;

  font-size: 1rem;
  line-height: 1;

  cursor: pointer;
`;

const ButtonOrange = styled(Button)`
  background-color: #ff7867;
  border: 1px solid #dbdbdb;
  color: #fff;
`;

const ButtonGreen = styled(Button)`
  background-color: #00c471;
  border: none;
  color: #fff;
  font-weight: 600;

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    margin-left: 0.25rem;
  }
`;

const NavItem = styled.div`
  display: flex;
  position: relative;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  color: #495057;

  .nav_item_hoverble {
    width: 24px;
    height: 24px;
    font-size: 18px;
  }

  .nav_bookmark_count {
    position: absolute;
    z-index: 2;
    top: -4px;
    right: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1px;
    min-width: 16px;
    height: 16px;
    color: #fff;
    background: #ff5b16;
    border-radius: 20px;
    font-weight: 700;
    font-size: 10px;
    letter-spacing: -1px;
  }
`;
