import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({ title, labels, data_ }) => {
  const data = {
    labels: labels,
    // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: data_,
        backgroundColor: [
          "rgba(11, 132, 165, 0.4)",
          "rgba(222, 53, 56, 0.4)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(255, 159, 64, 0.4)",
        ],
        borderColor: [
          "rgba(11, 132, 165, 1)",
          "rgba(222, 53, 56, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Container>
      <Doughnut data={data} />
      <p>{title}</p>
    </Container>
  );
};

export default DoughnutChart;

const Container = styled.div`
  margin: 2pc 0;
  width: 25vw;
  p {
    text-align: center;
    margin: 1pc;
    color: #de3538;
    font-size: large;
    font-weight: bold;
  }
  @media screen and (max-width: 1000px) {
    width: 300px;
  }
  @media screen and (max-width: 500px) {
    width: 280px;
  }
`;
