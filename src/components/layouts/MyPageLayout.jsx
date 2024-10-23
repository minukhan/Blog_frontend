import React from "react";
import styled from "styled-components";
import UserSideBar from "../common/UserSideBar";
import Header from "../common/Header";

function MyPageLayout({ children }) {
  return (
    <div>
      <Header />
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
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 100px;
`;

const Wrap = styled.div`
  display: flex;
  gap: 40px;
`;
