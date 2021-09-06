import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { useState } from "react";
import styled from "styled-components";
import BottomLogo from "../BottomLogo/BottomLogo";

const AgeGroup = () => {
  const AGE_GROUP = "/bg/01-04.png";
  const [age, setAge] = useState(null);

  return (
    <Container backgroundImg={AGE_GROUP}>
      <main>
        <h1>AGE GROUP</h1>
        <FormControl
          color="secondary"
          component="fieldset"
          className="form-control">
          <RadioGroup
            aria-label="ageGroup"
            name="ageGroup"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required>
            <FormControlLabel
              value="0-17"
              control={<Radio required={true} />}
              label="Below 18"
            />
            <FormControlLabel
              value="19-29"
              control={<Radio required={true} />}
              label="19-29"
            />
            <FormControlLabel
              value="30-39"
              control={<Radio required={true} />}
              label="30-39"
            />
            <FormControlLabel
              value="40-49"
              control={<Radio required={true} />}
              label="40-49"
            />
            <FormControlLabel
              value="50-59"
              control={<Radio required={true} />}
              label="50-59"
            />
            <FormControlLabel
              value="60+"
              control={<Radio required={true} />}
              label="60+"
            />
          </RadioGroup>
        </FormControl>
      </main>
      <BottomLogo />
    </Container>
  );
};

export default AgeGroup;

const Container = styled.div`
  ${({ backgroundImg }) => `background-image: url(${backgroundImg})`};
  background-position: center;
  background-size: contain;
  /* background-repeat: no-repeat; */
  height: 100vh;

  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* border: 2px black solid; */
  overflow-x: hidden;

  > main {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    padding-top: 10vh;

    > h1 {
      font-size: 2rem;
      color: white;
      font-weight: bold;
      margin: 0 25vw;
    }
    .form-control {
      margin: 0 25vw;
      margin-top: 1pc;
      background-color: #dc2529;
      color: white;
      .MuiIconButton-label {
        color: white !important;
      }
    }
  }
  @media screen and (max-width: 800px) {
    background-repeat: no-repeat;
    background-size: cover;
    > main {
      > h1 {
        font-size: 1.5rem;
        margin: 0 10vw;
      }
      .form-control {
        margin: 5vw 10vw;
      }
    }
  }
`;
