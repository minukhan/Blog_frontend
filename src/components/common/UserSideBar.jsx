import * as S from "../../styles/common/UserSideBar.style";
import { FaGithub, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { StyledBtn } from "../../styles/commonStyled";
import { Link, useNavigate, useParams } from "react-router-dom";

const user = {
  img: "/images/myPageProfile.png",
  nickname: "하니",
  desc: "Senior Developer",
  github: "https://example.com",
  insta: "https://example.com",
  twitter: "https://example.com",
};

function UserSideBar() {
  const navigate = useNavigate();
  const userId = window.localStorage.getItem("userId");

  return (
    <S.Wrap>
      <S.ProfileWrap>
        <S.ProfileImg>
          {/* user.img로 수정 */}
          <img src={user.img} alt={user.nickname} />
        </S.ProfileImg>

        {/* user.nickname으로 수정 */}
        <p style={{ fontWeight: "700", paddingTop: "15px" }}>{user.nickname}</p>
        <p>{user.desc}</p>

        <S.SocialWrap>
          {/* 소셜 미디어 링크 직접 참조 */}
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
          <StyledBtn onClick={() => navigate(`/${userId}/newpost`)}>
            새 글 작성
          </StyledBtn>
        </div>
      </S.ProfileWrap>

      <S.CategoryWrap>
        <h2>CATEGORY</h2>
        <S.Category>
          <Link to="TECH">기 술</Link>
          <Link to="COOK">음 식</Link>
          <Link to="TRAVEL">여 행</Link>
          <Link to="ANIMAL">반려동물</Link>
          <Link to="NEWS">뉴 스</Link>
          <Link to="MOVIE">영 화</Link>
          <Link to="ENTERTAIN">연 예</Link>
        </S.Category>
      </S.CategoryWrap>
    </S.Wrap>
  );
}

export default UserSideBar;
