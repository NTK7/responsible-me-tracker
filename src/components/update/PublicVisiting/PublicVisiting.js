import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { useState } from "react";
import styled from "styled-components";
import BottomLogo from "../BottomLogo/BottomLogo";

const PublicVisiting = () => {
  const PUBLIC_VISTING = "/bg/01-01.png";
  const [publicVisiting, setPublicVisiting] = useState(null);

  return (
    <Container backgroundImg={PUBLIC_VISTING}>
      <main>
        <h1>VISITING TO PUBLIC PLACES INLCUDING SHOPS</h1>
        <FormControl
          color="secondary"
          component="fieldset"
          className="form-control">
          <RadioGroup
            aria-label="publicVisiting"
            name="publicVisiting"
            value={publicVisiting}
            onChange={(e) => setPublicVisiting(e.target.value)}
            required>
            <FormControlLabel
              value="avoided"
              control={<Radio required={true} />}
              label="Avoided"
            />
            <FormControlLabel
              value="sometimes"
              control={<Radio required={true} />}
              label="Sometimes"
            />
          </RadioGroup>
        </FormControl>
      </main>
      <BottomLogo />
    </Container>
  );
};

export default PublicVisiting;

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
