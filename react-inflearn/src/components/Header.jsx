import React from "react";

import "../styles/header.css";

export default function Header() {
  return (
    <header>
      <div class="wrapper" id="header_wrapper">
        <div id="header_left">
          <a href="/" class="a_checked">
            <img class="btn_svg" src="/assets/ic_inflearn.svg" />
            교육
          </a>
          <img id="header_divider" src="/assets/ic_line.svg" />
          <a href="/" class="a_unchecked">
            <img class="btn_svg" src="/assets/ic_ employment.svg" />
            채용
          </a>
        </div>

        <h6 className="content">지식공유 참여</h6>
      </div>
    </header>
  );
}
