import styled from "styled-components";
import BottomLogo from "../BottomLogo/BottomLogo";

const Vaccination = () => {
  const VACCINATION = "/bg/01-03.png";

  return (
    <Container backgroundImg={VACCINATION}>
      <main>
        <h1>VACCINATION</h1>
      </main>
      <BottomLogo />
    </Container>
  );
};

export default Vaccination;

const Container = styled.div`
  ${({ backgroundImg }) => `background-image: url(${backgroundImg})`};
  background-position: center;
  background-size: contain;
  /* background-repeat: no-repeat; */
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* border: 2px black solid; */

  > main {
    > h1 {
      font-size: 2.5rem;
      color: white;
      font-weight: bold;
    }
  }
`;
