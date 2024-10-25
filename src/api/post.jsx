import axios from "axios";
import { getCookie } from "../utils/useCookie";

const assessToken = getCookie("accessToken");
const userId = window.localStorage.getItem("userId");

export const POST_WRITE = async (postInfo) => {
  const url = "http://localhost:8080/api/posts";
  const accessToken = getCookie("accessToken");

  console.log("!!!!!!!!!!1!확인", postInfo);
  const res = await axios({
    method: "post",
    url: url,
    data: postInfo, // FormData를 직접 데이터로 사용
    headers: {
      "Content-Type": "multipart/form-data", // FormData를 사용하므로 Content-Type을 설정
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return res.data;
};

export const POST_READ = async (postId) => {
  const accessToken = getCookie("accessToken");

  const res = await axios.get(`http://localhost:8080/api/posts/${postId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log(res.data);
  return res.data;
};
