import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { BsFillGearFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;
export const NavLink = styled(Link)`
  color: #e0e8f9;

  display: flex;
  margin-top: 30px;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;
export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #e94e0f;

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;
export const Bars = styled(BsFillGearFill)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;
export const Menu = styled(GiHamburgerMenu)`
  justify-content: space-between;
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;
