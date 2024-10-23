import styled from "styled-components";
export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(64, 86, 95, 0.5);
  z-index: 500;
`;

export const PlayModalFullWrapper = styled.div`
  position: fixed;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 650px;
  height: 650px;
  display: flex;
  gap: 20px;
  padding: 20px; // 안쪽 여백
  overflow: auto;
`;
