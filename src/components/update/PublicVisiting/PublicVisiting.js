import styled from "styled-components";

const PublicVisiting = () => {
  const PUBLIC_VISTING = "/bg/01-01.png";

  return <Container backgroundImg={PUBLIC_VISTING}></Container>;
};

export default PublicVisiting;

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
