import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  max-width: 1000px;
  margin: 0 auto;
`;
export const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;
export const Logo = styled.img`
  width: 60px;
  margin-right: 20px;
`;

export const NavLinks = styled.nav`
  display: flex;
`;

export const NavItem = styled.div`
  margin: 0 15px;
  position: relative;
  cursor: pointer;

  &:hover > ul {
    display: block;
  }
`;

export const DropdownIcon = styled(FaChevronDown)`
  margin-left: 3px;
`;

export const DropdownMenu = styled.ul`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  border-radius: var(--border-radius);
  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.1),
    3px 3px 10px rgba(255, 255, 255, 0.8) inset;
  list-style: none;
  padding: 10px 0;
  margin: 0;
  width: 120px;

  li {
    font-size: 14px;
    padding: 10px;
    cursor: pointer;
    border-bottom: 1px solid #999999;
    &:hover {
      opacity: 0.7;
    }
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  margin-left: 20px;
  cursor: pointer;
  opacity: 0.7;
`;

export const LoginButton = styled.button`
  padding: 5px 10px;
  color: gray;
  border: none;
  border-radius: 5px;
`;
