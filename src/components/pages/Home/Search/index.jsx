import React from "react";
import { Busca, Form, Txtbusca, Btnbusca } from "./SearchElements";
const BuscaContainer = () => {
  return (
    <Busca>
      <Form>
        <Txtbusca type="text" placeholder="Digite o que você procura" />
        <Btnbusca id="btnBusca" type="submit" value="Ok">
          Atribuir
        </Btnbusca>

        <Btnbusca id="btnBusca" type="submit" value="Ok">
          Arquivar
        </Btnbusca>
        <Btnbusca id="btnBusca" type="submit" value="Ok">
          Agendar
        </Btnbusca>
      </Form>
    </Busca>
  );
};

export default BuscaContainer;
