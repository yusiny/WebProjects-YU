import React from "react";

import "../styles/nav.css";

export default function Nav() {
  return (
    <nav id="nav">
      <div class="wrapper">
        <a href="/" id="nav_logo">
          <img src="/assets/ic_inflearn_logo.svg" />
        </a>

        <div id="nav_bar">
          <div id="nav_bar_left">
            <a href="/" class="a_nav">
              강의
            </a>
            <a href="/" class="a_nav">
              로드맵
            </a>
            <a href="/" class="a_nav">
              멘토링
            </a>
            <a href="/" class="a_nav">
              커뮤니티
            </a>
            <a href="/" class="a_nav">
              인프런
            </a>
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

            <a class="button"> 로그인 </a>
            <a class="button_orange"> 회원가입 </a>
          </div>
        </div>
      </div>
    </nav>
  );
}