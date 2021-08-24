import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import { useState } from "react";
import styled from "styled-components";

const App = () => {
  const [age, setAge] = useState(null);
  const [district, setDistrict] = useState("");
  const [vaccination, setVaccination] = useState(null);
  const [workPlan, setWorkPlan] = useState(null);
  const [publicVisiting, setPublicVisiting] = useState(null);
  const [friendVisiting, setFriendVisiting] = useState(null);
  const [useOfMask, setUseOfMask] = useState(null);

  const [displayResult, setDisplayResult] = useState(false);
  const [processing, setProcessing] = useState(false);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setDisplayResult(true);
    setProcessing(true);
    // we do all the logic and database work here

    setTimeout(() => {
      setProcessing(false);
    }, 2000);
  };
  return (
    <Container className="container mt-3">
      <h2>Responsible Me Tracker</h2>

      {!displayResult ? (
        <section>
          <form onSubmit={onHandleSubmit}>
            {/* age group */}
            <FormControl
              color="secondary"
              component="fieldset"
              className="form-control">
              <FormLabel component="legend">Age Group</FormLabel>
              <RadioGroup
                aria-label="ageGroup"
                name="ageGroup"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required>
                <FormControlLabel
                  value="0-17"
                  control={<Radio />}
                  label="Below 18"
                />
                <FormControlLabel
                  value="19-29"
                  control={<Radio />}
                  label="19-29"
                />
                <FormControlLabel
                  value="30-39"
                  control={<Radio />}
                  label="30-39"
                />
                <FormControlLabel
                  value="40-49"
                  control={<Radio />}
                  label="40-49"
                />
                <FormControlLabel
                  value="50-59"
                  control={<Radio />}
                  label="50-59"
                />
                <FormControlLabel value="60+" control={<Radio />} label="60+" />
              </RadioGroup>
            </FormControl>

            {/* District */}
            <FormControl
              color="secondary"
              component="fieldset"
              className="form-control">
              <TextField
                label="District"
                color="secondary"
                variant="filled"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="text-field"
              />
            </FormControl>

            {/* Vaccination */}
            <FormControl
              color="secondary"
              component="fieldset"
              className="form-control">
              <FormLabel component="legend">Vaccination</FormLabel>
              <RadioGroup
                aria-label="vaccination"
                name="vaccination"
                value={vaccination}
                onChange={(e) => setVaccination(e.target.value)}
                required>
                <FormControlLabel
                  value="SingleDose"
                  control={<Radio />}
                  label="Single Dose"
                />
                <FormControlLabel
                  value="FullyVaccinated"
                  control={<Radio />}
                  label="Fully Vaccinated"
                />
                <FormControlLabel
                  value="NotVaccinated"
                  control={<Radio />}
                  label="Not Vaccinated"
                />
              </RadioGroup>
            </FormControl>

            {/* workPlan */}
            <FormControl
              color="secondary"
              component="fieldset"
              className="form-control">
              <FormLabel component="legend">
                Work plan for next 2 weeks
              </FormLabel>
              <RadioGroup
                aria-label="workPlan"
                name="workPlan"
                value={workPlan}
                onChange={(e) => setWorkPlan(e.target.value)}
                required>
                <FormControlLabel
                  value="WFT"
                  control={<Radio />}
                  label="Work from home"
                />
                <FormControlLabel
                  value="VisitingToOffice"
                  control={<Radio />}
                  label="Visiting to office"
                />
                <FormControlLabel
                  value="Both"
                  control={<Radio />}
                  label="Both"
                />
              </RadioGroup>
            </FormControl>

            {/* publicVisiting */}
            <FormControl
              color="secondary"
              component="fieldset"
              className="form-control">
              <FormLabel component="legend">
                Visiting to public places including shops
              </FormLabel>
              <RadioGroup
                aria-label="publicVisiting"
                name="publicVisiting"
                value={publicVisiting}
                onChange={(e) => setPublicVisiting(e.target.value)}
                required>
                <FormControlLabel
                  value="Avoided"
                  control={<Radio />}
                  label="Avoided"
                />
                <FormControlLabel
                  value="Sometimes"
                  control={<Radio />}
                  label="Sometimes"
                />
                <FormControlLabel
                  value="Both"
                  control={<Radio />}
                  label="Both"
                />
              </RadioGroup>
            </FormControl>

            {/* friendVisiting */}
            <FormControl
              color="secondary"
              component="fieldset"
              className="form-control">
              <FormLabel component="legend">
                Visiting friends / relatives during next 2 weeks
              </FormLabel>
              <RadioGroup
                aria-label="friendVisiting"
                name="friendVisiting"
                value={friendVisiting}
                onChange={(e) => setFriendVisiting(e.target.value)}
                required>
                <FormControlLabel
                  value="Avoided"
                  control={<Radio />}
                  label="Avoided"
                />
                <FormControlLabel
                  value="Sometimes"
                  control={<Radio />}
                  label="Sometimes"
                />
                <FormControlLabel
                  value="Both"
                  control={<Radio />}
                  label="Both"
                />
              </RadioGroup>
            </FormControl>

            {/* useOfMask */}
            <FormControl
              color="secondary"
              component="fieldset"
              className="form-control">
              <FormLabel component="legend">
                Wearing Mask out side home
              </FormLabel>
              <RadioGroup
                aria-label="useOfMask"
                name="useOfMask"
                value={useOfMask}
                onChange={(e) => setUseOfMask(e.target.value)}
                required>
                <FormControlLabel
                  value="Avoided"
                  control={<Radio />}
                  label="Avoided"
                />
                <FormControlLabel
                  value="Sometimes"
                  control={<Radio />}
                  label="Sometimes"
                />
                <FormControlLabel
                  value="Both"
                  control={<Radio />}
                  label="Both"
                />
              </RadioGroup>
            </FormControl>

            <Button variant="contained" color="secondary" type="submit">
              Submit
            </Button>
          </form>
        </section>
      ) : processing ? (
        <p>Processing the result please hold on...</p>
      ) : (
        <section>Displaying result</section>
      )}
    </Container>
  );
};

export default App;

const Container = styled.div`
  > h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f21313;
  }
  > section {
    padding: 3pc 1pc;

    > form {
      /* border: 1px red solid; */
      display: flex;
      flex-direction: column;
      > button {
        width: 20%;
      }
      .text-field {
        width: 40%;
      }
      .form-control {
        margin: 1pc 0;
      }
    }
  }
`;
