import styled from "styled-components";
import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";

const AgeComposition = ({ dbData }) => {
  const [data_, setData_] = useState([]);
  let less18 = 0;
  let between18and29 = 0;
  let between30and39 = 0;
  let between40and49 = 0;
  let between50and59 = 0;
  let more60 = 0;

  useEffect(() => {
    less18 = 0;
    between18and29 = 0;
    between30and39 = 0;
    between40and49 = 0;
    between50and59 = 0;
    more60 = 0;
    if (dbData.length !== 0) {
      collectAgeGroupCount();
      generateArray();
    }
  }, [dbData]);

  const generateArray = () => {
    setData_((data_) => [...data_, less18]);
    setData_((data_) => [...data_, between18and29]);
    setData_((data_) => [...data_, between30and39]);
    setData_((data_) => [...data_, between40and49]);
    setData_((data_) => [...data_, between50and59]);
    setData_((data_) => [...data_, more60]);
  };

  const collectAgeGroupCount = async () => {
    await dbData.map((record) => {
      if (record.percentage === 100) {
        switch (record.age) {
          case "0-17":
            less18++;
            break;
          case "19-29":
            between18and29++;
            break;
          case "30-39":
            between30and39++;
            break;
          case "40-49":
            between40and49++;
            break;
          case "50-59":
            between50and59++;
            break;
          case "60+":
            more60++;
            break;
          default:
            break;
        }
      }
    });
  };

  const data = {
    labels: ["<18", "19-29", "30-39", "40-49", "50-59", "60+"],
    datasets: [
      {
        label: "Age Composition",
        data: data_,
        backgroundColor: "rgba(221, 0, 4, 0.6)",
        borderColor: "#CC1034",
        borderWidth: 2,
        hoverBorderWidth: 5,
      },
    ],
  };

  const options = {
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          ticks: {
            fontColor: "white",
          },
          gridLines: {
            color: "rgb(221, 0, 4, 0.5)",
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
            color: "rgb(221, 0, 4, 0.5)",
          },
        },
      ],
    },
  };
  return (
    <Container>
      <p>Age Composition of 100% responsible citizen</p>
      <Bar data={data} options={options} />
    </Container>
  );
};

export default AgeComposition;

const Container = styled.div`
  margin: 5pc 0;
  color: white;
  width: 100%;

  @media screen and (max-width: 500px) {
    margin: 3pc 0pc !important;
    p {
      font-size: small !important;
    }
  }
`;
