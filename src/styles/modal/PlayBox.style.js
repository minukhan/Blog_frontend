import styled, { keyframes } from "styled-components";
export const PlayBox = styled.div`
  border-radius: var(--border-radius);
  background-color: var(--light-gray);
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: var(--gray);
  text-align: center;
  margin-bottom: 30px;
`;

export const Thumbnail = styled.div`
  width: 250px;
  height: 250px;
  margin: 0 auto;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  box-shadow: var(--box-shadow);
  border: 5px solid white;
  margin-bottom: 20px;
`;
export const TextWrap = styled.div`
  margin: 0 auto;
  width: 255px;
`;
export const MainText = styled.h2`
  // todo : br태그 적절히 처리가능?
  font-size: 20px;
  color: var(--navy);
  text-align: center;
  font-weight: 600;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 5px;
`;

export const SubText = styled.p`
  font-size: 13px;
  color: var(--gray);
  text-align: center;
  margin-bottom: 10px;
`;

export const VolumeIcon = styled.div`
  width: 15px;
  height: 15px;
  background-image: url("/images/svg/sound.svg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 40px;
`;

//스켈레톤

// 스켈레톤 애니메이션 정의
const skeletonAnimation = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

// 공통 스켈레톤 스타일
const SkeletonBase = styled.div`
  background-color: #e0e0e0;
  background-image: linear-gradient(90deg, #e0e0e0, #f5f5f5, #e0e0e0);
  background-size: 200% 100%;
  background-position: 0 0;
  animation: ${skeletonAnimation} 1.5s infinite linear;
  border-radius: 4px;
`;

// 스켈레톤 요소 스타일
export const SkeletonTitle = styled(SkeletonBase)`
  width: 50%;
  height: 20px;
  margin: 0 auto 30px;
`;

export const SkeletonThumbnail = styled(SkeletonBase)`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin: 0 auto 20px;
`;

export const SkeletonMainText = styled(SkeletonBase)`
  width: 70%;
  height: 20px;
  margin: 0 auto 5px;
`;

export const SkeletonSubText = styled(SkeletonBase)`
  width: 50%;
  height: 15px;
  margin: 0 auto 10px;
`;

export const SkeletonVolumeIcon = styled(SkeletonBase)`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin: 0 auto 40px;
`;

export const SkeletonAudioPlayer = styled(SkeletonBase)`
  width: 100%;
  height: 30px;
  margin-top: 10px;
`;
