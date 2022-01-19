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
import Tradutor from "../../../../translate/Tradutor";
import { i18n } from "../../../../translate/i18n";

const Dashboard = () => {
  return (
    <DashContainer>
      <Tradutor />
      <Dash>
        <Tarefas>
          <ListaTarefa>
            {i18n.t("titles.app", {
              name: "OUTRO",
            })}
          </ListaTarefa>
          <Tarefas>
            <SubLista>
              <MsgIcon />
              {i18n.t("messages.itWorks")}
            </SubLista>
            <SubLista>
              <MsgSend />
              {i18n.t("messages.smallText")}
            </SubLista>
          </Tarefas>
        </Tarefas>
      </Dash>
      <Dash>
        <Tarefas>
          <ListaTarefa>
            {i18n.t("titles.app", {
              name: "OUTRO",
            })}
          </ListaTarefa>
          <Tarefas>
            <SubLista>
              <MsgIcon /> {i18n.t("messages.itWorks")}
            </SubLista>
            <SubLista>
              <MsgSend />
              {i18n.t("messages.smallText")}
            </SubLista>
          </Tarefas>
        </Tarefas>
      </Dash>
      <Dash>
        <Tarefas>
          <ListaTarefa>
            {i18n.t("titles.app", {
              name: "OUTRO",
            })}
          </ListaTarefa>
          <Tarefas>
            <SubLista>
              <MsgIcon /> {i18n.t("messages.itWorks")}
            </SubLista>
            <SubLista>
              <MsgSend />
              {i18n.t("messages.smallText")}
            </SubLista>
          </Tarefas>
        </Tarefas>
      </Dash>
    </DashContainer>
  );
};

export default Dashboard;
