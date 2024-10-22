import { useState } from "react";
import * as S from "../../styles/common/Header.style";
import { FaUser, FaShoppingCart, FaAngleDown, FaBell } from "react-icons/fa";
function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <S.HeaderContainer>
      <S.Logo>MyLogo</S.Logo>

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
      </S.NavLinks>

      <S.IconsWrapper>
        {isLoggedIn ? (
          <>
            <S.Icon>
              <FaShoppingCart size={20} />
            </S.Icon>
            <S.Icon>
              <FaBell size={20} />
            </S.Icon>
          </>
        ) : (
          <>
            <S.Icon>
              <FaUser size={20} />
            </S.Icon>
            <S.LoginButton onClick={toggleLogin}>
              {isLoggedIn ? "Logout" : "Login"}
            </S.LoginButton>
          </>
        )}
      </S.IconsWrapper>
    </S.HeaderContainer>
  );
}

export default Header;
