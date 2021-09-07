import { CircularProgress } from "@material-ui/core";
import styled from "styled-components";

const Processing = () => {
  return (
    <Container>
      {/* <img src="/extra/loading.gif" alt="" />
      <p>Processing the data, please hold on ...</p> */}
      <CircularProgress color="secondary" size={100}/>
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
  height: 80vh;
  /* > img {
    object-fit: contain;
    width: 150px;
  }
  > p {
    text-align: center;
  } */
  @media screen and (max-width: 500px) {
    margin: 1pc 0;
    /* > img {
      width: 100px;
    }
    > p {
      padding: 0.5pc;
    } */
  }
`;
