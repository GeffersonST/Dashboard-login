import React from "react";
import { Busca, Form, Txtbusca, Btnbusca } from "./SearchElements";
import { i18n } from "../../../../translate/i18n";
const BuscaContainer = () => {
  return (
    <Busca>
      <Form>
        <Txtbusca type="text" placeholder={i18n.t("messages.placeholder")} />
        <Btnbusca id="btnBusca" type="submit" value="Ok">
          {i18n.t("buttons.atribuir")}
        </Btnbusca>

        <Btnbusca id="btnBusca" type="submit" value="Ok">
          {i18n.t("buttons.arquivar")}
        </Btnbusca>
        <Btnbusca id="btnBusca" type="submit" value="Ok">
          {i18n.t("buttons.agendar")}
        </Btnbusca>
      </Form>
    </Busca>
  );
};

export default BuscaContainer;
