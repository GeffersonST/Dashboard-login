import React from "react";
import { Busca, Form, Txtbusca, Btnbusca } from "./SearchElements";
const BuscaContainer = () => {
  return (
    <Busca>
      <Form action="/search" class="search" method="get">
        <Txtbusca
          name="q"
          type="text"
          value=""
          placeholder="Digite o que você procura"
        />
        <Btnbusca id="btnBusca" type="submit" value="Ok">
          Buscar
        </Btnbusca>
      </Form>
    </Busca>
  );
};

export default BuscaContainer;
