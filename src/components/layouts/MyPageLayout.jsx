import styled from "styled-components";
import UserSideBar from "../common/UserSideBar";
import { getUserInfo } from "../../api/myHomeApi";
import { useEffect, useState } from "react";

function MyPageLayout({ children }) {
  const uid = 1;
  const [user, setUser] = useState({
    name: "",
    profileImg: "",
    social: {
      github: "",
      instagram: "",
      twitter: "",
      intro: "",
    },
  });

  useEffect(() => {
    getUserInfo(uid).then((res) => {
      console.log(res);
      setUser(res.data);
    });
  }, []);
  return (
    <div>
      <PageWrap>
        <Wrap>
          <UserSideBar user={user} />
          {children}
        </Wrap>
      </PageWrap>
    </div>
  );
}

export default MyPageLayout;

const PageWrap = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 100px;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
