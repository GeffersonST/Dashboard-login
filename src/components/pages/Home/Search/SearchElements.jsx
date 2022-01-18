import styled from "styled-components";

export const Busca = styled.div`
  padding: 0;
  background: #36444c;
  position: absolute;
  top: 100px;
  left: 0;
  width: 100%;
`;

export const Form = styled.form`
  margin: 0 auto;
  padding: 0;
  display: flex;
`;
export const Txtbusca = styled.input`
  border: 0px solid #222;
  background: #eee;
  width: 400px;
  height: 25px;
  display: flex;
  margin: 10px;

  padding: 5px 0 5px 5px;
`;
export const Btnbusca = styled.button`
  background: #e94e0f;
  max-width: 100px;
  color: #fff;
  margin: 10px;
  padding: 10px;
  border: 0 none;
  font-size: 11px;
  font-weight: bold;
  text-transform: uppercase;
  &:hover {
    color: #36444c;
    transition: 0.2s ease-in-out;
  }
`;
