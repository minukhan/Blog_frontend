import styled from "styled-components";
import { IoIosPlay, IoIosPause } from "react-icons/io";
export const ModalWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  justify-content: flex-start;
  display: flex;
  align-items: center;
  width: 400px;
  padding: 10px 15px;
  background-color: var(--light-gray);
  opacity: 0.8;
  border-radius: 55px;
  box-shadow: 6px 6px 5px rgba(0, 0, 0, 0.15) inset,
    -8px -8px 10px rgba(255, 255, 255, 0.5);
  z-index: 1000;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 1);
    transition: background-color 0.5s;
  }
`;

export const Thumbnail = styled.img`
  background-image: url("/images/thumbnail.png");
  background-size: cover;
  background-position: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
`;

export const InfoWrapper = styled.div`
  margin-right: 10px;
  width: 270px;
`;

export const Title = styled.h3`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Author = styled.p`
  font-size: 13px;
  color: var(--gray);
`;

export const Duration = styled.p`
  font-size: 10px;
  margin-right: 10px;
`;

export const IconWrapper = styled.div`
  cursor: pointer;
`;

export const PlayIcon = styled(IoIosPlay)`
  width: 35px;
  height: 35px;
`;
export const PauseIcon = styled(IoIosPause)`
  width: 35px;
  height: 35px;
`;
