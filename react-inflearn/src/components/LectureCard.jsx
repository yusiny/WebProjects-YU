import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { bookmarkState } from "../recoil/Bookmark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartR } from "@fortawesome/free-regular-svg-icons";

export default function LectureCard({ lecture }) {
  const [bookmark, setBookmark] = useRecoilState(bookmarkState);
  const addBookmark = (e) => {
    e.stopPropagation();

    setBookmark((prev) => {
      const variable = { ...prev };

      if (!isBookmarked) {
        variable.count = prev.count + 1;
        variable.lectures = [...prev.lectures, lecture];
      } else {
        variable.count = prev.count - 1;
      }

      setIsBookmarked(!isBookmarked);

      return { ...variable };
    });
  };

  const [isBookmarked, setIsBookmarked] = useState(false);

  const [back, setBack] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="lecture_root">
      <div
        class="lecture"
        onMouseEnter={() => setBack(true)}
        onMouseLeave={() => setBack(false)}
        onClick={() => navigate("/lecture", { state: lecture })}
      >
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
          <p class="lecture_price">
            {lecture.real_price != null ? (
              <del>{lecture.real_price}</del>
            ) : null}
            {lecture.price}
          </p>
          <div class="lecture_tags">
            {lecture.tags.map((tag) => {
              return (
                <div class="lecture_tag" style={{ backgroundColor: tag.color }}>
                  {tag.name}
                </div>
              );
            })}
          </div>
        </div>

        {back && (
          <div class="lecture_back">
            <p class="lecture_title">{lecture.title}</p>
            <div class="lecture_meta">
              <img src="/assets/ic_level.svg" />
              <span>{lecture.meta_level}</span>
            </div>
            <div class="lecture_meta">
              <img src="/assets/ic_folder.svg" />
              <span>{lecture.meta_folder}</span>
            </div>
            <div class="lecture_meta">
              <img src="/assets/ic_skill.svg" />
              <span>{lecture.meta_skill}</span>
            </div>

            <div class="lecture_extra">
              <div class="tooltip tooltip-cart">
                <i class="fa-solid fa-cart-plus"></i>
                <span class="tooltiptext"> 수강바구니에 추가 </span>
              </div>
              <div class="tooltip tooltip_like" onClick={(e) => addBookmark(e)}>
                {isBookmarked ? (
                  <FontAwesomeIcon
                    icon={faHeart}
                    style={{ color: "#e94e58", fontSize: "16px" }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faHeartR}
                    style={{ fontSize: "16px" }}
                  />
                )}

                <span class="tooltiptext"> 좋아요에 추가 </span>
              </div>
              <div class="tooltip tooltip_plus">
                <img src="/assets/ic_plus.svg" />
                <span class="tooltiptext"> 내 폴더에 추가 </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
