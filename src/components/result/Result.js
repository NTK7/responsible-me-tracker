import styled from "styled-components";
import GaugeChart from "react-gauge-chart";
import { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { Fade } from "react-reveal";
import { useHistory } from "react-router";
import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
} from "react-share";
function Result({ percentage, age }) {
  const [bestResults, setBestResults] = useState(false);
  const history = useHistory();
  const BASE_URL = window.location.href;
  const content = `I have scored ${
    Math.round(percentage * 10000) / 100
  }% from the Responsible Me Tracker, click the link and find yours too!`;

  useEffect(() => {
    console.log(percentage);
    percentage === 1 && setBestResults(true);
  }, [percentage]);

  const onHandleRefreshPage = () => {
    window.scrollTo(0, 0);
    window.location.href = "/";
  };

  return (
    <Fade>
      <Container>
        <h3>Your Result</h3>
        <h4>HOW RESPONSIBLE ARE YOU?</h4>
        <GaugeChart
          className="gauge-chart"
          nrOfLevels={15}
          arcPadding={0.1}
          cornerRadius={5}
          percent={percentage}
        />
        <h4>
          You are only{" "}
          <strong style={{ color: "red" }}>
            {Math.round(percentage * 10000) / 100}%
          </strong>{" "}
          Responsible
        </h4>
        <p>Take following actions and be 100% #Responsible citizen</p>

        <section>
          {!bestResults ? (
            <div>
              <p style={{ textAlign: "center" }}>
                Please make sure you follow the below instructions below.
              </p>
              <ul>
                {!age.includes("1") && (
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
            <h3>Great job, continue the best practices!</h3>
          )}
        </section>

        <h2>THERE WON’T BE ANOTHER CHANCE TO REMIND YOU!</h2>
        <Button
          color="secondary"
          variant="outlined"
          onClick={onHandleRefreshPage}>
          Try Again
        </Button>
        <Button
          color="secondary"
          variant="contained"
          onClick={() => history.push("/visualization")}>
          View Stats
        </Button>

        <div className="share__section">
          <p>Share on</p>
          <FacebookShareButton
            url={BASE_URL}
            quote={content}
            className="share-icon">
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <WhatsappShareButton
            url={BASE_URL}
            title={content}
            separator=":: "
            className="share-icon">
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
          <TwitterShareButton
            url={BASE_URL}
            title={content}
            className="share-icon">
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <TelegramShareButton
            url={BASE_URL}
            title={content}
            className="share-icon">
            <TelegramIcon size={32} round />
          </TelegramShareButton>
        </div>
      </Container>
    </Fade>
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
    margin: .5pc;
    width: 20%;
    min-width: fit-content;
  }
  .visualization {
    width: 100%;
  }
  .share__section {
    margin: 0.5pc 0;
    > p {
      font-size: small;
      color: grey;
      text-align: center;
      margin: 0.2pc;
    }
    .share-icon {
      margin: 0 0.1pc;
    }
  }
  @media screen and (max-width: 1000px) {
    .gauge-chart {
      margin: 0.5pc;
      width: 60vw !important;
    }
  }
  @media screen and (max-width: 500px) {
    .gauge-chart {
      width: 80vw !important;
    }
    margin: 1pc;
    > h4,
    > h3,
    > h2,
    > p {
      font-size: medium;
      font-weight: bold;
      margin: 0.8pc;
    }
    > section {
      margin: 0;
    }
    > button {
      width: 90%;
    }
  }
`;
