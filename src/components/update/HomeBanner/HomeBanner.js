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
  scroll-snap-align: start;
  /* border: 1px solid red; */
  > h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1pc;
    font-weight: bold;
    font-size: 3rem;
    > img {
      object-fit: contain;
      height: 60px;
    }
    > span {
      color: #e1383e;
    }
  }

  @media screen and (max-width: 800px) {
    > h1 {
      font-size: 2rem;
      word-break: break-all;
      text-align: center;
      > img {
        height: 50px;
      }
    }
  }
  @media screen and (max-width: 500px) {
    > h1 {
      font-size: 1.2rem;
      font-weight: bold;
      padding: 0;
      word-wrap: break-word;
      text-align: center;
      > img {
        height: 20px;
      }
    }
  }
`;
