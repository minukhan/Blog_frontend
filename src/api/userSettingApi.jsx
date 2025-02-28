import axios from "axios";
import { getCookie } from "../utils/useCookie";

const API_SERVER_HOST = "http://localhost:8080";
const perfix = `${API_SERVER_HOST}/api/users`;

const assessToken = getCookie("accessToken");
const userId = window.localStorage.getItem("userId");

/** 나레이션 등록 폼 api */
export const POST_FORMSETTING = async (formData) => {
  // const res = await axios.get(`${perfix}/register/${uId}`);
  // return res.data;
  console.log(formData);

  const voiceMapping = {
    "내 목소리": "ME",
    "젊은 여성 목소리": "WOMAN",
    "중후한 남성 목소리": "MAN",
  };

  // Update the voiceSelected in formData based on the mapping
  if (formData.voiceSelected in voiceMapping) {
    formData.voiceSelected = voiceMapping[formData.voiceSelected];
    console.log(formData.voiceSelected);
  }

  const res = await axios({
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${assessToken}`,
    },
    method: "post",
    url: `${perfix}/register/${userId}`,
    data: formData,
  });

  return res.data;
};

//사용자 상세정보 조회 api
export const getUserInfo = async (uId) => {
  const res = await axios({
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${assessToken}`,
    },
    method: "get",
    url: `${perfix}/${uId}`,
  });
  return res.data;
};

//사용자 상세정보 수정1 - 닉네임, 목소리 선택
export const editUserInfo = async (uId, uInfo) => {
  const res = await axios({
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${assessToken}`,
    },
    method: "put",
    url: `${perfix}/${uId}`,
    data: uInfo,
  });
  return res.data;
};

//사용자 상세정보 수정2 - 블로그 소개, 소셜 링크
export const editUserSocialInfo = async (uId, uInfo) => {
  const res = await axios({
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${assessToken}`,
    },
    method: "put",
    url: `${perfix}/${uId}/social`,
    data: uInfo,
  });
  return res.data;
};

//회원 탈퇴
export const deleteUserInfo = async (uId) => {
  const res = await axios({
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${assessToken}`,
    },
    method: "delete",
    url: `${perfix}/${uId}/delete`,
  });
  return res.data;
};
