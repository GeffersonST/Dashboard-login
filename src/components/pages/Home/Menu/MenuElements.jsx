import styled from "styled-components";

export const MenuContainer = styled.div`
  position: absolute;
  top: 130px;
  left: 0;
  width: 30%;
  display: flex;

  justify-content: space-between;
  height: 500px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: #f58733;
  z-index: -1;
`;
export const TarefasMenu = styled.ul`
  color: red;
`;
export const TarefasLista = styled.li`
  color: blue;
`;

export const TarefasContainer = styled.div`
  background: #f6f6f6;

  margin: 40px;
  width: 60%;
  border-radius: 5px;
`;
