import { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../../firebase";
import {
  ageGroupResult,
  friendsResult,
  maskResult,
  publicResult,
  vaccinationsResult,
  workPlanResult,
} from "../../utils/chartFunctions";
import Processing from "../Processing/Processing";
import DoughnutChart from "./DoughnutChart/DoughnutChart";
import PieChart from "./PieChart/PieChart";

const Visualization = () => {
  const [loading, setLoading] = useState(false);
  const [recordCount, setRecordCount] = useState(0);
  const [ageGroupCount, setAgeGroupCount] = useState([]);
  const [maskUseCount, setMaskUseCount] = useState([]);
  const [friendVisitingCount, setFriendVisitingCount] = useState([]);
  const [publicCount, setPublicCount] = useState([]);
  const [workPlanCount, setWorkPlanCount] = useState([]);
  const [vaccinationCount, setVaccinationCount] = useState([]);

  useEffect(() => {
    // This useEffect will execute when ever the page refreshes so that, it can reset to original state for graph visualization
    ageGroupResult(null, true);
    maskResult(null, true);
    friendsResult(null, true);
    publicResult(null, true);
    workPlanResult(null, true);
    vaccinationsResult(null, true);
  }, []);

  const fetchData = async () => {
    setLoading(true);
    await db.collection("users").onSnapshot((snapshot) => {
      snapshot.docs.forEach((doc) => {
        setAgeGroupCount(ageGroupResult(doc.data().age, false));
        setMaskUseCount(maskResult(doc.data().useOfMask, false));
        setFriendVisitingCount(friendsResult(doc.data().friendVisiting, false));
        setPublicCount(publicResult(doc.data().publicVisiting, false));
        setWorkPlanCount(workPlanResult(doc.data().workPlan, false));
        setVaccinationCount(vaccinationsResult(doc.data().vaccination, false));
        setRecordCount((recordCount) => recordCount + 1);
      });
      setLoading(false);
    });
  };
  useEffect(() => {
    setRecordCount(0);
    fetchData();
  }, []);

  return (
    <Container>
      <h1>Live Statistics</h1>
      {loading ? (
        <Processing />
      ) : (
        <main>
          <div>
            <p>Total Submissions</p>
            <h4>{recordCount}</h4>
          </div>
          <section>
            <PieChart
              title="Age Group"
              labels={["< 18", "19-29", "30-39", "40-49", "50-59", "60+"]}
              data_={ageGroupCount}
            />
            <DoughnutChart
              title="Friend Visiting"
              labels={["Avoided", "Sometimes"]}
              data_={friendVisitingCount}
            />
            <PieChart
              title="Vaccination"
              labels={["Single dose", "Fully Vaccinated", "Not Vaccinated"]}
              data_={vaccinationCount}
            />
            <DoughnutChart
              title="Use of Masks"
              labels={["Avoided", "Sometimes"]}
              data_={maskUseCount}
            />
            <PieChart
              title="Public Visiting"
              labels={["Avoided", "Sometimes"]}
              data_={publicCount}
            />
            <DoughnutChart
              title="Work Plan"
              labels={["WFH", "Visiting to office", "Both"]}
              data_={workPlanCount}
            />
          </section>
        </main>
      )}
    </Container>
  );
};

export default Visualization;

const Container = styled.div`
  /* border: 1px red solid; */
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
  margin: 4pc 2pc;
  > h1 {
    padding: 1pc;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.8rem;
    text-align: center;
    margin-top: 2pc;
    background-color: #fff2f2;
  }
  > main {
    > div {
      padding: 2pc;
      > p,
      > h4 {
        line-height: 1.5pc;
        text-align: center;
        font-size: larger;
      }
      > h4 {
        font-size: 2rem;
        font-weight: bold;
        color: red;
      }
    }
    > section {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    }
  }
`;
