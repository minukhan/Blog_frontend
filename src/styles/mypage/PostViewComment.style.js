import styled from "styled-components";
export const CommentContainer = styled.div`
  border-radius: var(--border-radius);
  padding: 30px;
  box-shadow: 7px 7px 7px rgba(174, 174, 192, 0.4) inset,
    3px 3px 10px rgba(174, 174, 192, 0.3);
  display: flex;
  flex-direction: column;
`;
export const CommentsSection = styled.div``;
export const NoComment = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: var(--gray);
  margin-bottom: 20px;
`;
// 댓글 입력 스타일
export const InputWrap = styled.div`
  width: 740px;
  display: flex;
  justify-content: space-between;
`;
export const CommentInput = styled.input`
  width: 95%;
  background: #f4f4f4;
  box-shadow: inset 6px 6px 16px rgba(0, 0, 0, 0.15);
  border-radius: 54px;
  border: 1px solid rgba(254, 253, 253, 0.8);
  width: 80%;
  font-size: 13px;
  padding: 10px 20px;
  outline: none;
`;
export const CommentButton = styled.div`
  width: 5%;
  background: var(--light-gray);
  box-shadow: 10px 10px 20px rgba(174, 174, 192, 0.6);
  padding: 10px 30px;

  border-radius: 98px;
  cursor: pointer;

  color: var(--navy);
  font-weight: 600;

  &:hover {
    box-shadow: 5px 5px 2px rgba(174, 174, 192, 0.5) inset,
      3px 3px 10px rgba(174, 174, 192, 0.3);
  }
`;
