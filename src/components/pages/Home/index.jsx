import React from "react";
import { useState } from "react/cjs/react.development";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import User from "./User";
import Menu from "./Menu";
import Dashboard from "./Dashboard";
import BuscaContainer from "./Search";
import { HomeContainer } from "./HomeElements";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <HomeContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <User />
      <Menu />

      <Dashboard />
      <BuscaContainer />
    </HomeContainer>
  );
};

export default Home;
