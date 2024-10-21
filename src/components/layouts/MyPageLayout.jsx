import React from "react";
import styled from "styled-components";
import UserSideBar from "../common/UserSideBar";

function MyPageLayout({ children }) {
  return (
    <div>
      <PageWrap>
        <Wrap>
          <UserSideBar />
          {children}
        </Wrap>
      </PageWrap>
    </div>
  );
}

export default MyPageLayout;

const PageWrap = styled.div`
  border: 1px solid black;

  width: 100vw;
  max-width: 100%;

  box-sizing: border-box; // 100vw를 주고, padding을 주니까 가로스크롤이 생기므로
  /* padding-top: 3rem; */
  /* padding-left: 5rem; */
  /* padding-right: 5rem; */
`;

const Wrap = styled.div`
  display: flex;
`;
