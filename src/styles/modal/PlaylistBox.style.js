import styled from "styled-components";
export const PlaylistBox = styled.div`
  border-radius: var(--border-radius);
  background-color: var(--light-gray);
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: var(--navy);
  text-align: center;
  margin-bottom: 20px;
`;
export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* overflow-y: auto; */
`;
