import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components";

const DailyCount = ({ dbData }) => {
  const [graphLabel, setGraphLabel] = useState([]);
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    dbData.length !== 0 && createGraphData();
  }, []);

  const createGraphData = async () => {
    let tempLabel = [];
    let tempData = [];
    let startDate = dbData[0].timestamp.toDate().toLocaleDateString();
    tempLabel.push(startDate);
    let dataCoutner = 0;

    await dbData.forEach((record) => {
      let date_ = record.timestamp.toDate().toLocaleDateString();
      if (date_ === startDate) {
        dataCoutner++;
      } else {
        tempLabel.push(date_);
        tempData.push(dataCoutner);
        dataCoutner = 0;
        startDate = date_;
      }
    });

    setGraphLabel(tempLabel);
    setGraphData(tempData);
  };

  const data = {
    labels: ["Sep 14th", "Sep 14th"],
    datasets: [
      {
        label: "# No. of responsible 100%",
        data: [12, 5],
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
