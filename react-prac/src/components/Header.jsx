import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div
      style={{
        backgroundColor: "green",
      }}
    >
      <Link to="/login">로그인</Link>
      <Link to="/movie">영화</Link>
      <Link to="/radio">라디오</Link>
    </div>
  );
}
