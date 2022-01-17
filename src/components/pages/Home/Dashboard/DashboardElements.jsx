import styled from "styled-components";

export const DashContainer = styled.div`
  position: absolute;
  top: 130px;
  left: 0;
  width: 70%;
  display: flex;
  margin-left: 30%;
  height: 500px;

  display: flex;
  flex-direction: column;

  background: #279af8;
  z-index: -1;
`;

export const Tarefas = styled.ul`
  color: red;
`;
export const ListaTarefa = styled.li`
  color: blue;
`;
export const SubLista = styled.li`
  color: green;
`;

export const Dash = styled.div`
  background: #f6f6f6;

  margin: 20px;
  width: 60%;
  border-radius: 5px;
`;
