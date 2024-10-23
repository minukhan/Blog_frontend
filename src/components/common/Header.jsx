import * as S from "../../styles/common/Header.style";
import { CiLogin } from "react-icons/ci";
import { FiSettings } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
function Header() {
  // const { loggedIn } = useAuth();
  const [loggedIn, setLoggedIn] = useState(false);

  const toggleLogin = () => {
    setLoggedIn((prev) => !prev);
  };

  return (
    <S.HeaderContainer>
      <S.LeftSection>
        {/* <S.Logo src="/logo.png" alt="logo" /> */}
        <S.Logo src="/tmp.png" alt="logo" />
        <S.NavLinks>
          <S.NavItem>Home</S.NavItem>
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
            <S.Icon>
              <FaRegUserCircle size={20} />
            </S.Icon>
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
