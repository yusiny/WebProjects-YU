import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper/core";
import "swiper/css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faChevronDown,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

SwiperCore.use([Autoplay]);

export default function MainBannerSlider() {
  const swiperRef = React.useRef(null);
  const params = {
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 4000,
    },
  };

  return (
    <Swiper id="main_banner_swiper" ref={swiperRef} {...params}>
      <div id="main_banner_slides">
        <SwiperSlide style={{ backgroundColor: "#d2d9dd" }}>
          <div class="wrapper">
            <div class="swiper-slide-left">
              <h6
                class="swiper-tag"
                style={{ color: "#ffffff", backgroundColor: "#1044ff" }}
              >
                오늘 뭐 듣지?
              </h6>
              <h1 class="swiper-title">무슨 강의 들을지 고민이라면?</h1>
              <h1 class="swiper-title">현직자 Top 50 먼저 보기 👀</h1>
              <p class="swiper-content">
                입문부터 실전까지! <br />
                믿고 보는 실무자 Pick
              </p>
            </div>
            <img
              class="swiper-slide-right"
              src="https://cdn.inflearn.com/public/main_sliders/7f3b415a-7267-49fc-9c68-9926b8c5f600/%5B22%E1%84%90%E1%85%A2%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%86%AB%E1%84%83%E1%85%B5%E1%86%BC%5Db2b_top50_main_521.gif"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: "#00d078" }}>
          <div class="wrapper ">
            <div class="swiper-slide-left">
              <h1 class="swiper-title" style={{ color: "#000" }}>
                뭘 들어야 하지? 🤔
              </h1>
              <h1 class="swiper-title" style={{ color: "#000" }}>
                나에게 딱 맞는 입문 강의
              </h1>
              <p class="swiper-content" style={{ color: "#000" }}>
                어디서부터 시작해야 할지 모르는 <br />
                당신을 위한 입문 강의
              </p>
            </div>
            <img
              class="swiper-slide-right"
              src="https://cdn.inflearn.com/public/main_sliders/f57e3418-f145-43a4-89d6-f1c4f0293460/%5B%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%92%E1%85%B5%E1%84%8B%E1%85%A5%E1%84%85%E1%85%A9%5D%E1%84%82%E1%85%A1%E1%84%8B%E1%85%A6%E1%84%80%E1%85%A6%E1%84%86%E1%85%A1%E1%86%BD%E1%84%82%E1%85%B3%E1%86%AB%E1%84%80%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%B4_main_521.png"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: "#086394" }}>
          <div class="wrapper ">
            <div class="swiper-slide-left">
              <h6
                class="swiper-tag"
                style={{ color: "#002235", backgroundColor: "#00de84" }}
              >
                지식공유신청
              </h6>
              <h1 class="swiper-title" style={{ color: "#fff" }}>
                나누는 지식만큼
              </h1>
              <h1 class="swiper-title" style={{ color: "#fff" }}>
                커지는 보람과 보상
              </h1>
              <p class="swiper-content" style={{ color: "#fff" }}>
                인프런 지식공유자로 <br />
                높은 수익과 가치를 만들어보세요.
              </p>
            </div>
            <img
              class="swiper-slide-right"
              src="https://cdn.inflearn.com/public/main_sliders/f1057951-0477-4a8d-a017-dbe792e7cb16/%5B%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%92%E1%85%B5%E1%84%8B%E1%85%A5%E1%84%85%E1%85%A9%5D%E1%84%8C%E1%85%B5%E1%84%89%E1%85%B5%E1%86%A8%E1%84%80%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A1_628.gif"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: "#ff7836" }}>
          <div class="wrapper ">
            <div class="swiper-slide-left">
              <h6
                class="swiper-tag"
                style={{ color: "#ffffff", backgroundColor: "#1044ff" }}
              >
                신규 강의
              </h6>
              <h1 class="swiper-title" style={{ color: "#fff" }}>
                나만 몰랐었던 이 강의~♬
              </h1>
              <p class="swiper-content" style={{ color: "#fff" }}>
                매일 업데이트 되는 <br />
                인프런 신규강의를 만나보세요!
              </p>
            </div>
            <img
              class="swiper-slide-right"
              src="https://cdn.inflearn.com/public/main_sliders/7dc9730a-1a01-40a7-a509-4e8bceb73570/%5B%EB%A9%94%EC%9D%B8%ED%9E%88%EC%96%B4%EB%A1%9C%5D%EC%8B%A0%EA%B7%9C%EA%B0%95%EC%9D%98_main_521.gif"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: "#38e5ff" }}>
          <div class="wrapper ">
            <div class="swiper-slide-left">
              <h6
                class="swiper-tag"
                style={{ color: "#fff", backgroundColor: "#6344ec" }}
              >
                추천 학습 로드맵
              </h6>
              <h1 class="swiper-title" style={{ color: "#000" }}>
                왕초보를 위한
              </h1>
              <h1 class="swiper-title" style={{ color: "#000" }}>
                Lv. 1 인프런 로드맵 📖
              </h1>
              <p class="swiper-content" style={{ color: "#000" }}>
                인프런이 처음이라면, 길라잡이가 되어드릴게요.
              </p>
            </div>
            <img
              class="swiper-slide-right"
              src="https://cdn.inflearn.com/public/main_sliders/5207c5ee-e72f-4fc1-aad0-6122d2a55956/%5B%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%92%E1%85%B5%E1%84%8B%E1%85%A5%E1%84%85%E1%85%A9%5D%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3%E1%84%86%E1%85%A2%E1%86%B8%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%86%E1%85%AE%E1%86%AB_main_521.gif"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: "#59cf92" }}>
          <div class="wrapper ">
            <div class="swiper-slide-left">
              <h6
                class="swiper-tag"
                style={{ color: "#59cf92", backgroundColor: "#fff" }}
              >
                인프런 소개
              </h6>
              <h1 class="swiper-title" style={{ color: "#fff" }}>
                우리는 성장기회의
              </h1>
              <h1 class="swiper-title" style={{ color: "#fff" }}>
                평등을 추구합니다.
              </h1>
              <p class="swiper-content" style={{ color: "#fff" }}>
                누구나 배움의 기회를 누리고 꿈을 이룰 수 있도록! <br />
                인프런과 함께 배우고, 나누고, 성장하세요.
              </p>
            </div>
            <img
              class="swiper-slide-right"
              src="https://cdn.inflearn.com/public/main_sliders/04081c01-4aee-40ad-a500-5260f1cfd508/main_521_%EC%9D%B8%ED%94%84%EB%9F%B0%EC%86%8C%EA%B0%9C.png"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: "#00c471" }}>
          <div class="wrapper ">
            <div class="swiper-slide-left">
              <h6
                class="swiper-tag"
                style={{ color: "#fff", backgroundColor: "#00dfff" }}
              >
                함께해요
              </h6>
              <h1 class="swiper-title" style={{ color: "#fff" }}>
                함께 성장할
              </h1>
              <h1 class="swiper-title" style={{ color: "#fff" }}>
                동료를 찾아요 🌿
              </h1>
              <p class="swiper-content" style={{ color: "#fff" }}>
                #우리 #함께성장해요 <br />
                #동료여어디계신가요?
              </p>
            </div>
            <img
              class="swiper-slide-right"
              src="https://cdn.inflearn.com/public/main_sliders/68a15e47-7f40-444c-af73-60ab1acb8b3f/%5B%EB%B8%8C%EB%9E%9C%EB%93%9C%5D%EC%B1%84%EC%9A%A9%EC%9D%B4%EB%AF%B8%EC%A7%80%26%EA%B4%91%EA%B3%A0%EB%A6%AC%EB%89%B4%EC%96%BC_main_521.gif"
            />
          </div>
        </SwiperSlide>
      </div>

      <div id="main_banner_controls">
        <div class="wrapper main_banner_indicator_wrapper">
          <div id="main_banner_pagination_wrapper">
            <span id="main_banner_pagination_idx">1/7</span>

            <div id="main_banner_pagination_button_wrapper">
              <FontAwesomeIcon
                icon={faChevronLeft}
                onClick={() => swiperRef.current.swiper.slidePrev()}
              />
              <FontAwesomeIcon
                icon={faPlay}
                id="main_banner_play"
                style={{ display: "none" }}
              />

              <img
                src="/assets/ic_pause.svg"
                style={{ width: "14px", height: "14px" }}
              />

              <FontAwesomeIcon
                icon={faChevronRight}
                onClick={() => swiperRef.current.swiper.slideNext()}
              />
            </div>
          </div>

          <div class="divider"></div>
          <div id="main_banner_buttons_wrapper">
            <span class="main_banner_button main_banner_button_checked">
              Top 50 👑
            </span>
            <span class="main_banner_button">왕초보 모여라 😎</span>
            <span class="main_banner_button">지식공유신청</span>
            <span class="main_banner_button">신규 강의 🎁</span>
            <span class="main_banner_button">입문 로드맵</span>
            <span class="main_banner_button">인프런은 🌱</span>
            <span class="main_banner_button">인프런 동료찾기</span>
          </div>

          <button class="button_toggle">
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
      </div>
    </Swiper>
  );
}
