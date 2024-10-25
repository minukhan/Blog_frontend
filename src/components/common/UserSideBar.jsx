import * as S from "../../styles/common/UserSideBar.style";
import { FaGithub, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { StyledBtn } from "../../styles/commonStyled";
import { Link, useNavigate } from "react-router-dom";
const user = {
  img: "/images/myPageProfile.png",
  nickname: "하니",
  desc: "Senior Developer",
  github: "https://example.com",
  insta: "https://example.com",
  twitter: "https://example.com",
};

const localProfileImg = localStorage.getItem("userProfileImage");
function UserSideBar({ user }) {
  const navigate = useNavigate();
  const userId = window.localStorage.getItem("userId");
  return (
    <S.Wrap>
      <S.ProfileWrap>
        <S.ProfileImg>
          <img
            src={
              user.profileImg || localProfileImg || "./images/userBasicImg.png"
            }
            alt={user.name}
          />
        </S.ProfileImg>

        <p style={{ fontWeight: "700", paddingTop: "15px" }}>{user.name}</p>
        <p>{user.social.intro}</p>

        <S.SocialWrap>
          <a
            href={user.social.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub style={{ fontSize: "25px" }} />
          </a>
          <a
            href={user.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram style={{ fontSize: "25px" }} />
          </a>
          <a
            href={user.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
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
          <Link to="/mypage/TECH">기 술</Link>
          <Link to="/mypage/COOK">음 식</Link>
          <Link to="/mypage/TRAVEL">여 행</Link>
          <Link to="/mypage/ANIMAL">반려동물</Link>
          <Link to="/mypage/NEWS">뉴 스</Link>
          <Link to="/mypage/MOVIE">영 화</Link>
          <Link to="/mypage/ENTERTAIN">연 예</Link>
        </S.Category>
      </S.CategoryWrap>
    </S.Wrap>
  );
}

export default UserSideBar;
