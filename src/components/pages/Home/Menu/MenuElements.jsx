import styled from "styled-components";

export const MenuContainer = styled.div`
  position: absolute;
  top: 130px;
  left: 0;
  width: 30%;
  display: flex;
  z-index: 0;
  justify-content: space-between;
  height: 570px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 5px solid #174f78;
`;
export const TarefasMenu = styled.div`
  color: red;
`;
export const TarefasLista = styled.div`
  color: #4d4d4d;
  font-weight: bold;

  margin: 5%;
`;

export const TarefasContainer = styled.div`
  background: #e9e1e1;
  height: 200px;
  margin: 100px;
  min-width: 100%;
  border-radius: 5px;
`;
