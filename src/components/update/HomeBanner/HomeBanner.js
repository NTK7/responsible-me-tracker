import styled from "styled-components";

const HomeBanner = () => {
  return (
    <Container>
      <h1>
        #RESPONSIBLE
        <img src="/logos/logo.png" alt="" />E <span>-TRACKER</span>
      </h1>
    </Container>
  );
};

export default HomeBanner;

const Container = styled.div`
  display: grid;
  place-items: center;
  align-items: center;
  height: 100vh;
  > h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1pc;
    font-weight: bold;
    border-radius: 1pc;
    font-size: 3rem;
    > img {
      object-fit: contain;
      height: 60px;
    }
    > span {
      color: #e1383e;
    }
  }
`;
