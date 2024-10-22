import axios from "axios";

export const POST_WRITE = async (postInfo) => {
  //   const accessToken = window.localStorage.getItem("accessToken");

  const url = "/api/posts";
  const res = await axios({
    method: "post",
    url: url,
    // headers: {
    //   Authorization: `Bearer ${accessToken}`,
    // },
    data: {
      userId: "",
      title: "",
      postTitle: "",
      postCategory: "",
      postSummary: "",
      postContent: "",
    },
  });

  return res.data;
};
