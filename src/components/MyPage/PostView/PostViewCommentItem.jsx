import { useDispatch } from "react-redux";
import * as S from "../../../styles/mypage/PostViewCommentItem.style";
import * as SS from "../../../styles/mypage/PostViewComment.style";
import { useState } from "react";
import styled from "styled-components";

function PostViewCommentItem({ comment }) {
  const dispatch = useDispatch();

  const kakaoImg = localStorage.getItem("userProfileImage");
  const userNickname = localStorage.getItem("userNickname");
  // 수정 변수
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(comment.content);

  // 삭제
  const handleDelete = () => {
    setTimeout(() => {
      dispatch({ type: "REMOVE_COMMENT", payload: comment });
    }, 1000);
  };

  //
  const handleSaveEdit = () => {
    setTimeout(() => {
      dispatch({
        type: "UPDATE_COMMENT",
        payload: {
          commentId: comment.commentId,
          content: editedContent,
        },
      });
      setIsEditing(false);
    }, 1000);
  };

  return (
    <S.CommentItem>
      <S.CommentProfile src={kakaoImg || "/images/home/profileImage.png"} />
      <S.CommentContent>
        <S.CommentHeader>
          <S.CommentInfo>{`${userNickname}` || "이름 없음"}</S.CommentInfo>
          <S.CommentIconWrapper>
            <S.EditIcon onClick={() => setIsEditing((prev) => !prev)} />
            <S.DeletetIcon onClick={handleDelete} />
          </S.CommentIconWrapper>
        </S.CommentHeader>
        {isEditing ? (
          <>
            <SS.CommentInput
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
              placeholder="댓글을 수정하세요"
            />
            <Wrap>
              <SS.CommentButton onClick={handleSaveEdit}>저장</SS.CommentButton>
            </Wrap>
          </>
        ) : (
          <S.CommentText>{comment.content || "댓글 내용 없음"}</S.CommentText>
        )}
      </S.CommentContent>
    </S.CommentItem>
  );
}

export default PostViewCommentItem;

const Wrap = styled.div`
  display: flex;
  justify-content: end;
`;
