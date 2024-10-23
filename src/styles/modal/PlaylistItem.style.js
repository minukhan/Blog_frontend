import styled from "styled-components";
import { IoIosClose } from "react-icons/io";
export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 6px;
  border-radius: var(--border-radius);
  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.1),
    3px 3px 10px rgba(255, 255, 255, 0.8) inset;
`;
export const ThumbnailContainer = styled.div`
  cursor: pointer;
  position: relative;
  width: 65px;
  height: 65px;
  margin-right: 10px;
  border-radius: 50%;
  overflow: hidden;

  &:hover::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover .icon {
    display: flex;
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

export const Icon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
  font-size: 24px;
  color: black; /* 아이콘 색상 */

  ${ThumbnailContainer}:hover & {
    display: flex;
  }
`;

export const InfoWrapper = styled.div`
  margin-right: 10px;
  width: 160px;
`;

export const Title = styled.h3`
  font-size: 10px;
  font-weight: 600;
  margin-bottom: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Author = styled.p`
  font-size: 9px;
  color: var(--gray);
  padding-bottom: 23px;
`;

export const Duration = styled.p`
  font-size: 9px;
`;

export const DeleteIcon = styled(IoIosClose)`
  cursor: pointer;
  margin-bottom: auto;
  width: 20px;
  height: 20px;
`;
