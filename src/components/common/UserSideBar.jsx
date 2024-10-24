import * as S from "../../styles/common/UserSideBar.style";
import { FaGithub, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { StyledBtn } from "../../styles/commonStyled";
import { Link } from "react-router-dom";

const user = {
  img: "/images/myPageProfile.png",
  nickname: "하니",
  desc: "Senior Developer",
  github: "https://example.com",
  insta: "https://example.com",
  twitter: "https://example.com",
};
function UserSideBar() {
  return (
    <S.Wrap>
      <S.ProfileWrap>
        <S.ProfileImg>
          <img src={user.img} alt={user.name} />
        </S.ProfileImg>

        <p style={{ fontWeight: "700", paddingTop: "15px" }}>{user.nickname}</p>
        <p>{user.desc}</p>

        <S.SocialWrap>
          <a href={user.github} target="_blank" rel="noopener noreferrer">
            <FaGithub style={{ fontSize: "25px" }} />
          </a>
          <a href={user.insta} target="_blank" rel="noopener noreferrer">
            <FaInstagram style={{ fontSize: "25px" }} />
          </a>
          <a href={user.twitter} target="_blank" rel="noopener noreferrer">
            <FaTwitterSquare style={{ fontSize: "25px" }} />
          </a>
        </S.SocialWrap>

        <div style={{ marginTop: "30px" }}>
          <StyledBtn>새 글 작성</StyledBtn>
        </div>
      </S.ProfileWrap>

      <S.CategoryWrap>
        <h2>CATEGORY</h2>
        <S.Category>
          <Link to="#">기 술</Link>
          <Link to="#">음 식</Link>
          <Link to="#">여 행</Link>
          <Link to="#">반려동물</Link>
          <Link to="#">뉴 스</Link>
          <Link to="#">영 화</Link>
          <Link to="#">연 예</Link>
        </S.Category>
      </S.CategoryWrap>
    </S.Wrap>
  );
}

export default UserSideBar;
