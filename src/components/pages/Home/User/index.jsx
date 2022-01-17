import React from "react";
import { UserContainer, UserName } from "./UserElements";
import logo from "../../../../assets/avatar1.png";
const User = () => {
  return (
    <UserContainer>
      <UserName>
        <img src={logo} alt="logo" />
      </UserName>
    </UserContainer>
  );
};

export default User;
