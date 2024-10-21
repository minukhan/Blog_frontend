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
  max-width: 1500px;
  margin: 0 auto;
  padding-top: 130px;
`;

const Wrap = styled.div`
  display: flex;
`;
