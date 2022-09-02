import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { bottomBanners } from "../../assets/banners";

export default function BottomBannerSlider() {
  const swiperRef = React.useRef(null);

  return (
    <Swiper ref={swiperRef} id="bottom_banner_swiper">
      {bottomBanners.map((banner) => {
        return (
          <SwiperSlide
            style={{
              backgroundImage: `url(` + banner.background_url + `)`,
              backgroundPositionX: "center",
            }}
          >
            <div class="slide_wrapper">
              <p style={{ color: banner.text_color }}>{banner.title}</p>
              <a>{banner.button}</a>
            </div>
          </SwiperSlide>
        );
      })}

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
