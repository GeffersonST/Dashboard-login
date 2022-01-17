import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarRoute,
  SideBtnWrap,
  Site,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <Site href="https://github.com/GeffersonST" target="_blank">
          Git Hub
        </Site>
        <Site href="https://geffersondev.netlify.app" target="_blank">
          Portifólio
        </Site>
        <Site
          href="https://github.com/GeffersonST/Dashboard-login"
          target="_blank"
        >
          Documentação
        </Site>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to="/">Logout</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
