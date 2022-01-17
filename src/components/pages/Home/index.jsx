import React from "react";
import { useState } from "react/cjs/react.development";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
    </div>
  );
};

export default Home;
