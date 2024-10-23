import * as S from "../../styles/mypage/PostViewComment.style";
function PostViewComment() {
  return (
    <div>
      <S.CommentsSection>
        <div className="comment">
          <div className="comment-user">
            <span>Short Leopard - 3 days ago</span>
          </div>
          <p>Shortbread lemon drops caramels Shortbread lemon drops...</p>
        </div>
        <div className="comment">
          <div className="comment-user">
            <span>Short Leopard - 3 days ago</span>
          </div>
          <p>Shortbread lemon drops caramels Shortbread lemon drops...</p>
        </div>
      </S.CommentsSection>

      {/* 댓글 등록 */}
      <S.CommentInput>
        <input type="text" placeholder="댓글을 입력하세요..." />
        <button className="submit-btn">등록</button>
      </S.CommentInput>
    </div>
  );
}

export default PostViewComment;
