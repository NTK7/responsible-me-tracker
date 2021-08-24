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
        console.log(doc.data());
        setRecordCount((recordCount) => recordCount + 1);
      });
    });
  };
  useEffect(() => {
    setRecordCount(0);
    fetchData();
    setLoading(false);
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
              data_={[5, 2, 4, 9, 3, 6]}
            />
            <DoughnutChart
              title="Friend Visiting"
              labels={["Avoided", "Sometimes"]}
              data_={[50, 23]}
            />
            <PieChart
              title="Vaccination"
              labels={["Single dose", "Fully Vaccinated", "Not Vaccinated"]}
              data_={[20, 50, 65]}
            />
            <DoughnutChart
              title="Use of Masks"
              labels={["Avoided", "Sometimes"]}
              data_={[90, 23]}
            />
            <PieChart
              title="Public Visiting"
              labels={["Avoided", "Sometimes"]}
              data_={[12, 23]}
            />

            <DoughnutChart
              title="Work Plan"
              labels={["WFH", "Visiting to office", "Both"]}
              data_={[90, 23, 63]}
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
