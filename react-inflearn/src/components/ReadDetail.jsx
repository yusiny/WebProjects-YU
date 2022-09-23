import React from "react";
import { useLocation } from "react-router-dom";

import "../styles/readDetail.css";

export default function ReadDetail() {
  const { state } = useLocation();
  console.log(state);

  return (
    <div className="read_detail">
      <div className="read_detail_wrapper">
        <div>
          <img id="read_detail_image" src={state.url} />
        </div>

        <div id="read_detail_title"> {state.title} </div>
        <div id="read_detail_desc">
          인프런 솔 <img src="/assets/ic_editor.svg" /> | 3일 전{" "}
        </div>

        <div id="read_detail_content">{state.desc}</div>
      </div>
    </div>
  );
}
