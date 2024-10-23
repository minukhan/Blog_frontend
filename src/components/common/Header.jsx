import * as S from "../../styles/common/Header.style";
import { CiLogin } from "react-icons/ci";
import { FiSettings } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { Link } from "react-router-dom";
function Header() {
  // const { loggedIn } = useAuth();
  const [loggedIn, setLoggedIn] = useState(false);
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const toggleLogin = () => {
    setLoggedIn((prev) => !prev);
  };
  // 드롭다운 토글 함수
  const toggleProfileDropdown = () => {
    console.log(isProfileDropdownOpen);
    setProfileDropdownOpen((prev) => !prev);
  };

  return (
    <S.HeaderContainer>
      <S.LeftSection>
        {/* <S.Logo src="/logo.png" alt="logo" /> */}
        <S.Logo src="/tmp.png" alt="logo" />
        <S.NavLinks>
          <S.NavItem>
            <Link to="/">Home</Link>
          </S.NavItem>
          <S.NavItem>
            Category <S.DropdownIcon />
            <S.DropdownMenu>
              <li>Subcategory 1</li>
              <li>Subcategory 2</li>
              <li>Subcategory 3</li>
            </S.DropdownMenu>
          </S.NavItem>
          <div style={{ cursor: "pointer" }} onClick={toggleLogin}>
            test
          </div>
        </S.NavLinks>
      </S.LeftSection>

      <S.IconsWrapper>
        {loggedIn ? (
          <>
            <S.Icon>
              <FiSettings size={20} />
            </S.Icon>
            <S.Icon onClick={toggleProfileDropdown}>
              <FaRegUserCircle size={20} />
            </S.Icon>
            {isProfileDropdownOpen && (
              <S.ProfileDropdownWrapper>
                <S.ProfileDropdown>
                  <li>Myblog</li>
                  <li>Logout</li>
                </S.ProfileDropdown>
              </S.ProfileDropdownWrapper>
            )}
          </>
        ) : (
          <>
            <S.Icon>
              <CiLogin size={20} />
            </S.Icon>
            <S.LoginButton onClick={toggleLogin}>Login</S.LoginButton>
          </>
        )}
      </S.IconsWrapper>
    </S.HeaderContainer>
  );
}

export default Header;
