import React, { useEffect, useState } from "react";
import axios from "axios";
import * as S from "../../../styles/mypage/PostViewComment.style";
import PostViewCommentItem from "./PostViewCommentItem";
import { useDispatch, useSelector } from "react-redux";

function PostViewComment({ postId }) {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comment.comments);
  const [newComment, setNewComment] = useState("");
  // const [comments, setComments] = useState([]);

  useEffect(() => {
    console.log("store 값 저장", comments);
  }, [comments]);
  // 쿠키에서 특정 이름의 토큰 값을 가져오는 함수
  function getCookie(name) {
    const match = document.cookie.match(
      new RegExp("(^| )" + name + "=([^;]+)")
    );
    if (match) {
      return match[2]; // 쿠키 값 반환
    }
    return null; // 쿠키가 없을 경우 null 반환
  }

  const handlePostComment = () => {
    console.log("댓글 등록");
    // 새 댓글을 리덕스에 추가
    const commentData = {
      commentId: Date.now(), // 임시로 ID를 생성, 실제로는 서버에서 가져옴
      content: newComment,
      postId,
    };

    dispatch({ type: "ADD_COMMENT", payload: commentData });
    setNewComment("");
  };

  // 댓글 데이터를 가져오는 함수
  // const fetchComments = async () => {
  //   // 쿠키에서 토큰을 가져오기
  //   const token = getCookie("accessToken");

  //   try {
  //     const response = await axios.get(
  //       `http://localhost:8080/api/comment/${postId}`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`, // Authorization 헤더에 토큰 추가
  //         },
  //       }
  //     );
  //     setComments(response.data); // 가져온 데이터를 상태에 저장
  //     console.log("데이터 잘 가져와졌나 : ", response.data);
  //   } catch (error) {
  //     console.error("Failed to fetch comments", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchComments();
  // }, [postId]);

  return (
    <div>
      <S.CommentContainer>
        <S.CommentsSection>
          {comments.length === 0 ? (
            <S.NoComment>첫번째 댓글을 달아보세요</S.NoComment>
          ) : (
            comments.map((comment) => (
              <PostViewCommentItem key={comment.commentId} comment={comment} />
            ))
          )}
        </S.CommentsSection>
        {/* 댓글 입력 */}
        <S.InputWrap>
          <S.CommentInput
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="댓글을 입력하세요"
          />
          <S.CommentButton onClick={handlePostComment}>등록</S.CommentButton>
        </S.InputWrap>
      </S.CommentContainer>
    </div>
  );
}

export default PostViewComment;
