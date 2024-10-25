import styled from "styled-components";
import PostView from "./../../../components/MyPage/PostView/PostView";
import PostViewComment from "./../../../components/MyPage/PostView/PostViewComment";
import useScrollToTop from "../../../hooks/useScrollTop";
import useLoadingStore from "../../../store/useLoadingStore";
import { useEffect, useState } from "react";
import { DotLoader } from "react-spinners";
import SkeletonPostView from "../../../components/MyPage/PostView/SkeletonPostView";

function PostsViewPage() {
  const { loadingSignal, setLoadingSignal } = useLoadingStore();
  const [isLoading, setIsLoading] = useState(false);
  useScrollToTop();
  useEffect(() => {
    // loadingSignal이 true일 때 로딩 시작
    if (loadingSignal) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
        setLoadingSignal(false); // 1초 후에 loadingSignal을 false로 설정
      }, 1000);

      // 컴포넌트가 언마운트될 때 타이머 정리
      return () => clearTimeout(timer);
    }
  }, [loadingSignal]);
  return (
    <div>
      <PostContainer>
        {isLoading ? (
          <SkeletonPostView />
        ) : (
          // <div
          //   style={{
          //     display: "flex",
          //     justifyContent: "center",
          //     alignItems: "center",
          //     height: "800px",
          //   }}
          // >
          //   <DotLoader size={60} /> {/* 로딩 중일 때 스피너 표시 */}
          // </div>
          <div>
            <PostView />
            <PostViewComment />
          </div>
        )}
      </PostContainer>
    </div>
  );
}

export default PostsViewPage;
const PostContainer = styled.div`
  margin: 0 auto;
  padding: 30px;
  background-color: var(--ligh-gray);
  border-radius: var(--border-radius);
  box-shadow: 10px 10px 30px rgba(174, 174, 192, 0.6);
  width: 800px;
`;
