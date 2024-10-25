import * as S from "../../styles/common/Header.style";
import { CiLogin } from "react-icons/ci";
import { FiSettings } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useLogin from "../../lib/oauth/useLogin";
import { getCookie } from "../../utils/useCookie";

function Header() {
  const { handleLogin } = useLogin();

  const [loggedIn, setLoggedIn] = useState(false);
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = getCookie("accessToken");
    console.log(token);
    setLoggedIn(!!token);
  }, []);

  // 드롭다운 토글 함수
  const toggleProfileDropdown = () => {
    setProfileDropdownOpen((prev) => !prev);
  };

  // Myblog 클릭 시 userId 경로로 이동
  const handleMyBlogClick = () => {
    navigate(`/mypage`); // userId 경로로 이동
    setProfileDropdownOpen(false); // 드롭다운 닫기
  };
  const handleAccountSettingClick = () => {
    // 로컬 스토리지에서 userId 가져오기
    const userId = localStorage.getItem("userId");
    if (userId) {
      // userId를 경로에 동적으로 추가하여 이동
      navigate(`/user/settings/${userId}`);
    } else {
      console.error("userId가 로컬 스토리지에 없습니다.");
    }
  };
  const deleteCookie = (cookieName) => {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };

  const handleLogout = () => {
    // accessToken 쿠키 삭제
    deleteCookie("accessToken");
    window.location.href = "/";
  };

  return (
    <S.HeaderContainer>
      <S.LeftSection>
        {/* <S.Logo src="/logo.png" alt="logo" /> */}
        <Link to="/">
          <S.Logo src="/tmp.png" alt="logo" />
        </Link>
        {/* <S.NavLinks>
          <S.NavItem>
            <Link to="/">Home</Link>
          </S.NavItem>
          <S.NavItem>
            Category <S.DropdownIcon />
            <S.DropdownMenu>
              <li>기술</li>
              <li>음식</li>
              <li>여행</li>
              <li>반려동물</li>
              <li>뉴스</li>
              <li>영화</li>
              <li>연예</li>
            </S.DropdownMenu>
          </S.NavItem>
          <div style={{ cursor: "pointer" }}>test</div>
        </S.NavLinks> */}
      </S.LeftSection>

      <S.IconsWrapper>
        {loggedIn ? (
          <>
            <S.Icon onClick={handleAccountSettingClick}>
              <FiSettings size={20} />
            </S.Icon>
            <S.Icon onClick={toggleProfileDropdown}>
              <FaRegUserCircle size={20} />
            </S.Icon>
            {isProfileDropdownOpen && (
              <S.ProfileDropdownWrapper>
                <S.ProfileDropdown>
                  <li onClick={handleMyBlogClick}>Myblog</li>
                  <li onClick={handleLogout}>Logout</li>
                </S.ProfileDropdown>
              </S.ProfileDropdownWrapper>
            )}
          </>
        ) : (
          <S.LoginWrap onClick={handleLogin}>
            <S.Icon>
              <CiLogin size={20} />
            </S.Icon>
            <S.LoginButton>Login</S.LoginButton>
          </S.LoginWrap>
        )}
      </S.IconsWrapper>
    </S.HeaderContainer>
  );
}

export default Header;
