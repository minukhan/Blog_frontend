import axios from "axios";
import { getCookie } from "../utils/useCookie";

const API_SERVER_HOST = "http://localhost:8080";
const perfix = `${API_SERVER_HOST}/api`;

const assessToken = getCookie("accessToken");
const userId = window.localStorage.getItem("userId");

//사이드 바 위한 사용자 정보 조회
export const getUserInfo = async (uId) => {
  const res = await axios({
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${assessToken}`,
    },
    method: "get",
    url: `${perfix}/users/${uId}`,
  });
  console.log(res);
  return res.data;
};

//유저별 포스트 조회
export const getPostByUserId = async (uId) => {
  const res = await axios({
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${assessToken}`,
    },
    method: "get",
    url: `${perfix}/posts/user/${uId}`,
  });
  return res.data;
};

export const getUserPostsByCategory = async (uId, categoryName) => {
  const res = await axios.get(`${perfix}/posts/user/category/${uId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${assessToken}`,
    },
    params: {
      category: categoryName,
    },
  });
  return res.data;
};
