import styled from "styled-components";
export const CommentsSection = styled.div`
  margin-bottom: 20px;
  .comment {
    margin-bottom: 15px;

    .comment-user {
      font-weight: bold;
      font-size: 14px;
      color: #555;
    }

    p {
      margin: 5px 0;
      color: #333;
    }
  }
`;

// 댓글 입력 스타일
export const CommentInput = styled.div`
  display: flex;
  gap: 10px;

  input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  .submit-btn {
    padding: 10px 15px;
    background-color: #008cba;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;
