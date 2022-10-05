import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { nicknameState } from "../recoil/User";

export default function Recoil() {
  return (
    <div>
      Recoil
      <div style={{ padding: "10px 0", border: "1px solid red" }}>
        <Input />
      </div>
      <Result />
    </div>
  );
}

const Input = () => {
  const [nickname, setNickname] = useState("");
  const handleNickname = (e) => {
    setNickname(e.target.value);
  };

  const [nicknameAtomState, setNicknameState] = useRecoilState(nicknameState);
  const onClickSave = () => {
    setNicknameState(nickname);
  };

  return (
    <>
      <div> 닉네임 입력하시오! </div>
      <input
        className="input"
        placeholder="닉네임 ㄱㄱ"
        value={nickname}
        onChange={handleNickname}
        style={{ padding: "10px 0", border: "1px solid black" }}
      />
      <button onClick={onClickSave}>저장</button>
    </>
  );
};

const Result = () => {
  const [nicknameAtomState, setNicknameState] = useRecoilState(nicknameState);
  const nicknameValue = useRecoilValue(nicknameState);

  return (
    <div style={{ padding: "30px 0", border: "1px solid blue" }}>
      <div>닉네임 :{nicknameValue}</div>
    </div>
  );
};
