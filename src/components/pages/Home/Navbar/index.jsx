import React from "react";
import { Nav, NavLink, NavIcon, Bars } from "./NavbarElements";
import { i18n } from "../../../../translate/i18n";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to="/"> </NavLink>
        <NavIcon onClick={toggle}>
          <p>{i18n.t("messages.ajuda")}</p>

          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
