import React from "react";
import { useState } from "react/cjs/react.development";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import User from "./User";
import Menu from "./Menu";
import Dashboard from "./Dashboard";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <User />
      <Menu />
      <Dashboard />
    </div>
  );
};

export default Home;
