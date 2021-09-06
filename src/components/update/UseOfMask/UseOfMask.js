import styled from "styled-components";

const UseOfMask = () => {
  const USE_OF_MASK = "/bg/01-07.png";

  return <Container backgroundImg={USE_OF_MASK}></Container>;
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
`;
