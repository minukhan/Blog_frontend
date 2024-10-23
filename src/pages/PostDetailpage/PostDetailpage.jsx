import React from "react";
import "../../styles/detail/detailPage.css";

function PostDetailpage() {
  return (
    <div className="post-container">
      {/* Post Header */}
      <div className="post-header">
        <span className="category">Food</span>
        <h1 className="post-title">블로그글 제목입니다 제목이지롱</h1>
        <span className="post-meta">3 days ago · 1 min</span>
      </div>

      {/* 메인내용들 */}
      <div className="post-content">
        <div className="image-placeholder"></div>
        <div className="text-placeholder">
          <p>본문 텍스트를 여기에 추가하세요.</p>
          <p>이곳에 본문 내용을 추가하세요.</p>
        </div>
      </div>

      {/* 버튼 */}
      <div className="post-buttons">
        <button className="edit-btn">수정</button>
        <button className="delete-btn">삭제</button>
      </div>

      {/* 댓글 */}
      <div className="comments-section">
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
      </div>

      {/* 댓글 등록*/}
      <div className="comment-input">
        <input type="text" placeholder="댓글을 입력하세요..." />
        <button className="submit-btn">등록</button>
      </div>
    </div>
  );
}

export default PostDetailpage;
