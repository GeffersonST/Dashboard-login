import React from "react";
import { useState } from "react/cjs/react.development";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import User from "./User";
import Menu from "./Menu";
import Dashboard from "./Dashboard";
import BuscaContainer from "./Search";
import { HomeContainer } from "./HomeElements";

import Splash from "../../SplashScreen";
import { ThemeProvider } from "styled-components";

const LightTheme = {
  pageBackground: "white",
  titleColor: "grey",
  tagLineColor: "black",
};

const DarkTheme = {
  pageBackground: "#282c36",
  titleColor: "grey",
  tagLineColor: "lavender",
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <ThemeProvider theme={themes[theme]}>
      <Splash theme={theme} setTheme={setTheme} />

      <HomeContainer>
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <User />
        <Menu />

        <Dashboard />
        <BuscaContainer />
      </HomeContainer>
    </ThemeProvider>
  );
};

export default Home;
