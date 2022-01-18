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

  background: #36444c;
  box-shadow: 0px 4px 16px grey;
  z-index: -1;
`;
export const TarefasMenu = styled.div`
  color: red;
`;
export const TarefasLista = styled.div`
  color: #4d4d4d;
  font-weight: bold;
  text-align: center;
  margin: 10%;
`;

export const TarefasContainer = styled.div`
  background: #f6f6f6;
  height: 500px;
  margin: 10px;
  width: 90%;
  border-radius: 5px;
`;
