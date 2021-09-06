import styled from "styled-components";
import BottomLogo from "../BottomLogo/BottomLogo";

const WorkPlan = () => {
  const WORKPLAN = "/bg/01-02.png";

  return (
    <Container backgroundImg={WORKPLAN}>
      <main>
        <h1>WORK PLAN FOR NEXT 2 WEEKS</h1>
      </main>
      <BottomLogo />
    </Container>
  );
};

export default WorkPlan;

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
