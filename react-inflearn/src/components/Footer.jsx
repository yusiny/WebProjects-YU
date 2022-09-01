import React from "react";
import "../styles/footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div class="wrapper">
        <div id="footer_menu_wrapper">
          <div class="footer_menu">
            <h6>인프런</h6>
            <a>공지사항</a>
            <a>인프런 소개</a>
            <a>인프랩 실Log</a>
            <a>인프랩 채용</a>
          </div>

          <div class="footer_menu">
            <h6>고객센터</h6>
            <a>자주묻는 질문</a>
            <a>수료증 확인</a>
            <a>이용약관</a>
            <a>개인정보취급방침</a>
            <a>저작권 신고센터</a>
          </div>

          <div class="footer_menu">
            <h6>신청하기</h6>
            <a>지식공유참여</a>
            <a>멘토링 소개</a>
            <a>인프런 비즈니스</a>
            <a>인프런 X 대학교</a>
            <a>인프런 X AWS 제휴</a>
          </div>

          <div class="footer_menu">
            <h6>학습하기</h6>
            <a>IT 프로그래밍</a>
            <a>크리에이티브</a>
            <a>멉무스킬</a>
            <a>수강코드 등록</a>
            <a>포인트코드 등록</a>
          </div>

          <div class="footer_menu">
            <h6>커뮤니티</h6>
            <a>학습로드맵</a>
            <a>질문 {"&"} 답변</a>
            <a>수강평 모아보기</a>
            <a>강의 · 기능요청</a>
          </div>
        </div>

        <div id="footer_information_wrapper">
          <div id="footer_information_left">
            <h6>
              <img src="/assets/ic_inflearn_logo.svg" />
              &nbsp; | <span>개인정보취급방침</span> | <span>이용약관</span>
            </h6>
            <div>
              주인프랩 | 대표자: 이형주 | 사업자번호: 499-81-00612 사업자 정보
              확인
              <br />
              통신판매업: 2018-성남분당B-0062 | 개인정보보호책임자: 이동욱 |
              이메일 info@inflearn.com
              <br />
              주소: 경기도 성남시 분당구 대왕판교로 660 유스페이스 1A동 405호
            </div>
            <p>©INFLAB. ALL RIGHTS RESERVE</p>
          </div>

          <div id="footer_information_right">
            <a class="button_bottom_logo">
              <i class="text">N</i>
            </a>
            <a class="button_bottom_logo">
              <i class="text">B</i>
            </a>
            <a class="button_bottom_logo">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a class="button_bottom_logo">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a class="button_bottom_logo">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a class="button_bottom_logo">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
