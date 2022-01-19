import React from "react";
import {
  MenuContainer,
  TarefasContainer,
  TarefasMenu,
  TarefasLista,
} from "./MenuElements";

const Menu = () => {
  return (
    <MenuContainer>
      <TarefasContainer>
        <TarefasMenu>
          <TarefasLista> Tarefas</TarefasLista>
          <TarefasMenu>
            <TarefasLista>Urgente</TarefasLista>
            <TarefasLista>Data Fixa</TarefasLista>
          </TarefasMenu>
        </TarefasMenu>
      </TarefasContainer>
    </MenuContainer>
  );
};

export default Menu;
