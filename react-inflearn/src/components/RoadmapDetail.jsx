import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import "../styles/roadmapDetail.css";
import { useLocation } from "react-router-dom";

export default function RoadmapDetail() {
  const { state } = useLocation();
  console.log(state);

  return (
    <>
      <div className="top">
        <div className="wrapper">
          <div className="roadmap_detail_title"> {state.title} </div>
          <div>
            <FontAwesomeIcon icon={faUser} /> 92
          </div>
          <div>포함된 강의수: 2개</div>
          <div> 마지막 업데이트: 2022.05.18</div>
        </div>
      </div>

      <div className="content">
        <img src="https://cdn.inflearn.com/public/files/posts/4b0bebd5-9e5e-427d-b584-e9d906a89b88/568-intro.png" />
      </div>
    </>
  );
}
