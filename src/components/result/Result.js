import styled from "styled-components";
import GaugeChart from "react-gauge-chart";
import { useState } from "react";
import { Button } from "@material-ui/core";

function Result() {
  const [bestResults, setBestResults] = useState(false);
  const [ageBoundary, setAgeBoundary] = useState(25);

  // if result is 100% then continue the best practices, you are good to go else
  // for age group more than 30
  // - Take the Vaccine
  // - Take the second dose
  // - Work from home as much as possible
  // - Avoid public places for next 2 weeks
  // - Do not visit your friends & relatives for next 2 weeks
  // - Always wear a mask outsite home

  // for age group less than 30
  // - Work from home as much as possible
  // - Avoid public places for next 2 weeks
  // - Do not visit your friends & relatives for next 2 weeks
  // - Always wear a mask outsite home

  const onHandleRefreshPage = () => {
    window.scrollTo(0, 0);
    window.location.href = "/";
  };

  return (
    <Container>
      <h3>Your Result</h3>
      <h4>HOW RESPONSIBLE ARE YOU?</h4>
      <GaugeChart
        className="gauge-chart"
        nrOfLevels={15}
        arcPadding={0.1}
        cornerRadius={5}
        percent={0.62}
      />
      <h4>You are only 70% Responsible</h4>
      <p>Take following actions and be 100% #Responsible citizen</p>

      <section>
        {!bestResults ? (
          <div>
            <p>Please make sure you follow the below instructions below.</p>
            <ul>
              {ageBoundary > 30 && (
                <>
                  <li>Take the Vaccine</li>
                  <li>Take the second dose</li>
                </>
              )}
              <li> Work from home as much as possible</li>
              <li>Avoid public places for next 2 weeks</li>
              <li>Do not visit your friends & relatives for next 2 weeks</li>
              <li>Always wear a mask outside home</li>
            </ul>
          </div>
        ) : (
          <p>Great job, continue the best practices!</p>
        )}
      </section>

      <h2>THERE WON’T BE ANOTHER CHANCE TO REMIND YOU!</h2>
      <Button
        color="secondary"
        variant="outlined"
        onClick={onHandleRefreshPage}>
        Try Again
      </Button>
    </Container>
  );
}

export default Result;

const Container = styled.div`
  /* border: 1px red solid; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 2pc;
  .gauge-chart {
    background-color: #262626;
    object-fit: contain;
    margin: 1pc;
    width: 40vw !important;
  }
  > h4,
  > h3,
  > h2,
  > p {
    font-size: larger;
    font-weight: bold;
    color: #3d3d3d;
    text-align: center;
    margin: 1pc;
  }
  > h3 {
    font-size: x-large;
    color: red;
  }
  > section {
    margin: 2pc;
  }
  > button {
    margin: 1pc;
  }
`;
