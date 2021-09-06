import styled from "styled-components";

const FriendVisiting = () => {
  const FRIEND_VISITING = "/bg/01-06.png";

  return <Container backgroundImg={FRIEND_VISITING}></Container>;
};

export default FriendVisiting;

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
