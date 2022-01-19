import styled from "styled-components";

export const Busca = styled.div`
  padding: 0;
  background: #174f78;
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
  min-width: 10%;
  color: #fff;
  margin: 5px;
  padding: 5px;

  border: 0 none;
  font-size: 50%;
  font-weight: bold;
  text-transform: uppercase;
  &:hover {
    color: #36444c;
    transition: 0.2s ease-in-out;
  }
`;
