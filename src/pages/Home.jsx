import { useEffect, useState } from "react";
import PostItem from "../components/Home/PostItem";
import * as S from "../styles/home/home.style";
import axios from "axios";
import { getCookie } from "../utils/useCookie";
import AlertModal from "../components/common/AlertModal";
import Clock from "../components/Clock/Clock";

function Home() {
  const [posts, setPosts] = useState([]); // 게시글 상태
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태

  const assessToken = getCookie("accessToken");

  // 최신순 정렬 함수
  const sortPostsByDate = (posts) => {
    return posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  };

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/posts");
      const sortedPosts = sortPostsByDate(response.data);
      setPosts(sortedPosts);
      setLoading(false);
      console.log(response);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const fetchPostsByCategory = async (category) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/posts/category/${category}`,
        {
          headers: {
            Authorization: `Bearer ${assessToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      const sortedPosts = sortPostsByDate(response.data);
      setPosts(sortedPosts);
      setLoading(false);
      console.log(response);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <S.Container>
      {/* <S.ImgClock src="/images/clock.png" alt="Centered" /> */}
      {/* <S.ImgClock src="/images/clock2.svg" alt="Centered" /> */}
      <Clock />

      <S.Title>틈새에서 내 목소리로 블로그를 들을 수 있습니다.</S.Title>
      <S.Subtitle>
        바쁜 일상 속 틈새에서 나만의 플레이리스트를 완성해보는 건 어떤가요?
      </S.Subtitle>
      <S.CategorySection>
        <S.CategoryButton onClick={fetchPosts}>전체</S.CategoryButton>
        <S.CategoryButton onClick={() => fetchPostsByCategory("기술")}>
          기술
        </S.CategoryButton>
        <S.CategoryButton onClick={() => fetchPostsByCategory("음식")}>
          음식
        </S.CategoryButton>
        <S.CategoryButton onClick={() => fetchPostsByCategory("여행")}>
          여행
        </S.CategoryButton>
        <S.CategoryButton onClick={() => fetchPostsByCategory("반려동물")}>
          반려동물
        </S.CategoryButton>
        <S.CategoryButton onClick={() => fetchPostsByCategory("뉴스")}>
          뉴스
        </S.CategoryButton>
        <S.CategoryButton onClick={() => fetchPostsByCategory("영화")}>
          영화
        </S.CategoryButton>
        <S.CategoryButton onClick={() => fetchPostsByCategory("연예")}>
          연예
        </S.CategoryButton>
      </S.CategorySection>
      <S.PostListContainer>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {posts.map((post) => (
          <PostItem key={post.postId} post={post} />
        ))}
      </S.PostListContainer>
    </S.Container>
  );
}

export default Home;
