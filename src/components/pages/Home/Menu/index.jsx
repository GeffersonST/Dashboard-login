import React, { Component } from "react";
import {
  MenuContainer,
  TarefasContainer,
  TarefasMenu,
  TarefasLista,
} from "./MenuElements";

import api from "./api";

class Menu extends Component {
  async componentDidMount() {
    const response = await api.get("/id");

    console.log(response.data);
  }

  render() {
    return (
      <MenuContainer>
        <TarefasContainer>
          <TarefasMenu>
            <TarefasLista>Tarefa 1</TarefasLista>
            <TarefasMenu>
              <TarefasLista>Urgente</TarefasLista>
              <TarefasLista>Data Fixa</TarefasLista>
            </TarefasMenu>
          </TarefasMenu>
        </TarefasContainer>
      </MenuContainer>
    );
  }
}

export default Menu;
