import styled from "styled-components";

const WorkPlan = () => {
  const WORKPLAN = "/bg/01-02.png";

  return <Container backgroundImg={WORKPLAN}></Container>;
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
`;
