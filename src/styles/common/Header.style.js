import styled from "styled-components";
import { FaUser, FaShoppingCart, FaAngleDown, FaBell } from "react-icons/fa";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f8f9fa;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const NavLinks = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavItem = styled.div`
  margin: 0 15px;
  position: relative;
  cursor: pointer;

  &:hover > ul {
    display: block;
  }
`;

export const DropdownIcon = styled(FaAngleDown)`
  margin-left: 5px;
`;

export const DropdownMenu = styled.ul`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 10px 0;
  margin: 0;
  width: 150px;

  li {
    padding: 10px;
    cursor: pointer;
    &:hover {
      background-color: #f1f1f1;
    }
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  margin-left: 15px;
  cursor: pointer;
`;

export const LoginButton = styled.button`
  margin-left: 20px;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
