import styled from "styled-components";
const AlertModal = ({ message, onOk, onCancel }) => {
  return (
    <ModalOverlay>
      <ItemContainer>
        <ModalContent>
          <p>{message}</p>
          <ButtonWrap>
            {/* <CloseButton onClick={onClose}>닫기</CloseButton> */}
            <OkButton onClick={onOk}>확인</OkButton>
            <CloseButton onClick={onCancel}>취소</CloseButton>
          </ButtonWrap>
        </ModalContent>
      </ItemContainer>
    </ModalOverlay>
  );
};

export default AlertModal;

// 스타일 정의

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(49, 81, 109, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  overflow: hidden;
`;
export const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 130px;
  padding: 10px 6px;
  background-color: var(--light-gray);
  border-radius: var(--border-radius);
  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.1),
    3px 3px 10px rgba(255, 255, 255, 0.8) inset;
`;
const ModalContent = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position p {
    font-size: 16px;
    color: var(--navy);
    text-align: center;
  }
`;
const ButtonWrap = styled.div`
  display: flex;
  gap: 10px;
`;
const CloseButton = styled.button`
  background-color: var(--deep-gray);
  color: var(--light-gray);
  padding: 10px 20px;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
const OkButton = styled.button`
  background-color: var(--navy);
  opacity: 0.9;
  color: var(--light-gray);
  padding: 10px 20px;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
