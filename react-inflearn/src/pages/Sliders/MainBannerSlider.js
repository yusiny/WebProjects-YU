import React, { useState, useEffect, useRef } from "react";
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

import { mainBanners } from "../../assets/banners";

SwiperCore.use([Autoplay]);

export default function MainBannerSlider() {
  const swiperRef = React.useRef(null);
  const [pageIdx, setPageIdx] = useState(0);

  const params = {
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    onSlideChange: (swiperCore) => {
      setPageIdx(swiperCore.realIndex + 1);
    },
  };

  const [playDisplay, setPlayDisplay] = useState("none");
  const [pauseDisplay, setPauseDisplay] = useState("block");
  const onAutoplay = (boolean) => {
    if (boolean) {
      swiperRef.current.swiper.autoplay.start();
      setPlayDisplay("none");
      setPauseDisplay("block");
    } else {
      swiperRef.current.swiper.autoplay.stop();
      setPlayDisplay("block");
      setPauseDisplay("none");
    }
  };

  return (
    <Swiper id="main_banner_swiper" ref={swiperRef} {...params}>
      <div id="main_banner_slides">
        {mainBanners.map((banner) => {
          return (
            <SwiperSlide style={{ backgroundColor: banner.background_color }}>
              <div class="wrapper">
                <div class="swiper-slide-left">
                  {banner.tag != null ? (
                    <h6
                      class="swiper-tag"
                      style={{
                        color: banner.tag.color,
                        backgroundColor: banner.tag.backgroundColor,
                      }}
                    >
                      {banner.tag.name}
                    </h6>
                  ) : null}

                  <h1 class="swiper-title" style={{ color: banner.text_color }}>
                    {banner.title}
                  </h1>
                  <p
                    class="swiper-content"
                    style={{ color: banner.text_color }}
                  >
                    {banner.content}
                  </p>
                </div>

                <img class="swiper-slide-right" src={banner.image_url} />
              </div>
            </SwiperSlide>
          );
        })}
      </div>

      <div id="main_banner_controls">
        <div class="wrapper main_banner_indicator_wrapper">
          <div id="main_banner_pagination_wrapper">
            <span id="main_banner_pagination_idx">{pageIdx}/7</span>

            <div id="main_banner_pagination_button_wrapper">
              <FontAwesomeIcon
                icon={faChevronLeft}
                onClick={() => swiperRef.current.swiper.slidePrev()}
              />

              <FontAwesomeIcon
                icon={faPlay}
                id="main_banner_play"
                style={{ display: playDisplay }}
                onClick={() => onAutoplay(true)}
              />
              <img
                src="/assets/ic_pause.svg"
                style={{ width: "14px", height: "14px", display: pauseDisplay }}
                onClick={() => onAutoplay(false)}
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
