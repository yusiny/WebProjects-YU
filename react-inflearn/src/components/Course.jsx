import React from "react";
import Lecture from "./Lecture";

import "../styles/lecture.css";
import Roadmap from "./Roadmap";
import Read from "./Read";

export default function Course({ information }) {
  return (
    <div class="course">
      <div class="course_header">
        <a href="/">
          <h1>{information.title}</h1>
          {information.icon != null ? <span>{information.icon}</span> : null}
          <img src="/assets/ic_right.svg" width="12px" height="16px" />
        </a>
        <p>{information.desc}</p>
      </div>

      <div class="course_contents">
        {information.contents.map((lecture) => {
          switch (information.type) {
            case "A":
            case "B":
              return <Lecture lecture={lecture} />;
            case "C":
              return (
                <Roadmap title={lecture.title} image_url={lecture.image_url} />
              );
            case "D":
              return (
                <Read
                  title={lecture.title}
                  desc={lecture.desc}
                  image_url={lecture.image_url}
                />
              );
          }
        })}
      </div>
    </div>
  );
}
