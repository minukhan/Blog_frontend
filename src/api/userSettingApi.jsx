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
    "여자 목소리": "WOMAN",
    "남자 목소리": "MAN",
  };

  // Update the voiceSelected in formData based on the mapping
  if (formData.voiceSelected in voiceMapping) {
    formData.voiceSelected = voiceMapping[formData.voiceSelected];
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

export const getUserInfo = async (uId) => {
  const res = await axios.get(`${perfix}/${uId}`);
  return res.data;
};

export const editUserInfo = async (uId, uInfo) => {
  const res = await axios.put(`${perfix}/${uId}`, uInfo);
  return res.data;
};

export const editUserSocialInfo = async (uId, uInfo) => {
  const res = await axios.put(`${perfix}/${uId}/social`, uInfo);
  return res.data;
};
