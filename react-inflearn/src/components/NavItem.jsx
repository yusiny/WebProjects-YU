import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBookmark, faBell } from "@fortawesome/free-solid-svg-icons";
import {
  faBell as faBellR,
  faUser as faUserR,
  faBookmark as faBookmarkR,
} from "@fortawesome/free-regular-svg-icons";

export default function NavItem({ id, icon, iconR, modal }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="nav_item" id={id}>
      <a className="nav_item_hoverble">
        <FontAwesomeIcon icon={isHover ? icon : iconR} />
      </a>

      <div className="nav_modal">모다라아라라ㅏㄹ</div>
    </div>
  );
}

const NavItem = styled.div`
  display: flex;
  position: relative;
  padding-left: 0.625rem;
  padding-right: 0.625rem;

  .nav_item_hoverble {
    height: 100%;
  }

  .nav_modal {
    position: absolute;

    display: grid;
    overflow: hidden;
    grid-template-columns: 100%;
    grid-template-rows: 40px 1fr auto;
    padding: 20px;
    height: 100%;
    max-height: inherit;
    box-sizing: border-box;
  }
`;
