import styled from "styled-components";

export const Busca = styled.div`
  padding: 0;
  background: #51e683;
  position: absolute;
  top: 100px;
  left: 0;
  width: 100%;
  display: flex;
`;

export const Form = styled.form`
  margin: 0 auto;
  padding: 0;
`;
export const Txtbusca = styled.input`
  border: 0px solid #222;
  background: #eee;
  width: 260px;
  height: 25px;
  margin: 0 auto;
  padding: 5px 0 5px 5px;

  line-height: 36px; // altura da linha
`;
export const Btnbusca = styled.button`
  background: #00cccc;

  border: 0px solid #222;
  color: #fff;

  padding: 10px;
  border: 0 none;
  font-size: 11px;
  font-weight: bold;
  text-transform: uppercase;
  &:hover {
    color: #e94e0f;
    transition: 0.2s ease-in-out;
  }
`;
