import React from "react";
import styled from "styled-components";
import UserSideBar from "../../../components/common/UserSideBar";
import BlogPost from "./BlogPost";

function PostWritePage() {
  return (
    <div>
      {/* <Header /> */}
      <Wrap>
        postWrite이지롱
        {/* <UserSideBar /> */}
        <BlogPost />
      </Wrap>
      {/* <Footer /> */}
    </div>
  );
}

export default PostWritePage;

const Wrap = styled.div`
  background-color: red;
`;

// const SideWrap = styled.div``;

// const MainWrap = styled.div``;
