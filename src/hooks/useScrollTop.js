import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // 경로가 변경될 때 스크롤을 최상단으로 이동
  }, [pathname]);
}

export default useScrollToTop;
