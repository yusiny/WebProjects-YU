import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div
      style={{
        backgroundColor: "green",
        zIndex: 100,
      }}
    >
      <Link to="/login">로그인</Link>
      <Link to="/movie">영화</Link>
      <Link to="/radio">라디오</Link>
      <Link to="/redux">리덕스</Link>
      <Link to="/recoil">리코일</Link>
    </div>
  );
}
