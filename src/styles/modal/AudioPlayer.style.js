import styled from "styled-components";
export const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
`;
export const TimeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0;
`;

export const Time = styled.div`
  font-size: 11px;
  color: #333;
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 3px;
  background-color: #cacfd4;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
`;

export const ProgressBar = styled.div`
  width: ${({ width }) => width}%;
  height: 100%;
  background-color: var(--black);
  border-radius: 5px 0 0 5px;
  transition: width 0.2s ease;
  position: relative;
`;
export const ProgressCircle = styled.div`
  width: 12px;
  height: 12px;
  background-color: var(--black);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(50%, -50%); /* 원을 정확히 중앙에 맞추기 위한 변환 */
  transition: right 0.2s ease; /* 애니메이션 */
`;
// 버튼 그룹
export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

// 개별 버튼
export const PrevButton = styled.button`
  width: 20px;
  height: 20px;
  opacity: 0.9;
  background-image: url("/images/svg/prev.svg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;
export const ControlButton = styled.button`
  width: 20px;
  height: 20px;
  opacity: 0.9;
  background-image: url("/images/svg/stop.svg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const NextButton = styled.button`
  width: 20px;
  height: 20px;
  opacity: 0.9;
  background-image: url("/images/svg/next.svg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;
