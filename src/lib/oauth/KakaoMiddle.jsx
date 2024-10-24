import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { setCookie } from "../../utils/useCookie";

const KakaoMiddle = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      // code(인가코드)는 서버로 보내기
      try {
        const code = new URL(window.location.href).searchParams.get("code"); // 현재 url의 파라미터 가져오기 + 파라미터 안에서 'code'값 가져오기
        console.log("인가코드:", code);

        const url = `http://localhost:8080/api/kakao/callback?code=${code}`;
        const res = await axios({
          method: "post",
          url: url,
        });

        if (res.status == 200) {
          console.log(res);
          setCookie("accessToken", res.data.token, {
            expires: 7,
            path: "/",
          });

          window.localStorage.setItem("userId", res.data.userId);
          window.localStorage.setItem("userNickname", res.data.userNickname);
          window.localStorage.setItem(
            "userProfileImage",
            res.datauserProfileImage
          );

          navigate("/narration/register");
        } else {
          console.log(res);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [dispatch, navigate]);

  return <></>;
};

export default KakaoMiddle;
