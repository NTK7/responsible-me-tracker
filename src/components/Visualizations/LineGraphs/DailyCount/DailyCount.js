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

    await dbData.forEach((record, index) => {
      let date_ = record.timestamp.toDate().toLocaleDateString();
      if (date_ === startDate && index !== dbData.length - 1) {
        dataCoutner++;
      } else {
        {
          index !== dbData.length - 1 && tempLabel.push(date_);
        }
        tempData.push(dataCoutner);
        dataCoutner = 2;
        startDate = record.timestamp.toDate().toLocaleDateString();
      }
    });

    setGraphLabel(tempLabel);
    setGraphData(tempData);
  };

  useEffect(() => {
    console.log(graphLabel);
    console.log(graphData);
  }, [graphData]);

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
