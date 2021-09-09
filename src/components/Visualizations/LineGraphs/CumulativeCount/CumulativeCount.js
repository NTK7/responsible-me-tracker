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
        backgroundColor: "rgb(132, 214, 122)",
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
        radius: 0,
      },
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          type: "time",
          time: {
            format: "MM/DD/YY",
            tooltipFormat: "ll",
          },
        },
      ],
      yAxes: [
        {
         ticks: {
            beginAtZero: true,
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
  margin: 3pc 0;
  height: 50vh;
  width: 100%;
`;
