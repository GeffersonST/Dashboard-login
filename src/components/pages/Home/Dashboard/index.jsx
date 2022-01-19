import React from "react";

import {
  DashContainer,
  Tarefas,
  ListaTarefa,
  SubLista,
  Dash,
  MsgIcon,
  MsgSend,
  Avatares,
} from "./DashboardElements";
import Tradutor from "../../../../translate/Tradutor";
import { i18n } from "../../../../translate/i18n";
import Avatar from "../../../../Avatars/AvatarInitials";

const Dashboard = () => {
  return (
    <DashContainer>
      <Tradutor />

      <Dash>
        <Tarefas>
          <Avatar name="Joao Bosco" bgColor="#00a3bf" />
          <ListaTarefa>
            {i18n.t("titles.app", {
              name: "João Bosco",
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
              <Avatares>
                <Avatar name="M J" bgColor="#9F93F8" />
              </Avatares>
              <Avatares>
                <Avatar name="L H" bgColor="#f6d413" />
              </Avatares>
              <Avatares></Avatares>
            </SubLista>

            <ListaTarefa></ListaTarefa>
          </Tarefas>
        </Tarefas>
      </Dash>
      <Dash>
        <Tarefas>
          <Avatar name="Melissa Jackson" bgColor="#1eb43f" />
          <ListaTarefa>
            {i18n.t("titles.app", {
              name: "Melissa Jackson",
            })}
          </ListaTarefa>

          <Tarefas>
            <SubLista>
              <MsgIcon />
              {i18n.t("messages.itWorks2")}
            </SubLista>
            <SubLista>
              <MsgSend />
              {i18n.t("messages.smallText2")}
              <Avatares>
                <Avatar name="Melissa Jackson" bgColor="#1eb43f" />
              </Avatares>
            </SubLista>

            <ListaTarefa></ListaTarefa>
          </Tarefas>
        </Tarefas>
      </Dash>
      <Dash>
        <Tarefas>
          <Avatar name="Lucas Henrique" bgColor="#ca1919" />
          <ListaTarefa>
            {i18n.t("titles.app", {
              name: "Lucas Henrique",
            })}
          </ListaTarefa>

          <Tarefas>
            <SubLista>
              <MsgIcon />
              {i18n.t("messages.itWorks3")}
            </SubLista>
            <SubLista>
              <MsgSend />
              {i18n.t("messages.smallText3")}
              <Avatares>
                <Avatar name="J R" bgColor="#0783e9" />
              </Avatares>
              <Avatares>
                <Avatar name="Melissa Jackson" bgColor="#1eb43f" />
              </Avatares>
              <Avatares>
                <Avatar name="Joao Bosco" bgColor="#00a3bf" />
              </Avatares>
            </SubLista>

            <ListaTarefa></ListaTarefa>
          </Tarefas>
        </Tarefas>
      </Dash>
    </DashContainer>
  );
};

export default Dashboard;
