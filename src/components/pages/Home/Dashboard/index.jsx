import React from "react";
import {
  DashContainer,
  Tarefas,
  ListaTarefa,
  SubLista,
  Dash,
} from "./DashboardElements";
const Dashboard = () => {
  return (
    <DashContainer>
      <Dash>
        <Tarefas>
          <ListaTarefa>Tarefa 1</ListaTarefa>
          <Tarefas>
            <SubLista>Urgente</SubLista>
            <SubLista>Data Fixa</SubLista>
          </Tarefas>
        </Tarefas>
      </Dash>
      <Dash>
        <Tarefas>
          <ListaTarefa>Tarefa 1</ListaTarefa>
          <Tarefas>
            <SubLista>Urgente</SubLista>
            <SubLista>Data Fixa</SubLista>
          </Tarefas>
        </Tarefas>
      </Dash>
      <Dash>
        <Tarefas>
          <ListaTarefa>Tarefa 1</ListaTarefa>
          <Tarefas>
            <SubLista>Urgente</SubLista>
            <SubLista>Data Fixa</SubLista>
          </Tarefas>
        </Tarefas>
      </Dash>
    </DashContainer>
  );
};

export default Dashboard;
