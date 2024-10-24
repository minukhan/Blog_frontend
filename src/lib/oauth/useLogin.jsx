import { Kakao_Auth_url } from "./OAuth";

const useLogin = () => {
  const handleLogin = () => {
    window.location.href = Kakao_Auth_url;
  };

  return {
    handleLogin,
  };
};

export default useLogin;
