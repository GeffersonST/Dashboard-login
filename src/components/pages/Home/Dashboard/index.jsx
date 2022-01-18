import React from "react";
import {
  DashContainer,
  Tarefas,
  ListaTarefa,
  SubLista,
  Dash,
  MsgIcon,
  MsgSend,
} from "./DashboardElements";
const Dashboard = () => {
  return (
    <DashContainer>
      <Dash>
        <Tarefas>
          <ListaTarefa>Nome</ListaTarefa>
          <Tarefas>
            <SubLista>
              <MsgIcon /> Subject Boa tarde, como foi o suporte realizado?
              Segundo texto
            </SubLista>
            <SubLista>
              <MsgSend />
              Tarefa 1
            </SubLista>
          </Tarefas>
        </Tarefas>
      </Dash>
      <Dash>
        <Tarefas>
          <ListaTarefa>Nome</ListaTarefa>
          <Tarefas>
            <SubLista>
              <MsgIcon /> Subject Boa tarde, como foi o suporte realizado?
              Segundo texto
            </SubLista>
            <SubLista>
              <MsgSend />
              Tarefa 1
            </SubLista>
          </Tarefas>
        </Tarefas>
      </Dash>
      <Dash>
        <Tarefas>
          <ListaTarefa>Nome</ListaTarefa>
          <Tarefas>
            <SubLista>
              <MsgIcon /> Subject Boa tarde, como foi o suporte realizado?
              Segundo texto
            </SubLista>
            <SubLista>
              <MsgSend />
              Tarefa 1
            </SubLista>
          </Tarefas>
        </Tarefas>
      </Dash>
    </DashContainer>
  );
};

export default Dashboard;
