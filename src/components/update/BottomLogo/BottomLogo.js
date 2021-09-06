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
  border: 2px blue solid;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0.8pc 2pc;
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
