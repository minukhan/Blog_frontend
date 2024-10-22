import React from "react";
import styled from "styled-components";
import VoiceRegistration from "./VoiceRegistration";

function VoicePostPage() {
  return (
    <Wrap>
      <Main>
        <Box>
          <VoiceRegistration />
        </Box>
      </Main>
    </Wrap>
  );
}

export default VoicePostPage;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--light-gray);
  background-image: url(/images/toggleBackground.png);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Main = styled.div`
  width: 528px;
  /* height: 688px; */
  padding: 30px;
  box-sizing: border-box;

  border-radius: 30px;
  background: var(--light-gray);
  box-shadow: 13px 13px 25px #c3c3c3, -13px -13px 25px #fdfdfd;
`;

const Box = styled.div`
  border: 1px dashed var(--gray);
  padding: 13px;
  border-radius: 16px;

  p {
    color: gray;
    font-size: 14px;
  }
`;
