import React, { Component } from "react";
import { MenuContainer } from "./MenuElements";

import api from "./api";

class Menu extends Component {
  async componentDidMount() {
    const response = await api.get("/menus");

    console.log(response.data);
  }

  render() {
    return (
      <MenuContainer>
        <ul>
          <li>Tarefa 1</li>
          <ul>
            <li>Urgente</li>
            <li>Data Fixa</li>
          </ul>
        </ul>
        <ul>
          <li>Tarefa 2</li>
          <ul>
            <li>Avisos</li>
          </ul>
        </ul>
        <ul>
          <li>Tarefa 3</li>
          <ul>
            <li>Convocação</li>
            <li>Checklist</li>
            <li>Lixo</li>
          </ul>
        </ul>
      </MenuContainer>
    );
  }
}

export default Menu;
