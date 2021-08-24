import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Processing from "../components/Processing/Processing";
import Result from "../components/Result/Result";
import { db } from "../firebase";
import { WEIGHTS } from "../utils/conversions";

const App = () => {
  const [age, setAge] = useState(null);
  const [district, setDistrict] = useState("");
  const [vaccination, setVaccination] = useState(null);
  const [workPlan, setWorkPlan] = useState(null);
  const [publicVisiting, setPublicVisiting] = useState(null);
  const [friendVisiting, setFriendVisiting] = useState(null);
  const [useOfMask, setUseOfMask] = useState(null);
  const [totalWeight, setTotalWeight] = useState(null);

  const [displayResult, setDisplayResult] = useState(false);
  const [processing, setProcessing] = useState(false);

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    setDisplayResult(true);
    setProcessing(true);

    let totalWeight_ =
      WEIGHTS.vaccination[vaccination] +
      WEIGHTS.workPlan[workPlan] +
      WEIGHTS.public[publicVisiting] +
      WEIGHTS.friends[friendVisiting] +
      WEIGHTS.mask[useOfMask];
    setTotalWeight(totalWeight_);
    await db
      .collection("users")
      .add({
        age: age,
        district: district,
        vaccination: vaccination,
        workPlan: workPlan,
        publicVisiting: publicVisiting,
        friendVisiting: friendVisiting,
        useOfMask: useOfMask,
        totalWeight: totalWeight_,
        percentage: Math.round(Math.round(totalWeight_ * 100)),
      })
      .then((res) => {
        setProcessing(false);
      })
      .catch((error) => {
        console.error(error);
        setDisplayResult(false);
        setProcessing(false);
        alert("Something went wrong");
      });
  };
  return (
    <Container className="container mt-3">
      <h2>Responsible Me Tracker</h2>

      {!displayResult ? (
        <section>
          <form onSubmit={onHandleSubmit}>
            {/* District */}
            <FormControl
              color="secondary"
              component="fieldset"
              className="form-control">
              <TextField
                label="Enter your district"
                required={true}
                color="secondary"
                variant="filled"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="text-field"
              />
            </FormControl>
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
                  value="avoided"
                  control={<Radio required={true} />}
                  label="Avoided"
                />
                <FormControlLabel
                  value="sometimes"
                  control={<Radio required={true} />}
                  label="Sometimes"
                />
                {/* <FormControlLabel
                  value="Both"
                  control={<Radio required={true} />}
                  label="Both"
                /> */}
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
                  value="avoided"
                  control={<Radio required={true} />}
                  label="Avoided"
                />
                <FormControlLabel
                  value="sometimes"
                  control={<Radio required={true} />}
                  label="Sometimes"
                />
                {/* <FormControlLabel
                  value="Both"
                  control={<Radio required={true} />}
                  label="Both"
                /> */}
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
                  value="always"
                  control={<Radio required={true} />}
                  label="Always"
                />
                <FormControlLabel
                  value="sometimes"
                  control={<Radio required={true} />}
                  label="Sometimes"
                />
                {/* <FormControlLabel
                  value="Both"
                  control={<Radio required={true} />}
                  label="Both"
                /> */}
              </RadioGroup>
            </FormControl>

            <Button variant="contained" color="secondary" type="submit">
              Submit
            </Button>
          </form>
        </section>
      ) : processing ? (
        <Processing />
      ) : (
        <Result percentage={totalWeight} />
      )}
    </Container>
  );
};

export default App;

const Container = styled.div`
  margin-bottom: 3pc;
  > h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f21313;
    padding: 1pc;
    text-transform: uppercase;
    /* font-weight: bold; */
    font-size: 1.8rem;
    margin-top: 2pc;
    background-color: #fff2f2;
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
