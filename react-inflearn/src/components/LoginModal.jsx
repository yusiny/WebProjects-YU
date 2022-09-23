import React, { useState, useEffect, useRef } from "react";

export default function LoginModal(props) {
  function closeModal() {
    props.closeModal();
  }

  const [showPw, setShowPw] = useState(true);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    passwordRef.current.type = showPw ? "text" : "password";
  }, [showPw]);

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [valid, setValid] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);

    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    if (regex.test(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };
  const handlePw = (e) => {
    setPw(e.target.value);

    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;

    if (regex.test(pw)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };
  useEffect(() => {
    // if (!emailValid) emailRef.style.border;

    if (emailValid && pwValid) {
      setValid(false);
      return;
    }

    setValid(true);
  }, [emailValid, pwValid]);

  return (
    <div id="login-modal">
      <span className="header-close" onClick={closeModal}>
        <img src="/assets/ic_close.svg" />
      </span>
      <span className="header-logo">
        <img src="/assets/ic_inflearn_logo.svg" />
      </span>

      <div className="inputs">
        <div className="inputWrap">
          <input
            className="input"
            type="email"
            placeholder="이메일"
            value={email}
            onChange={handleEmail}
          />
        </div>

        <div className="inputWrap">
          <input
            className="input"
            type="password"
            placeholder="비밀번호"
            value={pw}
            onChange={handlePw}
            ref={passwordRef}
          ></input>
          {showPw && (
            <img src="/assets/ic_eye_on.svg" onClick={() => setShowPw(false)} />
          )}
          {!showPw && (
            <img src="/assets/ic_eye_off.svg" onClick={() => setShowPw(true)} />
          )}
        </div>

        <div className="errorMessageWrap">
          {!pwValid && pw.length > 0 && (
            <div>영문, 숫자, 특수문자 포함 8자 이상 입력해 주세요.</div>
          )}
        </div>

        <div>
          <button className="loginButton" disabled={valid}>
            로그인
          </button>
        </div>
      </div>

      <div className="mores">
        <span id="findPW">비밀번호 찾기</span>
        <span id="signUp">회원가입</span>
      </div>

      <div className="socials">
        <hr />
        <span>간편 로그인</span>
        <div className="socials-icons">
          <button
            className="social-icon"
            style={{ backgroundColor: "#fae500" }}
          >
            <img src="/assets/logo_kakao.svg" />
          </button>

          <button
            className="social-icon"
            style={{ backgroundColor: "#f8f8f8" }}
          >
            <img src="/assets/logo_google.svg" />
          </button>

          <button
            className="social-icon"
            style={{ backgroundColor: "#3c4043" }}
          >
            <img src="/assets/logo_github.svg" />
          </button>

          <button
            className="social-icon"
            style={{ backgroundColor: "#325ca6" }}
          >
            <img src="/assets/logo_facebook.svg" />
          </button>

          <button className="social-icon" style={{ backgroundColor: "#fff" }}>
            <img src="/assets/logo_apple.svg" />
          </button>
        </div>
      </div>
    </div>
  );
}
