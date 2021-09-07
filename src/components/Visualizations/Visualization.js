import {
  ageGroupResult,
  friendsResult,
  maskResult,
  publicResult,
  vaccinationsResult,
  workPlanResult,
} from "../../utils/chartFunctions";
import { useEffect, useState } from "react";
import { Fade, Zoom } from "react-reveal";
import styled from "styled-components";
import { db } from "../../firebase";
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

  const reset = () => {
    setRecordCount(0);
    ageGroupResult(null, true);
    maskResult(null, true);
    friendsResult(null, true);
    publicResult(null, true);
    workPlanResult(null, true);
    vaccinationsResult(null, true);
  };

  const fetchData = async () => {
    setLoading(true);
    await db.collection("users").onSnapshot((snapshot) => {
      reset();
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
    reset();
    fetchData();
  }, []);

  return (
    <Fade>
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
              <Zoom>
                <PieChart
                  title="Age Group Rate"
                  labels={["< 18", "19-29", "30-39", "40-49", "50-59", "60+"]}
                  data_={ageGroupCount}
                />
              </Zoom>
              <Zoom>
                <DoughnutChart
                  title="Friend Visiting Rate"
                  labels={["Avoided", "Sometimes"]}
                  data_={friendVisitingCount}
                />
              </Zoom>
              <Zoom>
                <PieChart
                  title="Vaccination Rate"
                  labels={["Single dose", "Fully Vaccinated", "Not Vaccinated"]}
                  data_={vaccinationCount}
                />
              </Zoom>
              <Zoom>
                <DoughnutChart
                  title="Use of Masks Rate"
                  labels={["Avoided", "Sometimes"]}
                  data_={maskUseCount}
                />
              </Zoom>
              <Zoom>
                <PieChart
                  title="Public Visiting Rate"
                  labels={["Avoided", "Sometimes"]}
                  data_={publicCount}
                />
              </Zoom>
              <Zoom>
                <DoughnutChart
                  title="Work Plan Rate"
                  labels={["WFH", "Visiting to office", "Both"]}
                  data_={workPlanCount}
                />
              </Zoom>
            </section>
          </main>
        )}
      </Container>
    </Fade>
  );
};

export default Visualization;

const Container = styled.div`
  margin: 2pc;
  > h1 {
    padding: 1pc;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.8rem;
    text-align: center;
    color: white;
    background-color: #de3538;
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
  @media screen and (max-width: 1000px) {
    margin: 3pc 0pc;
    > h1 {
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 500px) {
    margin: 1pc 0pc;
    p {
      line-height: 1pc;
      font-size: large;
    }
    > h1 {
      font-size: large;
    }
  }
`;
