import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import styled from "styled-components";
import BottomLogo from "../BottomLogo/BottomLogo";

const UseOfMask = ({ useOfMask, setUseOfMask }) => {
  const USE_OF_MASK = "/bg/01-07.png";

  return (
    <Container backgroundImg={USE_OF_MASK}>
      <main>
        <h1>WEARING MASK OUTSIDE HOME</h1>

        <FormControl
          color="secondary"
          component="fieldset"
          className="form-control">
          <RadioGroup
            aria-label="useOfMask"
            name="useOfMask"
            value={useOfMask}
            onChange={(e) => setUseOfMask(e.target.value)}
            required>
            <FormControlLabel
              value="always"
              control={<Radio required={true} />}
              label="Always"
            />
            <FormControlLabel
              value="sometimes"
              control={<Radio required={true} />}
              label="Sometimes"
            />
            <FormControlLabel
              value="dontcare"
              control={<Radio required={true} />}
              label="I don't care"
            />
          </RadioGroup>
        </FormControl>
        <Button type="submit">SUBMIT</Button>
      </main>
      <BottomLogo />
    </Container>
  );
};

export default UseOfMask;

const Container = styled.div`
  ${({ backgroundImg }) => `background-image: url(${backgroundImg})`};
  background-position: center;
  background-size: contain;
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow-x: hidden;
  /* background-repeat: no-repeat; */
  /* border: 2px black solid; */

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
    > button {
      background-color: #dc2529;
      margin: 0 25vw;
      font-size: medium;
      color: white;
      margin-top: 2pc;
      width: fit-content;
      border: 1px solid white;
      padding: 0.3pc 2pc;
      border-radius: 5pc;
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
      > button {
        margin: 0 10vw;
        margin-top: 0pc;
        font-size: small;
        padding: 0.3pc 1pc;
      }
    }
  }
`;
