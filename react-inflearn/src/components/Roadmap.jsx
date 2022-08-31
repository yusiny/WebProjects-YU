import React from "react";

export default function Roadmap({ title, image_url }) {
  return (
    <div class="roadmap">
      <img src={image_url} />
      <div class="swiper-slide-lecture-contents">
        <h1 class="roadmap_title">{title}</h1>
      </div>
    </div>
  );
}
