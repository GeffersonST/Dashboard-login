import styled from "styled-components";
import { IoMdText } from "react-icons/io";
import { MdSend } from "react-icons/md";
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

  background: #e6e4e4;
  z-index: -1;
`;

export const Tarefas = styled.div`
  color: red;
`;
export const ListaTarefa = styled.div`
  color: #4d4d4d;
  font-weight: bold;
`;
export const SubLista = styled.div`
  color: #4d4d4d;
  font-weight: lighter;
  font-size: 15px;
`;

export const Dash = styled.div`
  background: #ffff;

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
