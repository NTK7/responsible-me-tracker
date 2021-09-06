import styled from "styled-components";

const BottomLogo = () => {
  return (
    <Container>
      #RESPONSIBLE
      <img src="/logos/logo.png" alt="" />E <span>-TRACKER</span>
    </Container>
  );
};

export default BottomLogo;

const Container = styled.div`
  display: flex;
  border: 2px white solid;
  align-items: center;
  justify-content: center;
  width: fit-content;
  text-align: center;
  background-color: #fff;
  padding: 0.7pc 1pc  0.5pc 1pc;
  /* border: 1px solid red; */
  border-top-left-radius: 2pc;
  border-top-right-radius: 2pc;
  font-size: 1.2rem;
  font-weight: bold;
  > img {
    object-fit: contain;
    height: 25px;
  }
  > span {
    color: #e1383e;
  }
`;
