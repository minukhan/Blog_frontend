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
