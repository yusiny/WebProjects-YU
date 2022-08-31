import React from "react";
import Lecture from "./Lecture";

import "../styles/lecture.css";

export default function Course({ information }) {
  return (
    <div class="course">
      <div class="course_header">
        <a href="/">
          <h1>{information.title}</h1>
          <img src="/assets/ic_right.svg" width="12px" height="16px" />
        </a>
        <p>{information.desc}</p>
      </div>

      <div class="course_contents">
        {information.contents.map((lecture) => {
          return <Lecture lecture={lecture} />;
        })}
      </div>
    </div>
  );
}
