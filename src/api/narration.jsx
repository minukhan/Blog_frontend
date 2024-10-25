import axios from "axios";
import { getCookie } from "../utils/useCookie";

export const REGISTRATION_VOICEID = async (voiceUrl) => {
  //   const ≈ = window.localStorage.getItem("accessToken");
  const accessToken = getCookie("accessToken");

  console.log("확인용", voiceUrl);
  // userId local에서 가져오기
  // let userId = 1;
  const userId = window.localStorage.getItem("userId");
  const url = `http://localhost:8080/api/voice/${userId}`;

  const res = await axios({
    method: "post",
    url: url,
    data: voiceUrl, // FormData를 직접 데이터로 사용
    headers: {
      "Content-Type": "multipart/form-data", // FormData를 사용하므로 Content-Type을 설정
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return res.data;
};
