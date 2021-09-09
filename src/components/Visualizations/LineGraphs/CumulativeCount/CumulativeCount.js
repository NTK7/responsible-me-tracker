import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components";

const CumulativeCount = ({ dbData }) => {
  const [graphLabel, setGraphLabel] = useState([]);
  const [graphData, setGraphData] = useState([]);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    dbData.length !== 0 && collectDates();
  }, []);

  const collectDates = async () => {
    await dbData.forEach((record) => {
      setDates((dates) => [
        ...dates,
        record.timestamp.toDate().toLocaleDateString(),
      ]);
    });
  };

  useEffect(() => {
    if (dbData.length !== 0) {
      const uniqueDates = dates.filter((v, i, a) => a.indexOf(v) === i);
      getCumulativeCount(uniqueDates);
    }
  }, [dates]);

  const getCumulativeCount = (uniqueDates) => {
    let count = 0;
    uniqueDates.forEach((date) => {
      dbData.forEach((record) => {
        if (
          record.timestamp.toDate().toLocaleDateString() === date &&
          record.percentage === 100
        ) {
          count++;
        }
      });
      let temp = count;
      setGraphData((graphData) => [...graphData, temp]);
      setGraphLabel((graphLabel) => [...graphLabel, date]);
    });
  };

  const data = {
    labels: graphLabel,
    datasets: [
      {
        label: "100% responsible citizen",
        data: graphData,
        fill: true,
        backgroundColor: "rgb(62, 214, 37,0.6)",
        borderColor: "#26cc10",
      },
    ],
  };

  const options = {
    legend: {
      display: false,
    },
    elements: {
      point: {
        pointRadius: 5,
        pointHoverRadius: 5,
      },
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          ticks: {
            fontColor: "white",
          },
          gridLines: {
            color: "rgb(62, 214, 37,0.2)",
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: "white",
          },
          gridLines: {
            color: "rgb(62, 214, 37,0.2)",
          },
        },
      ],
    },
  };
  return (
    <Container>
      <p>Cumulative Count of 100% responsible citizen</p>
      <Line data={data} options={options} />
    </Container>
  );
};

export default CumulativeCount;

const Container = styled.div`
  margin: 5pc 0;
  color: white;
  height: 50vh;
  width: 100%;

  @media screen and (max-width: 500px) {
    margin: 3pc 0pc !important;
    height: 200px;

    p {
      font-size: small !important;
    }
  }
`;
