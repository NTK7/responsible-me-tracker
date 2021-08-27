import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Menu,
  Radio,
  MenuItem,
  RadioGroup,
} from "@material-ui/core";
import { useState } from "react";
import styled from "styled-components";
import Processing from "../components/Processing/Processing";
import Result from "../components/Result/Result";
import { db } from "../firebase";
import { Fade } from "react-reveal";
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
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const allDistricts = [
    "Jaffna",
    "Kilinochchi",
    "Mannar",
    "Mullaitivu",
    "Vavuniya",
    "Puttalam",
    "Kurunegala",
    "Gampaha",
    "Colombo",
    "Kalutara",
    "Anuradhapura",
    "Polonnaruwa",
    "Matara",
    "Kandy",
    "Nuwara Eliya",
    "Kegalle",
    "Ratnapura",
    "Trincomalee",
    "Batticaloa",
    "Ampara",
    "Badulla",
    "Monaragala",
    "Hambantota",
    "Matale",
    "Galle",
  ];

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
        percentage: Math.round(totalWeight_ * 10000) / 100,
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
    <Fade>
      <Container className="container">
        <h2>Responsible Me Tracker</h2>

        {!displayResult ? (
          <section>
            <p>
              <strong>Fill out the form below to get your score!</strong>
            </p>
            <form onSubmit={onHandleSubmit}>
              {/* District */}
              <FormControl
                color="secondary"
                component="fieldset"
                className="form-control">
                <FormLabel component="legend"> District </FormLabel>
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  color="secondary"
                  variant="contained"
                  style={{ width: "fit-content", margin: "0" }}
                  onClick={handleClick}>
                  {district ? district : "Select District"}
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}>
                  {allDistricts.map((district, key) => (
                    <MenuItem
                      key={key}
                      onClick={() => {
                        handleClose();
                        setDistrict(district);
                      }}>
                      {district}
                    </MenuItem>
                  ))}
                </Menu>
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
          <Result percentage={totalWeight} age={age} />
        )}
      </Container>
    </Fade>
  );
};

export default App;

const Container = styled.div`
  padding: 2pc;
  /* border: 1px solid red; */
  > h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #f21313;
    padding: 1pc;
    border-radius: 1pc;
    /* text-transform: uppercase; */
    /* font-weight: bold; */
    font-size: 1.8rem;
    background-color: #fff2f2;
  }
  > section {
    padding: 3pc 0;
    border-radius: 1pc;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: whitesmoke;
    /* border: 1px red solid; */
    > p {
      text-align: center;
      color: grey;
      padding: 0 2pc;
    }
    /* input {
        background-color: #fff2f2;
      } */
    > form {
      width: 40vw;
      /* border: 1px blue solid; */
      display: flex;
      flex-direction: column;
      legend {
        line-height: 1.5pc;
      }
      .form-control {
        background-color: whitesmoke;
        margin: 1pc 0;
      }
      button {
        font-size: medium;
        margin: 1pc 0;
      }
    }
  }
  @media screen and (max-width: 1000px) {
    > section {
      padding: 2pc 0;
      > form {
        width: 50vw;
      }
    }
  }
  @media screen and (max-width: 500px) {
    margin: 0 !important;
    padding: 0 !important;
    > h2 {
      font-size: larger;
      border-radius: 0pc;
      font-weight: bold;
      border-bottom: 1px solid red;
      margin-bottom: 0;
    }
    > section {
      border-radius: 0pc;
      padding: 1pc 0;
      > p {
        font-weight: lighter;
        font-size: small;
      }
      > form {
        width: 80vw;
      }
    }
  }
`;
