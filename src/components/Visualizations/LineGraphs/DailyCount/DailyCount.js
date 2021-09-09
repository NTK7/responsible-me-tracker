import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components";

const DailyCount = ({ dbData }) => {
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
      console.log(dates);
      const uniqueDates = dates.filter((v, i, a) => a.indexOf(v) === i);
      getCountOfEachDate(uniqueDates);
      console.log(uniqueDates);
    }
  }, [dates]);

  const getCountOfEachDate = (uniqueDates) => {
    uniqueDates.forEach((date) => {
      let count = 0;
      dbData.forEach((record) => {
        if (
          record.timestamp.toDate().toLocaleDateString() === date &&
          record.percentage === 100
        ) {
          count++;
        }
      });
      setGraphData((graphData) => [...graphData, count]);
      setGraphLabel((graphLabel) => [...graphLabel, date]);
    });
  };

  const data = {
    labels: graphLabel,
    datasets: [
      {
        label: "# No. of responsible 100%",
        data: graphData,
        fill: true,
        backgroundColor: "rgba(204, 16, 52, 0.5)",
        borderColor: "#CC1034",
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
      <Line data={data} options={options} />
    </Container>
  );
};

export default DailyCount;

const Container = styled.div`
  scroll-snap-align: start;
  /* border: 1px red solid; */
  width: 100%;
`;
