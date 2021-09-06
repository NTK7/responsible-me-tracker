import { useEffect, useState } from "react";
import styled from "styled-components";
import Processing from "../components/Processing/Processing";
import Result from "../components/Result/Result";
import { db } from "../firebase";
import { Fade } from "react-reveal";
import { WEIGHTS } from "../utils/conversions";
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
  const [anchorEl, setAnchorEl] = useState(null);

  const [totalWeight, setTotalWeight] = useState(null);
  const [displayResult, setDisplayResult] = useState(false);
  const [processing, setProcessing] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    console.log(district);
  }, [district]);

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
        {!displayResult ? (
          <form onSubmit={onHandleSubmit}>
            <HomeBanner />
            <FormInfo />
            <SelectDistrict
              handleClick={handleClick}
              handleClose={handleClose}
              anchorEl={anchorEl}
              district={district}
              setDistrict={setDistrict}
            />
            <AgeGroup age={age} setAge={setAge} />
            <Vaccination
              vaccination={vaccination}
              setVaccination={setVaccination}
            />
            <WorkPlan workPlan={workPlan} setWorkPlan={setWorkPlan} />
            <PublicVisiting
              publicVisiting={publicVisiting}
              setPublicVisiting={setPublicVisiting}
            />
            <FriendVisiting
              friendVisiting={friendVisiting}
              setFriendVisiting={setFriendVisiting}
            />
            <UseOfMask useOfMask={useOfMask} setUseOfMask={setUseOfMask} />
          </form>
        ) : processing ? (
          <Processing />
        ) : (
          <Result
            percentage={totalWeight}
            age={age}
            vaccination={vaccination}
            workPlan={workPlan}
            publicVisiting={publicVisiting}
            friendVisiting={friendVisiting}
            useOfMask={useOfMask}
          />
        )}
      </Container>
    </Fade>
  );
};

export default App;

const Container = styled.div`
  scroll-snap-type: mandatory;
`;
