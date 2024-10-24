import { Kakao_Auth_url } from "./OAuth";

const useLogin = () => {
  const handleLogin = () => {
    console.log("Test");
    // 여기서 jwt유무 혹은 jwt만료로 회원가입/로그인 분류하기!!

    window.location.href = Kakao_Auth_url;
  };

  return {
    handleLogin,
  };
};

export default useLogin;
