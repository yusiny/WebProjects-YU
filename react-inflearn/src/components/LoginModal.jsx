import React from "react";

export default function LoginModal(props) {
  function closeModal() {
    props.closeModal();
  }

  return (
    <div className="modal" onClick={closeModal}>
      <div className="body" onClick={(e) => e.stopPropagation()}>
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
              ></input>
            </div>

            <div className="inputWrap">
              <input
                className="input"
                type="password"
                placeholder="비밀번호"
              ></input>
              <img src="/assets/ic_eye_on.svg" />
            </div>

            <div>
              <button className="loginButton">로그인</button>
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

              <button
                className="social-icon"
                style={{ backgroundColor: "#fff" }}
              >
                <img src="/assets/logo_apple.svg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
