import { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import styled from "styled-components";
import { db } from "../../firebase";
import Processing from "../Processing/Processing";
import DailyCount from "./LineGraphs/DailyCount/DailyCount";
import CumulativeCount from "./LineGraphs/CumulativeCount/CumulativeCount";
import AgeComposition from "./BarCharts/AgeComposition/AgeComposition";

const Visualization = () => {
  // TODO: 100% responsible people (daily count) - Line Graph
  // TODO: 100% responsible people (cumulative count) - Line Graph
  // TODO: Age Composition - Bar Graph
  // TODO: Districts - Bar Graph

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    await db
      .collection("users")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setData(snapshot.docs.map((doc) => doc.data()));
        setLoading(false);
      });
  };

  useEffect(() => {
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
            <section>
              <DailyCount dbData={data} />
              <CumulativeCount dbData={data} />
              <AgeComposition dbData={data} />
            </section>
          </main>
        )}
      </Container>
    </Fade>
  );
};

export default Visualization;

const Container = styled.div`
  padding: 2pc;
  /* scroll-snap-align: start; */
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
      height: 50vh;
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
