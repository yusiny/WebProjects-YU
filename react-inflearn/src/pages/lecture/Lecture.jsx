import React from "react";

import "../lecture/lecture.css";
export default function () {
  return (
    <>
      <section className="lecture_top">
        <div className="wrapper">
          <div className="flex-row-center">
            <div id="info_left" className="thumbnail">
              <img src="https://cdn.inflearn.com/public/courses/329235/cover/02b457b5-56de-4797-9a3e-17ba2470ae85/329235-eng.png" />

              <button className="thumbnail-button">
                <span style={{ marginRight: "8px" }}>
                  <img src="/assets/ic_play.svg" />
                </span>
                <span
                  style={{
                    color: "#00c471",
                    marginRight: "4px",
                    fontSize: "15px",
                  }}
                >
                  8개
                </span>
                <span>무료 보기</span>
              </button>
            </div>

            <div id="info_right">
              <div className="info_breadcrumb">
                <span>개발 ∙ 프로그래밍</span>
                <img src="/assets/ic_right_white.svg"></img>
                <span> 모바일 앱 개발</span>
              </div>

              <div className="info_title">
                Flutter 실전 앱 개발 - 미국 주식 앱 (with 클린 아키텍처)
              </div>

              <div className="info_star">
                <span className="info_stars">
                  <img src="/assets/ic_star.svg" />
                  <img src="/assets/ic_star.svg" />
                  <img src="/assets/ic_star.svg" />
                  <img src="/assets/ic_star.svg" />
                  <img src="/assets/ic_star.svg" />
                </span>
                <strong style={{ marginLeft: "4px", marginRight: "8px" }}>
                  (5.0)
                </strong>
                <span>
                  7개의 수강평 ∙ <strong>80명</strong>의 수강생
                </span>
              </div>

              <div className="info_instructor">
                <img src="/assets/ic_instructor.svg" />
                <strong style={{ marginLeft: "6px", marginRight: "2px" }}>
                  <u>오준석</u>
                </strong>
                <img src="/assets/ic_crown.svg" />
              </div>

              <div className="info_tags">
                <img
                  src="/assets/ic_hashtag.svg"
                  style={{ marginRight: "6px" }}
                />
                <span>
                  <button className="button_tag">Flutter</button>
                  <button className="button_tag">IOS</button>
                  <button className="button_tag">Android</button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="lecture_middle"></section>
      <section className="lecture_bottom"></section>
    </>
  );
}
