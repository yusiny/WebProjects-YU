import React from "react";
import { useNavigate } from "react-router-dom";

export default function ReadCard({ title, desc, image_url }) {
  const navigate = useNavigate();

  return (
    <div class="read">
      <img
        src={image_url}
        onClick={() =>
          navigate("/read", {
            state: { title: title, url: image_url, desc: desc },
          })
        }
      />
      <div class="read_contents">
        <h1 class="read_title">{title}</h1>
        <div class="read_text">{desc}</div>
      </div>
    </div>
  );
}
