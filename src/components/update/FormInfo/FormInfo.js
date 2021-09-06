import styled from "styled-components";
import BottomLogo from "../BottomLogo/BottomLogo";

const FormInfo = () => {
  return (
    <Container>
      <main>fill out the form below to get your score!</main>
      <BottomLogo />
    </Container>
  );
};

export default FormInfo;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  /* border: 2px black solid; */
  > main {
    width: 100%;
    /* border: 2px green solid; */
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: #474747;
    flex: 1;
  }
`;