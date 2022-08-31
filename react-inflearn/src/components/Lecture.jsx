import React from "react";

export default function Lecture({ lecture }) {
  return (
    <div class="lecture">
      <div class="lecture_front">
        <img src={lecture.image_url} />
        <h1 class="lecture_title">{lecture.title}</h1>
        <p class="lecture_producer">{lecture.producer}</p>
        <div class="lecture_ratings">
          <div class="lecture_ratings_stars">
            <img src="/assets/ic_star.svg" />
            <img src="/assets/ic_star.svg" />
            <img src="/assets/ic_star.svg" />
            <img src="/assets/ic_star.svg" />
            <img src="/assets/ic_star.svg" />
          </div>
          <p class="lecture_ratings_number">({lecture.ratings})</p>
        </div>
        <p class="lecture_price">무료</p>
        <div
          class="lecture_tag"
          style={{ backgroundColor: "hsl(321,63%,90%)" }}
        >
          +1600명
        </div>
      </div>
    </div>
  );
}
