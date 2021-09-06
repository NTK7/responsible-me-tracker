import styled from "styled-components";
import BottomLogo from "../BottomLogo/BottomLogo";

const UseOfMask = () => {
  const USE_OF_MASK = "/bg/01-07.png";

  return (
    <Container backgroundImg={USE_OF_MASK}>
      <main>
        <h1>WEARING MASK OUT SIDE HOME</h1>
      </main>
      <BottomLogo />
    </Container>
  );
};

export default UseOfMask;

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
