import * as S from "../../styles/mypage/PostViewCommentItem.style";
function PostViewCommentItem() {
  return (
    <>
      <S.CommentItem>
        <S.CommentProfile src="/images/home/profile.png" />
        <S.CommentContent>
          <S.CommentHeader>
            <S.CommentInfo>김코딩 - 3 days ago</S.CommentInfo>
            <S.CommentIconWrapper>
              <S.EditIcon />
              <S.DeletetIcon />
            </S.CommentIconWrapper>
          </S.CommentHeader>
          <S.CommentText>
            저도 이 프로젝트에 참여하고 싶어요! 어떻게 지원하면 되나요? 저도 이
            프로젝트에 참여하고 싶어요! 어떻게 지원하면 되나요?저도 이
            프로젝트에 참여하고 싶어요! 어떻게 지원하면 되나요? 저도 이
            프로젝트에 참여하고 싶어요! 어떻게 지원하면 되나요?
          </S.CommentText>
        </S.CommentContent>
      </S.CommentItem>
    </>
  );
}

export default PostViewCommentItem;
