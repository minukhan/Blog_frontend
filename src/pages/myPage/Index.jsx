import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import UserSideBar from "../../components/common/UserSideBar";
import MyPageLayout from "../../components/layouts/MyPageLayout";

function MyPage() {
  return (
    <MyPageLayout>
      {/* <Header /> */}
      <Outlet />
    </MyPageLayout>
  );
}

export default MyPage;

const Wrap = styled.div``;
