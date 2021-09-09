import styled from "styled-components";
import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { initialStateDistrictGraph } from "../../../../utils/constants";

const Districts = ({ dbData }) => {
  let districtData = initialStateDistrictGraph;
  const [data_, setData_] = useState([]);

  useEffect(() => {
    districtData = initialStateDistrictGraph;
    setData_([]);
    if (dbData.length !== 0) {
      collectDistrictData();
      generateArray();
    }
  }, []);

  const generateArray = () => {
    setData_((data_) => [...data_, districtData.Ampara]);
    setData_((data_) => [...data_, districtData.Anuradhapura]);
    setData_((data_) => [...data_, districtData.Badulla]);
    setData_((data_) => [...data_, districtData.Batticaloa]);
    setData_((data_) => [...data_, districtData.Colombo]);
    setData_((data_) => [...data_, districtData.Galle]);
    setData_((data_) => [...data_, districtData.Gampaha]);
    setData_((data_) => [...data_, districtData.Hambantota]);
    setData_((data_) => [...data_, districtData.Jaffna]);
    setData_((data_) => [...data_, districtData.Kalutara]);
    setData_((data_) => [...data_, districtData.Kandy]);
    setData_((data_) => [...data_, districtData.Kegalle]);
    setData_((data_) => [...data_, districtData.Kilinochchi]);
    setData_((data_) => [...data_, districtData.Kurunegala]);
    setData_((data_) => [...data_, districtData.Mannar]);
    setData_((data_) => [...data_, districtData.Matale]);
    setData_((data_) => [...data_, districtData.Matara]);
    setData_((data_) => [...data_, districtData.Monaragala]);
    setData_((data_) => [...data_, districtData.Mullaitivu]);
    setData_((data_) => [...data_, districtData.NuwaraEliya]);
    setData_((data_) => [...data_, districtData.Polonnaruwa]);
    setData_((data_) => [...data_, districtData.Puttalam]);
    setData_((data_) => [...data_, districtData.Ratnapura]);
    setData_((data_) => [...data_, districtData.Trincomalee]);
    setData_((data_) => [...data_, districtData.Vavuniya]);
  };

  const collectDistrictData = async () => {
    await dbData.map((record) => {
      if (record.percentage === 100) {
        switch (record.district) {
          case "Ampara":
            districtData.Ampara++;
            break;
          case "Anuradhapura":
            districtData.Anuradhapura++;
            break;
          case "Badulla":
            districtData.Badulla++;
            break;
          case "Batticaloa":
            districtData.Batticaloa++;
            break;
          case "Colombo":
            districtData.Colombo++;
            break;
          case "Galle":
            districtData.Galle++;
            break;
          case "Gampaha":
            districtData.Gampaha++;
            break;
          case "Hambantota":
            districtData.Hambantota++;
            break;
          case "Jaffna":
            districtData.Jaffna++;
            break;
          case "Kalutara":
            districtData.Kalutara++;
            break;
          case "Kandy":
            districtData.Kandy++;
            break;
          case "Kegalle":
            districtData.Kegalle++;
            break;
          case "Kilinochchi":
            districtData.Kilinochchi++;
            break;
          case "Kurunegala":
            districtData.Kurunegala++;
            break;
          case "Mannar":
            districtData.Mannar++;
            break;
          case "Matale":
            districtData.Matale++;
            break;
          case "Matara":
            districtData.Matara++;
            break;
          case "Moneragala":
            districtData.Moneragala++;
            break;
          case "Mullaitivu":
            districtData.Mullaitivu++;
            break;
          case "Nuwara Eliya":
            districtData.NuwaraEliya++;
            break;
          case "Polonnaruwa":
            districtData.Polonnaruwa++;
            break;
          case "Puttalam":
            districtData.Puttalam++;
            break;
          case "Ratnapura":
            districtData.Ratnapura++;
            break;
          case "Trincomalee":
            districtData.Trincomalee++;
            break;
          case "Vavuniya":
            districtData.Vavuniya++;
            break;
          default:
            break;
        }
      }
    });
  };

  const data = {
    labels: [
      "Ampara",
      "Anuradhapura",
      "Badulla",
      "Batticaloa",
      "Colombo",
      "Galle",
      "Gampaha",
      "Hambantota",
      "Jaffna",
      "Kalutara",
      "Kandy",
      "Kegalle",
      "Kilinochchi",
      "Kurunegala",
      "Mannar",
      "Matale",
      "Matara",
      "Moneragala",
      "Mullaitivu",
      "Nuwara Eliya",
      "Polonnaruwa",
      "Puttalam",
      "Ratnapura",
      "Trincomalee",
      "Vavuniya",
    ],
    datasets: [
      {
        label: "District Counts",
        data: data_,
        backgroundColor: "rgb(13, 91, 225, 0.6)",
        borderColor: "#3556dd",
        borderWidth: 2,
        hoverBorderWidth: 3,
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
            color: "rgb(13, 91, 225, 0.5)",
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
            color: "rgb(13, 91, 225, 0.5)",
          },
        },
      ],
    },
  };
  return (
    <Container>
      <p>Districts of 100% responsible citizen</p>
      <Bar data={data} options={options} />
    </Container>
  );
};

export default Districts;

const Container = styled.div`
  margin: 5pc 0;
  color: white;
  width: 100%;

  @media screen and (max-width: 500px) {
    display: none;
    /* margin: 3pc 0pc !important;
    p {
      font-size: small !important;
    } */
  }
`;
