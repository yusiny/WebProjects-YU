import React from "react";
import { useSelector } from "react-redux";

export default function Redux() {
  const { email, pw } = useSelector((state) => state.userReducer);
  return (
    <div style={{ border: "1px solid red" }}>
      <h1>유저 정보</h1>
      <div>
        <div> 이메일: {email} </div>
        <div> 비밀번호: {pw} </div>
      </div>

      <Child1 />
    </div>
  );
}

// Props로 전달 필요 없이 selector 하나로 구독이 가능!
const Child1 = () => {
  const { email, pw } = useSelector((state) => state.userReducer);

  return (
    <>
      <div style={{ border: "2px solid blue" }}> 이메일: {email} </div>
      <Child2 />
    </>
  );
};

const Child2 = () => {
  const { email, pw } = useSelector((state) => state.userReducer);

  return (
    <>
      <div style={{ border: "2px solid green" }}> 이메일: {email} </div>
      <Child3 />
    </>
  );
};
const Child3 = () => {
  const { email, pw } = useSelector((state) => state.userReducer);

  return <div style={{ border: "2px solid yellow" }}> 이메일: {email} </div>;
};
