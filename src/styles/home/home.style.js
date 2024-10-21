import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Full viewport height */
  text-align: center; /* Center text */
`;

export const Title = styled.h1`
  margin: 20px 0 10px;
  font-size: 35px;
  font-weight: 700;
`;

export const ImgClock = styled.img`
  width: 454px;
`;

export const Subtitle = styled.h2`
  margin: 0; /* No margin for subtitle */
  font-size: 1.5rem; /* Subtitle size */
  color: #555; /* Subtitle color */
`;
