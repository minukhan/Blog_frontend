import styled from "styled-components";
import { MdOutlineEdit, MdClose } from "react-icons/md";
export const CommentItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  padding: 10px 20px;
  border-radius: var(--border-radius);
  background: var(--light-gray);
  box-shadow: 5px 5px 3px rgba(174, 174, 192, 0.5),
    3px 3px 10px rgba(255, 255, 255, 0.8) inset;
`;
export const CommentProfile = styled.img`
  background-image: url("/images/userBasicImg.png");
  background-size: cover;
  background-position: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
`;
export const CommentContent = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 635px;
  position: relative;
`;
export const CommentInfo = styled.div`
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #96a3a9;
`;
export const CommentIconWrapper = styled.div`
  position: absolute;
  right: -10px;
  top: -5px;
`;
export const EditIcon = styled(MdOutlineEdit)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-right: 5px;
`;
export const DeletetIcon = styled(MdClose)`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
export const CommentText = styled.div`
  font-size: 15px;
  font-weight: 500;
`;
