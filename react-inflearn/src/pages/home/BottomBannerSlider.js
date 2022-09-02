import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function BottomBannerSlider() {
  const swiperRef = React.useRef(null);
  return (
    <Swiper ref={swiperRef} id="bottom_banner_swiper">
      <SwiperSlide
        style={{
          backgroundImage: `url(
            "https://cdn.inflearn.com/public/main_sliders/3b67a1a1-aae3-442e-8e17-791b7cdfb5f5/bottom-1920-205-%281111%29.jpg"
          )`,
          backgroundPositionX: "center",
        }}
      >
        <div class="slide_wrapper">
          <p>
            모든 팀원이 인프런의 강의들을 <br />
            자유롭게 학습하는 환경을 제공해 주세요.
          </p>
          <a>비즈니스 알아보기</a>
        </div>
      </SwiperSlide>

      <SwiperSlide
        style={{
          backgroundImage: `url(
            "https://cdn.inflearn.com/public/main_sliders/38744ba0-b12a-491a-9ca2-43375c3905ba/share-you.jpg"
          )`,
          backgroundPositionX: "center",
        }}
      >
        <div class="slide_wrapper">
          <p>
            지식을 나눠주세요. <br />
            쉽게 시작하고 합당한 보상을 받을 수 있어요.
          </p>
          <a>지식공유 알아보기</a>
        </div>
      </SwiperSlide>

      <SwiperSlide
        style={{
          backgroundImage: `url(
            "https://cdn.inflearn.com/public/main_sliders/39bcb91f-64a4-4a16-8878-e8dc7cd342e8/bottom-1920-205-%28221%29.jpg"
          )`,
          backgroundPositionX: "center",
        }}
      >
        <div class="slide_wrapper">
          <p style={{ color: "#fff" }}>
            당신은 더 좋은 곳에 갈 수 있어요. <br />
            지금 열려있는 채용공고를 확인해보세요.
          </p>
          <a>공고 확인하기</a>
        </div>
      </SwiperSlide>
      <div class="buttons_wrapper">
        <div class="buttons_container">
          <div
            class="button_swiper button_swiper-disabled"
            id="swiper_bottom_button_prev"
            onClick={() => swiperRef.current.swiper.slidePrev()}
          >
            <img src="/assets/ic_left.svg" />
          </div>
          <div
            class="button_swiper"
            id="swiper_bottom_button_next"
            style={{ marginLeft: "4px" }}
            onClick={() => swiperRef.current.swiper.slideNext()}
          >
            <img src="/assets/ic_right.svg" />
          </div>
        </div>
      </div>
    </Swiper>
  );
}
