const Rest_api_key = "f2a4a07bec3533d3202bc37cf312ab08";
const redirect_uri = "http://localhost:5173/authMiddle";

export const Kakao_Auth_url = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
