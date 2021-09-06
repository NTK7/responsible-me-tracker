import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { useState } from "react";
import styled from "styled-components";
import BottomLogo from "../BottomLogo/BottomLogo";

const Vaccination = () => {
  const VACCINATION = "/bg/01-03.png";
  const [vaccination, setVaccination] = useState(null);

  return (
    <Container backgroundImg={VACCINATION}>
      <main>
        <h1>VACCINATION</h1>
        <FormControl
          color="secondary"
          component="fieldset"
          className="form-control">
          <RadioGroup
            aria-label="vaccination"
            name="vaccination"
            value={vaccination}
            onChange={(e) => setVaccination(e.target.value)}
            required>
            <FormControlLabel
              value="single"
              control={<Radio required={true} />}
              label="Single Dose"
            />
            <FormControlLabel
              value="fully"
              control={<Radio required={true} />}
              label="Fully Vaccinated"
            />
            <FormControlLabel
              value="not"
              control={<Radio required={true} />}
              label="Not Vaccinated"
            />
          </RadioGroup>
        </FormControl>
      </main>
      <BottomLogo />
    </Container>
  );
};

export default Vaccination;

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
  @media screen and (max-width: 500px) {
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
