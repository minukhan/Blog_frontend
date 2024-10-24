import * as S from "../../styles/mypage/PostViewComment.style";
import PostViewCommentItem from "./PostViewCommentItem";
function PostViewComment() {
  return (
    <div>
      <S.CommentContainer>
        <S.CommentsSection>
          <S.NoComment>첫번째 댓글을 달아보세요</S.NoComment>
          <PostViewCommentItem />
          <PostViewCommentItem />
          <PostViewCommentItem />
        </S.CommentsSection>
        {/* 댓글 입력 */}
        <S.InputWrap>
          <S.CommentInput></S.CommentInput>
          <S.CommentButton>등록</S.CommentButton>
        </S.InputWrap>
      </S.CommentContainer>
    </div>
  );
}

export default PostViewComment;
