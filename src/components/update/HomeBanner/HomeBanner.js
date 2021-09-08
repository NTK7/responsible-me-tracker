import styled from "styled-components";

const HomeBanner = () => {
  return (
    <Container>
      <h1>
        <span>
          #RESPONSIBLE
          <img src="/logos/logo.png" alt="" />E
        </span>{" "}
        <span>-TRACKER</span>
      </h1>
      <p>Scroll down to get started</p>
    </Container>
  );
};

export default HomeBanner;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  scroll-snap-align: start;
  /* border: 1px solid red; */
  > p {
    display: none;
  }
  > h1 {
    font-weight: bold;
    font-size: 3rem;
    > span {
      :first-child {
        > img {
          object-fit: contain;
          height: 60px;
        }
      }
      :last-child {
        color: #e1383e;
      }
    }
  }

  @media screen and (max-width: 800px) {
    > h1 {
      font-size: 2rem;
      text-align: center;
      > span {
        :first-child {
          > img {
            height: 50px;
          }
        }
      }
    }
    > p {
      display: block;
    }
  }
  @media screen and (max-width: 500px) {
    > h1 {
      font-size: 1.5rem;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      > span {
        :first-child {
          > img {
            height: 30px;
          }
        }
      }
    }
  }
`;
