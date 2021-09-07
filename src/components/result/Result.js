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
import BottomLogo from "../update/BottomLogo/BottomLogo";
import { LUNGS } from "../../utils/constants";
import { returnLungImagePath } from "../../utils/functions";

function Result({
  percentage,
  age,
  vaccination,
  workPlan,
  publicVisiting,
  friendVisiting,
  useOfMask,
}) {
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
        <h1>YOUR RESULT</h1>
        <h4>HOW RESPONSIBLE ARE YOU?</h4>
        <div className="lung__imageSection">
          <img src={returnLungImagePath(percentage).image} alt="lungs" />
          <h4>
            You are only{" "}
            <strong style={{ color: returnLungImagePath(percentage).color }}>
              {Math.round(percentage * 10000) / 100}%
            </strong>{" "}
            Responsible
          </h4>
        </div>
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
                    {vaccination === "not" && <li>Take the Vaccine</li>}
                    {vaccination === "single" && <li>Take the second dose</li>}
                  </>
                )}
                {workPlan !== "wft" && (
                  <>
                    <li>Work from home as much as possible</li>
                    <div className="icon__image">
                      <img src="/icons/wfh.png" alt="" height="60" width="60" />
                    </div>
                  </>
                )}
                {publicVisiting === "sometimes" && (
                  <>
                    <li>Avoid public places for next 2 weeks</li>
                    <div className="icon__image">
                      <img
                        src="/icons/public.png"
                        alt=""
                        height="60"
                        width="60"
                      />
                    </div>
                  </>
                )}
                {friendVisiting === "sometimes" && (
                  <>
                    <li>
                      Do not visit your friends & relatives for next 2 weeks
                    </li>
                    <div className="icon__image">
                      <img
                        src="/icons/friends.png"
                        alt=""
                        height="60"
                        width="60"
                      />
                    </div>
                  </>
                )}
                {useOfMask === "sometimes" && (
                  <>
                    <li>Always wear a mask outside home</li>
                    <div className="icon__image">
                      <img
                        src="/icons/mask.png"
                        alt=""
                        height="60"
                        width="60"
                      />
                    </div>
                  </>
                )}
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
          className="tryAgain__button"
          onClick={onHandleRefreshPage}>
          Try Again
        </Button>
        <Button
          color="secondary"
          variant="contained"
          className="viewStats__button"
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
        <BottomLogo />
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

  .lung__imageSection {
    display: flex;
    align-items: center;
    justify-content: center;
    > h4 {
      width: 25%;
      > strong {
        font-size: 3rem;
      }
    }
    > img {
      object-fit: contain;
      width: 400px;
    }
  }

  > h4,
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
    color: #dc2529;
  }
  > h1,
  > h2 {
    color: #dc2529;
  }
  > section {
    margin: 2pc;
  }
  > button {
    margin: 0.5pc;
    width: 15%;
    border-radius: 2pc;
    min-width: fit-content;
  }
  .tryAgain__button {
    border: 1px solid #dc2529;
    color: #dc2529;
  }
  .viewStats__button {
    background-color: #dc2529;
  }
  .visualization {
    width: 100%;
  }
  .share__section {
    margin: 2pc 0;
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
    .lung__imageSection {
      flex-direction: column;
      > h4 {
        text-align: center;
        width: auto;
        text-align: center;
        > strong {
          font-size: 1.5rem;
        }
      }
      > img {
        height: 250px;
      }
    }
    > button {
      width: 50%;
    }
  }
  @media screen and (max-width: 500px) {
    .lung__imageSection {
      width: 90vw;
      overflow: hidden;
      > img {
        height: 180px;
      }
      > h4 {
        font-size: medium;
      }
    }
    .icon__image {
      /* border: 1px solid red; */
      > img {
        margin-left: 30vw;
      }
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
