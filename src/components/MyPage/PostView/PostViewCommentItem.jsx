import * as S from "../../../styles/mypage/PostViewCommentItem.style";

function PostViewCommentItem({ comment }) {
  return (
    <S.CommentItem>
      <S.CommentProfile
        src={comment.thumbnailUrl || "/images/home/profile.png"}
      />
      <S.CommentContent>
        <S.CommentHeader>
          <S.CommentInfo>{`${comment.createdAt}` || "3333"}</S.CommentInfo>
          <S.CommentIconWrapper>
            <S.EditIcon />
            <S.DeletetIcon />
          </S.CommentIconWrapper>
        </S.CommentHeader>
        <S.CommentText>{comment.postTitle || "3333"}</S.CommentText>
      </S.CommentContent>
    </S.CommentItem>
  );
}

export default PostViewCommentItem;
