import React from "react";

export default function Read({ title, desc, image_url }) {
  return (
    <div class="read">
      <img src={image_url} />
      <div class="read_contents">
        <h1 class="read_title">{title}</h1>
        <div class="read_text">{desc}</div>
      </div>
    </div>
  );
}
