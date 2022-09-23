import React from "react";
import { useNavigate } from "react-router-dom";

export default function RoadmapCard({ title, image_url }) {
  const navigate = useNavigate();

  return (
    <div
      class="roadmap"
      onClick={() =>
        navigate("/roadmap", { state: { title: title, url: image_url } })
      }
    >
      <img src={image_url} />
      <div class="swiper-slide-lecture-contents">
        <h1 class="roadmap_title">{title}</h1>
      </div>
    </div>
  );
}
