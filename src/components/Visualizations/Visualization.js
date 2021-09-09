import { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import styled from "styled-components";
import { db } from "../../firebase";
import Processing from "../Processing/Processing";
import DailyCount from "./LineGraphs/DailyCount/DailyCount";
import CumulativeCount from "./LineGraphs/CumulativeCount/CumulativeCount";
import AgeComposition from "./BarCharts/AgeComposition/AgeComposition";
import Districts from "./BarCharts/Districts/Districts";

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
              <p className="mobileView_text">
                Please view on a desktop for a clear view with the district bar
                graph.
              </p>
              <DailyCount dbData={data} />
              <CumulativeCount dbData={data} />
              <AgeComposition dbData={data} />
              <Districts dbData={data} />
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
  background-color: #1c1c1c;
  color: white;
  > h1 {
    padding: 1pc;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.8rem;
    text-align: center;
    color: white;
    background-color: #de3538;
  }

  .mobileView_text {
    display: none;
    text-align: center;
    margin: 2pc 0.5pc 0 0.5pc;
    font-size: small !important;
  }

  @media screen and (max-width: 1000px) {
    > h1 {
      font-size: 1.5rem;
      margin: -1pc;
    }
  }
  @media screen and (max-width: 500px) {
    p {
      line-height: 1pc;
      font-size: large;
    }
    > h1 {
      background-color: transparent;
      color: #de3538;
    }
    .mobileView_text {
      display: block;
    }
  }
`;
