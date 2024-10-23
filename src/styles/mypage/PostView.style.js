import styled from "styled-components";
import { IoIosPlayCircle, IoIosAddCircle } from "react-icons/io";
export const PostContainer = styled.div`
  margin: 0 auto;
  padding: 30px;
  background-color: var(--ligh-gray);
  border-radius: var(--border-radius);
  box-shadow: 10px 10px 30px rgba(174, 174, 192, 0.6);
`;
export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
export const IconWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
export const PlayIcon = styled(IoIosPlayCircle)`
  width: 35px;
  height: 35px;
  color: var(--navy);
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const AddIcon = styled(IoIosAddCircle)`
  width: 35px;
  height: 35px;
  color: var(--navy);
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
export const PostCategory = styled.button`
  border-radius: var(--border-radius);
  box-shadow: 5px 5px 2px rgba(174, 174, 192, 0.5) inset,
    3px 3px 10px rgba(174, 174, 192, 0.3);
  padding: 8px 15px;
  background-color: var(--light-gray);
  font-size: 14px;
  font-weight: 400;
  color: var(--navy);
`;

export const PostTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 10px;
`;
export const PostMeta = styled.div`
  font-size: 14px;
  padding: 5px 10px;
  color: var(--gray);
`;

export const PostContent = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;
export const Thumbnail = styled.img`
  width: 300px;
  border-radius: 8px;
  object-fit: cover;
`;

// 버튼 스타일
export const PostButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;

  .edit-btn,
  .delete-btn {
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .edit-btn {
    background-color: #4caf50;
    color: white;
  }

  .delete-btn {
    background-color: #f44336;
    color: white;
  }
`;
