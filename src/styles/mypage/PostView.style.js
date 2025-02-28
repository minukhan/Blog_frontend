import styled from "styled-components";
import { IoIosPlayCircle, IoIosAddCircle } from "react-icons/io";
import { FaCirclePause } from "react-icons/fa6";

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
export const IconWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
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
export const PauseIcon = styled(FaCirclePause)`
  width: 30px;
  height: 30px;
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
  font-size: 20px;
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
  margin-bottom: 30px;
`;

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;
export const PostContentHeader = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
`;
export const SummaryWrap = styled.div`
  border-radius: var(--border-radius);
  padding: 20px;
  box-shadow: 7px 7px 7px rgba(174, 174, 192, 0.4) inset,
    3px 3px 10px rgba(174, 174, 192, 0.3);
  max-height: 250px;
`;
export const SummaryTitle = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 15px;
`;
export const Summary = styled.div`
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 20px;
`;
export const Thumbnail = styled.img`
  width: 400px;
  height: 300px;
  border-radius: var(--border-radius);
  object-fit: cover;
  margin-bottom: 20px;
`;
export const TextPlaceholder = styled.div`
  font-size: 17px;
  line-height: 1.3;
`;

export const PostButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-bottom: 50px;
`;
export const Btn = styled.button`
  padding: 10px 20px;
  background: var(--light-gray);
  box-shadow: 10px 10px 20px rgba(174, 174, 192, 0.6);
  padding: 5px 45px;

  border-radius: 98px;
  cursor: pointer;

  color: var(--navy);
  font-weight: 600;

  &:hover {
    box-shadow: 5px 5px 2px rgba(174, 174, 192, 0.5) inset,
      3px 3px 10px rgba(174, 174, 192, 0.3);
  }
`;
// 스켈레톤 애니메이션
const skeletonAnimation = `
  @keyframes skeleton-loading {
    0% {
      background-position: -200px 0;
    }
    100% {
      background-position: 200px 0;
    }
  }
`;

// 스켈레톤 스타일 공통
const SkeletonBase = styled.div`
  background-color: #e0e0e0;
  background-image: linear-gradient(90deg, #e0e0e0, #f0f0f0, #e0e0e0);
  background-size: 200% 100%; /* 스켈레톤 배경 크기 */
  background-position: 0% 0; /* 애니메이션 시작 배경 위치 */
  animation: skeleton-loading 8s infinite; /* 애니메이션 적용 */
  border-radius: 4px;
  ${skeletonAnimation}/* 애니메이션 키프레임 호출 */
`;

// 각 스켈레톤 요소 스타일
export const SkeletonTitle = styled(SkeletonBase)`
  width: 70%;
  height: 30px;
  margin: 16px 0;
`;

export const SkeletonMeta = styled(SkeletonBase)`
  width: 50%;
  height: 23.99px;
  margin-bottom: 12px;
`;

export const SkeletonCategory = styled(SkeletonBase)`
  width: 100px;
  height: 20px;
`;

export const SkeletonIcon = styled(SkeletonBase)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 8px;
`;

export const SkeletonThumbnail = styled(SkeletonBase)`
  width: 400px;
  height: 300px;
  border-radius: 8px;
  margin-right: 16px;
`;

export const SkeletonSummaryTitle = styled(SkeletonBase)`
  width: 100px;
  height: 20px;
  margin-bottom: 8px;
`;

export const SkeletonSummary = styled(SkeletonBase)`
  width: 200px;
  height: 60px;
`;

export const SkeletonTextPlaceholder = styled(SkeletonBase)`
  width: 100%;
  height: 200px;
  margin-top: 16px;
`;

export const SkeletonButton = styled(SkeletonBase)`
  width: 80px;
  height: 40px;
  margin-right: 16px;
`;
