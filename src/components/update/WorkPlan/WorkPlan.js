import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { useState } from "react";
import styled from "styled-components";
import BottomLogo from "../BottomLogo/BottomLogo";

const WorkPlan = () => {
  const WORKPLAN = "/bg/01-02.png";
  const [workPlan, setWorkPlan] = useState(null);

  return (
    <Container backgroundImg={WORKPLAN}>
      <main>
        <h1>WORK PLAN FOR NEXT 2 WEEKS</h1>
        <FormControl
          color="secondary"
          component="fieldset"
          className="form-control">
          <RadioGroup
            aria-label="workPlan"
            name="workPlan"
            value={workPlan}
            onChange={(e) => setWorkPlan(e.target.value)}
            required>
            <FormControlLabel
              value="wft"
              control={<Radio required={true} />}
              label="Work from home"
            />
            <FormControlLabel
              value="visiting"
              control={<Radio required={true} />}
              label="Visiting to office"
            />
            <FormControlLabel
              value="both"
              control={<Radio required={true} />}
              label="Both"
            />
          </RadioGroup>
        </FormControl>
      </main>
      <BottomLogo />
    </Container>
  );
};

export default WorkPlan;

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
`;
