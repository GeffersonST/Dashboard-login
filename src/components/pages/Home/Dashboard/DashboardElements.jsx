import styled from "styled-components";
import { IoMdText } from "react-icons/io";
import { MdSend } from "react-icons/md";
export const DashContainer = styled.div`
  position: absolute;
  top: 140px;
  left: 0;
  width: 70%;
  display: flex;
  margin-left: 30%;
  height: 560px;
  border: 5px solid #174f78;

  display: flex;
  flex-direction: column;

  z-index: 100;
`;

export const Tarefas = styled.div`
  color: red;
`;
export const ListaTarefa = styled.div`
  color: #4d4d4d;
  font-weight: bold;
  z-index: 1;
`;
export const SubLista = styled.div`
  color: #4d4d4d;
  font-weight: lighter;
  font-size: 15px;
  z-index: 1;
`;

export const Dash = styled.div`
  background: #e9e1e1;
  z-index: 1;
  margin: 40px;
  width: 60%;
  border-radius: 5px;
`;
export const MsgIcon = styled(IoMdText)`
  color: #808080;
`;
export const MsgSend = styled(MdSend)`
  color: #808080;
`;
