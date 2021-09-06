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
import { allDistricts } from "../utils/constants";
import HomeBanner from "../components/update/HomeBanner/HomeBanner";
import FormInfo from "../components/update/FormInfo/FormInfo";
import SelectDistrict from "../components/update/SelectDistrict/SelectDistrict";
import AgeGroup from "../components/update/AgeGroup/AgeGroup";
import Vaccination from "../components/update/Vaccination/Vaccination";
import WorkPlan from "../components/update/WorkPlan/WorkPlan";
import PublicVisiting from "../components/update/PublicVisiting/PublicVisiting";
import FriendVisiting from "../components/update/FriendVisiting/FriendVisiting";
import UseOfMask from "../components/update/UseOfMask/UseOfMask";

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
      <Container>
        <HomeBanner />
        <FormInfo />
        <SelectDistrict />
        <AgeGroup />
        <Vaccination />
        <WorkPlan />
        <PublicVisiting />
        <FriendVisiting />
        <UseOfMask />
      </Container>
    </Fade>
  );
};

export default App;

const Container = styled.div`
  scroll-snap-type: mandatory; 
  /* padding: 2pc;
  > h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1pc;
    font-weight: bold;
    border-radius: 1pc;
    font-size: 2rem;
    > img {
      object-fit: contain;
      height: 40px;
    }
  }
  > section {
    padding: 3pc 0;
    border-radius: 1pc;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: whitesmoke;
    > p {
      text-align: center;
      color: grey;
      padding: 0 2pc;
    }
    > form {
      width: 40vw;
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
      text-align: center;
      padding: 1pc 0;
      > img {
        height: 20px;
      }
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
  } */
`;
