import styled from "styled-components";

const AgeGroup = () => {
  const AGE_GROUP = "/bg/01-04.png";

  return <Container backgroundImg={AGE_GROUP}></Container>;
};

export default AgeGroup;

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
