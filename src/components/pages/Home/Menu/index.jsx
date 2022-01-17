import React, { useEffect, useState } from "react";
import { MenuContainer } from "./MenuElements";
import axios from "axios";

const Menu = () => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    const getMenu = async () => {
      await axios
        .get("https://desafioreact.s3.amazonaws.com/menu/menu.json")
        .then((response) => {
          console.log(response.menus);
          // eslint-disable-next-line no-undef
          setMenuData(response.menus.results);
        });
    };
    getMenu();
  }, []);

  return (
    <>
      <MenuContainer>
        <ul>
          <h1>
            {menuData.map((tema) => {
              // eslint-disable-next-line no-undef
              return <li>{tema.id}</li>;
            })}
          </h1>
        </ul>
      </MenuContainer>
    </>
  );
};

export default Menu;
