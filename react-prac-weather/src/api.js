import axios from "axios";

export const Kakao = axios.create({
  baseURL: "https://dapi.kakao.com/v2",
  headers: {
    Authorization: "KakaoAK c274c4aebaaff20f8a2c8a575cecb7ec",
  },
});
