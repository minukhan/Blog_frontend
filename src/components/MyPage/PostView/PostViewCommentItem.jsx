import { useDispatch } from "react-redux";
import * as S from "../../../styles/mypage/PostViewCommentItem.style";

function PostViewCommentItem({ comment }) {
  const kakaoImg = localStorage.getItem("userProfileImage");
  const userNickname = localStorage.getItem("userNickname");

  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch({ type: "REMOVE_COMMENT", payload: comment });
  };
  return (
    <S.CommentItem>
      <S.CommentProfile src={kakaoImg || "/images/home/profileImage.png"} />
      <S.CommentContent>
        <S.CommentHeader>
          <S.CommentInfo>{`${userNickname}` || "이름 없음"}</S.CommentInfo>
          <S.CommentIconWrapper>
            <S.EditIcon />
            <S.DeletetIcon onClick={handleDelete} />
          </S.CommentIconWrapper>
        </S.CommentHeader>
        <S.CommentText>{comment.content || "댓글 내용 없음"}</S.CommentText>
      </S.CommentContent>
    </S.CommentItem>
  );
}

export default PostViewCommentItem;
