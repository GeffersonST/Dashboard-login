import styled from "styled-components";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";

const Toggle = styled.button`
  cursor: pointer;
  height: 40px;
  margin-bottom: 650px;
  align-items: center;
  width: 40px;
  border-radius: 50%;
  border: none;

  background-color: ${(props) => props.theme.titleColor};
  color: ${(props) => props.theme.pageBackground};
  &:focus {
    outline: none;
  }
  transition: all 0.5s ease;
`;

const Page = styled.div`
  display: flex;

  height: 600px;
  align-items: center;
  z-index: 0;
  width: 100%;
  background-color: ${(props) => props.theme.pageBackground};
  transition: all 0.5s ease;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin: 1450px;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.titleColor};
  transition: all 0.5s ease;
`;

const TagLine = styled.span`
  color: ${(props) => props.theme.tagLineColor};
  font-size: 18px;
  transition: all 0.5s ease;
  align-items: center;
`;

function Splash(props) {
  function changeTheme() {
    if (props.theme === "light") {
      props.setTheme("dark");
    } else {
      props.setTheme("light");
    }
  }

  const icon =
    props.theme === "light" ? <HiMoon size={30} /> : <CgSun size={30} />;

  return (
    <Page>
      <Container>
        <Toggle onClick={changeTheme}>{icon}</Toggle>
        <Title></Title>
        <TagLine></TagLine>
      </Container>
    </Page>
  );
}

export default Splash;
