import axios from "axios";

export const POST_WRITE = async (postInfo) => {
  //   const accessToken = window.localStorage.getItem("accessToken");

  const url = "http://localhost:8080/api/posts";

  const res = await axios({
    method: "post",
    url: url,
    data: postInfo, // FormData를 직접 데이터로 사용
    headers: {
      "Content-Type": "multipart/form-data", // FormData를 사용하므로 Content-Type을 설정
    },
  });

  return res.data;
};
