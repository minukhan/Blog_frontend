import PostItem from "../components/Home/PostItem";
import * as S from "../styles/home/Home.style";
function Home() {
  return (
    <S.Container>
      <S.ImgClock src="/images/clock.png" alt="Centered" />
      <S.Title>틈새에서 내 목소리로 블로그를 들을 수 있습니다.</S.Title>
      <S.Subtitle>
        바쁜 일상 속 틈새에서 나만의 플레이리스트를 완성해보는 건 어떤가요?
      </S.Subtitle>
      <S.CategorySection>
        <S.CategoryButton>전체</S.CategoryButton>
        <S.CategoryButton>기술</S.CategoryButton>
        <S.CategoryButton>음식</S.CategoryButton>
        <S.CategoryButton>여행</S.CategoryButton>
        <S.CategoryButton>반려동물</S.CategoryButton>
        <S.CategoryButton>리뷰</S.CategoryButton>
      </S.CategorySection>
      <S.PostListContainer>
        <PostItem />
      </S.PostListContainer>
    </S.Container>
  );
}

export default Home;
