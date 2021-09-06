import styled from "styled-components";
import BottomLogo from "../BottomLogo/BottomLogo";

const FriendVisiting = () => {
  const FRIEND_VISITING = "/bg/01-06.png";

  return (
    <Container backgroundImg={FRIEND_VISITING}>
      <main>
        <h1>VISITING FRIENDS/RELATIVES DURING NEXT 2 WEEKS</h1>
      </main>
      <BottomLogo />
    </Container>
  );
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

  > main {
    > h1 {
      font-size: 2.5rem;
      color: white;
      font-weight: bold;
    }
  }
`;
