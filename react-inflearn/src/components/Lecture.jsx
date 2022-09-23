import React from "react";

import "../styles/lecture.css";
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

      <section className="lecture_middle">
        <div className="middle_tab_bar">
          <div className="wrapper">
            <span className="tab tab_active">강의소개</span>
            <span className="tab">커리큘럼</span>
            <span className="tab">
              수강평
              <span style={{ fontSize: "11px", color: "#00c471" }}>7</span>
            </span>
            <span className="tab">수강전 문의</span>
            <span className="tab">커뮤니티</span>
            <span className="tab">새소식</span>
          </div>
        </div>
        <div className="middle_contents">
          <div className="contents">
            <div className="contents_title">
              <strong>중급자</strong>를 위해 준비한 <br />{" "}
              <strong>[모바일 앱 개발] 강의입니다.</strong>
            </div>
            <div className="contents_content">
              로컬 DB를 이용한 캐싱 기법, CSV 파싱, Canvas를 활용한 커스텀
              드로잉을 포함한 앱을 클린 아키텍처로 구현하는 예제를 경험할 수
              있습니다.
            </div>
          </div>

          <div className="buying_bar">
            <div className="interest">
              <img src="https://cdn.inflearn.com/assets/images/corporations/kakaobank.png" />
              <div>
                <div className="interest_title">
                  <div>카카오</div>
                </div>
                <div className="interest_msg">
                  지금 이 회사에 관심있는 사람들도 듣는 중!
                </div>
              </div>
            </div>

            <div>
              <div>top</div>
              <div>bottom</div>
            </div>
          </div>
        </div>
      </section>

      <section className="lecture_bottom">
        <div className="wrapper">
          <div className="bottom_title">
            <u>오준석님의 다른 강의</u>
            <img src="/assets/ic_shortcut.svg" />
          </div>
          <div className="bottom_content">
            지식공유자님의 다른 강의를 만나보세요!
          </div>
          <div>강의들</div>
        </div>
      </section>
    </>
  );
}
