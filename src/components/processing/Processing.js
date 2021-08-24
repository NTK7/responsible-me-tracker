import styled from "styled-components";

const Processing = () => {
  return (
    <Container>
      <img src="/extra/loading.gif" alt="" />
      <p>Your results are being calculated, please hold on ...</p>
    </Container>
  );
};

export default Processing;

const Container = styled.div`
  margin: 2pc 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1pc;
  > img {
    object-fit: contain;
    width: 150px;
  }
`;