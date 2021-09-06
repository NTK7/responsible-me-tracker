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
