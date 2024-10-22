import styled from "styled-components";
export const PlayBox = styled.div`
  width: calc(50% - 10px);
  border-radius: var(--border-radius);
  background-color: var(--light-gray);
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

// 타이틀 텍스트
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
  background-image: url("/images/thumbnail.png");
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  box-shadow: var(--box-shadow);
  border: 5px solid white;
  margin-bottom: 30px;
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
`;

export const VolumeIcon = styled.div`
  font-size: 24px;
  margin-left: 10px;
`;

// 플레이바
export const PlayBar = styled.input`
  width: 100%; // 플레이바 너비
  margin: 10px 0; // 위아래 여백
`;

// 버튼 그룹
export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between; // 버튼 간격을 균일하게 배치
  align-items: center; // 가운데 정렬
`;

// 개별 버튼
export const ControlButton = styled.button`
  background-color: transparent; // 배경색 투명
  border: none; // 테두리 없음
  font-size: 24px; // 아이콘 크기
  cursor: pointer; // 커서 손 모양
  &:hover {
    color: var(--color-navy); // 호버 시 색상 변화
  }
`;
