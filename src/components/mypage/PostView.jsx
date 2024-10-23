import * as S from "../../styles/mypage/PostView.style";
function PostView() {
  return (
    <div>
      <S.PostContainer>
        <S.PostHeader>
          <S.IconWrapper>
            <S.PlayIcon />
            <S.AddIcon />
          </S.IconWrapper>
          <S.PostCategory>Food</S.PostCategory>
        </S.PostHeader>
        <S.PostTitle>틈새에서 나만의 플레이리스트 만들기</S.PostTitle>
        <S.PostMeta>3 days ago - 3:26</S.PostMeta>

        {/* 메인내용들 */}
        <S.PostContent>
          <S.Thumbnail src="/images/home/thumbnail.png" alt="Post Thumbnail" />
          <div className="text-placeholder">
            <p>본문 텍스트를 여기에 추가하세요.</p>
            <p>이곳에 본문 내용을 추가하세요.</p>
          </div>
        </S.PostContent>

        {/* 버튼 */}
        {/* <S.PostButtons>
          <button className="edit-btn">수정</button>
          <button className="delete-btn">삭제</button>
        </S.PostButtons> */}
      </S.PostContainer>
    </div>
  );
}

export default PostView;
