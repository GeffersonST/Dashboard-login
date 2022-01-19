import styled from "styled-components";

export const MenuContainer = styled.div`
  position: absolute;
  top: 130px;
  left: 0;
  width: 10%;
  display: flex;
  z-index: 0;
  justify-content: space-between;
  height: 500px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const TarefasMenu = styled.div`
  color: red;
`;
export const TarefasLista = styled.div`
  color: #4d4d4d;
  font-weight: bold;
  text-align: center;

  margin: 20%;
`;

export const TarefasContainer = styled.div`
  background: #f6f6f6;
  height: 150px;
  margin: 10px;
  width: 90%;
  border-radius: 5px;
  z-index: -100;
`;
