import axios from "axios";

const API_SERVER_HOST = "http://localhost:8080";
const perfix = `${API_SERVER_HOST}/api`;

//사이드 바 위한 사용자 정보 조회
export const getUserInfo = async (uId) => {
  const res = await axios.get(`${perfix}/users/${uId}`);

  return res.data;
};

//유저별 포스트 조회
export const getPostByUserId = async (uId) => {
  const res = await axios.get(`${perfix}/posts/user/${uId}`);

  return res.data;
};
