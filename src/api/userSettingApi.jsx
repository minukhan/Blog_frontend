import axios from "axios";

const API_SERVER_HOST = "http://localhost:8080";
const perfix = `${API_SERVER_HOST}/api/users`;

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
