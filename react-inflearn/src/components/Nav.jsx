import React, { useState } from "react";

import "../styles/nav.css";
import Modal from "./Modal";
import LoginModal from "./LoginModal";
import { Link } from "react-router-dom";

export default function Nav() {
  const [login, setLogin] = useState(false);

  return (
    <>
      <nav id="nav">
        <div class="wrapper">
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

              <a class="button" onClick={() => setLogin(!login)}>
                로그인
              </a>
              <a class="button_orange"> 회원가입 </a>
            </div>
          </div>
        </div>
      </nav>
      {login && (
        <Modal closeModal={() => setLogin(!login)}>
          <LoginModal closeModal={() => setLogin(!login)} />
        </Modal>
      )}
    </>
  );
}
