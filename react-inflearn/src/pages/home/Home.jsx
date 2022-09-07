import React from "react";
import Course from "../../components/Course";
import { courses } from "../../assets/courses";

import "./home.css";
import "../Sliders/slider.css";

import MainBannerSlider from "../Sliders/MainBannerSlider";
import BottomBannerSlider from "../Sliders/BottomBannerSlider";

export default function Home() {
  return (
    <>
      <section id="main_banner">
        <MainBannerSlider />
      </section>

      <section id="search" class="wrapper">
        <h1 id="search_title">인프런에서 연봉을 올리세요</h1>
        <div id="search_input_wrapper">
          <input
            id="search_input"
            placeholder="배우고 싶은 지식을 입력해 보세요."
          ></input>
          <img
            class="search_icon"
            id="search_icon"
            src="/assets/ic_search.svg"
          />
        </div>
        <div id="search_tag">
          <span class="search_tag">#MVC</span>
          <span class="search_tag">#Spring Boot</span>
          <span class="search_tag">#JPA</span>
          <span class="search_tag">#Python</span>
          <span class="search_tag">#Java</span>
          <span class="search_tag">#Sprint</span>
          <span class="search_tag">#JavaScript</span>
        </div>
      </section>

      <section id="courses" class="wrapper">
        {courses.map((course) => {
          return <Course information={course} />;
        })}
      </section>

      <section id="review" class="wrapper">
        <div id="review_left">
          <h1>
            {" "}
            <span>946,167</span> 명이 <br />
            인프런과 함께합니다.
          </h1>
          <p>
            인프런은 강의의 수강생수, 평점을 투명하게 공개합니다. 실제로 많은
            온오프라인 학원들은 단기적 성과를 높이기 위해 잘나온 특정 후기만
            노출 하거나, 아예 숨겨버리는 경우가 많습니다.반면 인프런은 강의에
            대한 후기, 학생수 등 정보를 투명하게 공개합니다. 신뢰성을 바탕으로
            학습자들이 더 좋은 컨텐츠를 선택하고 교육의 질을 높입니다.
          </p>
          <div id="review_buttons">
            <a class="button_green">
              수강평 더보기 <img src="/assets/ic_right.svg" />{" "}
            </a>
            <a class="button_green">
              기능/강좌 요청하기 <img src="/assets/ic_right.svg" />{" "}
            </a>
          </div>
        </div>
        <div id="review_right">
          <div class="swiper-review-wrapper">
            <div class="swiper-slide-review">
              <div class="review-writer">
                kelly3166 님(수강생) <span>3시간 전</span>
              </div>
              <div class="review-title">
                Do It! 딥러닝 입문 <img src="/assets/ic_right.svg" />
              </div>
              <p>!!!!!</p>
            </div>
            <div class="swiper-slide-review">
              <div class="review-writer">
                정우진 님(수강생) <span>6시간 전</span>
              </div>
              <div class="review-title">
                스프링 핵심 원리 - 기본편
                <img src="/assets/ic_right.svg" />
              </div>
              <p>
                백엔드 개발자를 희망하는 대학생입니다. 지난 3일 동안 입문부터
                기초까지 열심히 들어 완강했는데, 정말 재미있게 들었습니다.특히
                의존관계 주입부터 활용까지의 강의는 머리를 한대 맞은 거 같은
                충격이었습니다. A - Z 까지 설명해주시는 것 보면 얼마나 시간을
                많이 쓰셨는지 알 거 같습니다.훌륭한 강의 감사드려요.
              </p>
            </div>
            <div class="swiper-slide-review">
              <div class="review-writer">
                jaeheyon.choi님 님(수강생) <span>7시간 전</span>
              </div>
              <div class="review-title">
                업무가 100배 빨라지는 엑셀 데이터 활용과 분석 노하우{" "}
                <img src="/assets/ic_right.svg" />
              </div>
              <p>아주 간단하면서도 필수적인 기능을 알려주셔서 좋았습니다.</p>
            </div>
            <div class="swiper-slide-review">
              <div class="review-writer">
                kelly3166 님(수강생) <span>9시간 전</span>
              </div>
              <div class="review-title">
                개발자를 위한 HTTP 웹 기본 지식{" "}
                <img src="/assets/ic_right.svg" />
              </div>
              <p>감사합니다. 정말 잘 가르치십니다.</p>
            </div>
            <div class="swiper-slide-review">
              <div class="review-writer">
                kelly3166 님(수강생) <span>3시간 전</span>
              </div>
              <div class="review-title">
                Do It! 딥러닝 입문 <img src="/assets/ic_right.svg" />
              </div>
              <p>!!!!!</p>
            </div>
            <div class="swiper-slide-review">
              <div class="review-writer">
                정우진 님(수강생) <span>6시간 전</span>
              </div>
              <div class="review-title">
                스프링 핵심 원리 - 기본편
                <img src="/assets/ic_right.svg" />
              </div>
              <p>
                백엔드 개발자를 희망하는 대학생입니다. 지난 3일 동안 입문부터
                기초까지 열심히 들어 완강했는데, 정말 재미있게 들었습니다.특히
                의존관계 주입부터 활용까지의 강의는 머리를 한대 맞은 거 같은
                충격이었습니다. A - Z 까지 설명해주시는 것 보면 얼마나 시간을
                많이 쓰셨는지 알 거 같습니다.훌륭한 강의 감사드려요.
              </p>
            </div>
            <div class="swiper-slide-review">
              <div class="review-writer">
                jaeheyon.choi님 님(수강생) <span>7시간 전</span>
              </div>
              <div class="review-title">
                업무가 100배 빨라지는 엑셀 데이터 활용과 분석 노하우{" "}
                <img src="/assets/ic_right.svg" />
              </div>
              <p>아주 간단하면서도 필수적인 기능을 알려주셔서 좋았습니다.</p>
            </div>
            <div class="swiper-slide-review">
              <div class="review-writer">
                kelly3166 님(수강생) <span>9시간 전</span>
              </div>
              <div class="review-title">
                개발자를 위한 HTTP 웹 기본 지식{" "}
                <img src="/assets/ic_right.svg" />
              </div>
              <p>감사합니다. 정말 잘 가르치십니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="bottom_banner">
        <BottomBannerSlider />
      </section>

      <section id="corporation">
        <div class="wrapper">
          <h3>이미 많은 기업 구성원들이 인프런에서 성장하고 있어요.</h3>
          <div id="corporation_logos">
            <img src="https://cdn.inflearn.com/public/group_logo/0/c085de89-e640-4bc0-afad-efd1e96dbb58/%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB.png" />
            <img src="https://cdn.inflearn.com/public/group_logo/0/0add4321-40e2-46db-9aac-3222b25a69c4/%E1%84%8B%E1%85%AE%E1%84%8B%E1%85%A1%E1%84%92%E1%85%A1%E1%86%AB%20%E1%84%92%E1%85%A7%E1%86%BC%E1%84%8C%E1%85%A6%E1%84%83%E1%85%B3%E1%86%AF.png" />
            <img src="https://cdn.inflearn.com/public/group_logo/0/34618dc7-2862-4db0-9bbc-631ca0c8f5b5/sk.png" />
            <img src="https://cdn.inflearn.com/public/group_logo/0/1429748f-8c44-4941-8913-752071578eaf/%E1%84%82%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%87%E1%85%A5.png" />
            <img src="https://cdn.inflearn.com/public/group_logo/0/e7dd4c2a-8496-4708-b9fd-ae66317e40ad/%E1%84%82%E1%85%A6%E1%86%A8%E1%84%89%E1%85%B3%E1%86%AB.png" />
            <img src="https://cdn.inflearn.com/public/group_logo/0/10b49bf2-cd9a-4501-ac3c-84059d04f171/%E1%84%89%E1%85%A1%E1%86%B7%E1%84%89%E1%85%A5%E1%86%BC.png" />
            <img src="https://cdn.inflearn.com/public/group_logo/0/a041f2fa-7f40-4517-bdb7-822fc7800d80/%E1%84%8F%E1%85%A1%E1%84%8F%E1%85%A1%E1%84%8B%E1%85%A9.png" />
            <img src="https://cdn.inflearn.com/public/group_logo/0/b47b4ead-5141-46ec-8003-81c6dbc2e5b7/LG.png" />
            <img src="https://cdn.inflearn.com/public/group_logo/0/4aa479b9-4e05-4f8e-84b3-1fb7edb60c0c/nc.png" />
          </div>
        </div>
      </section>

      <section id="apply">
        <div class="wrapper">
          <h1>다양한 서비스를 신청하세요.</h1>
          <p>
            인프런의 지식공유자 '비즈니스' 대학생 신청방법에 대해 알아보세요.
          </p>
          <div id="apply_cards">
            <div class="apply_card">
              <h3>지식공유자 되기</h3>
              <p>
                9개월간 온라인 기술 강의로만 1억원! <br />
                나의 지식을 나눠 사람들에게 배움의 기회를 주고, 의미있는 대가를
                가져가세요.
              </p>
              <a>
                지식공유자 참여하기
                <i
                  class="fa-solid fa-arrow-right"
                  style={{ fontSize: "12px", marginLeft: "4px" }}
                ></i>
              </a>
            </div>

            <div class="apply_card">
              <h3>인프런 비즈니스 신청</h3>
              <p>
                모든 팀원의 인프런의 강의들을 자유롭게 학습하는 환경을
                제공해주세요. <br />
                업무 스킬에 집중된 콘텐츠를 통해 최신 트렌드의 업무역량을 습득할
                수 있습니다.
              </p>
              <a>
                비즈니스 신청하기{" "}
                <i
                  class="fa-solid fa-arrow-right"
                  style={{ fontSize: "12px", marginLeft: "4px" }}
                ></i>
              </a>
            </div>

            <div class="apply_card">
              <h3>인프런 X 대학생</h3>
              <p>
                학교와 인프런이 함께 하여, <br />
                많은 학생 분들께 정해진 커리큘럼 이외에도 필요한 학습을
                보완하고, 더욱 성장할 수 있도록 도와드립니다.
              </p>
              <a>
                대학생 신청하기
                <i
                  class="fa-solid fa-arrow-right"
                  style={{ fontSize: "12px", marginLeft: "4px" }}
                ></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
