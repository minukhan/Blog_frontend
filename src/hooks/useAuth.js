import { useState } from "react";

const useAuth = () => {
  const [loggedIn, setLoggedIn] = useState(true); // todo
  return { loggedIn, setLoggedIn };
};

export default useAuth;
