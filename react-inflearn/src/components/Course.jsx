import React from "react";

import "../styles/lecturecard.css";
import LectureCard from "./LectureCard";
import RoadmapCard from "./RoadmapCard";
import ReadCard from "./ReadCard";

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
              return <LectureCard lecture={lecture} />;
            case "C":
              return (
                <RoadmapCard
                  title={lecture.title}
                  image_url={lecture.image_url}
                />
              );
            case "D":
              return (
                <ReadCard
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

/* 수정 */
// () && ()
// default
// 삼항연산자 중첩은 잘못된 방법
