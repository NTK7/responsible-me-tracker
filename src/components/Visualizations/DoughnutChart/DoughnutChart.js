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
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
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
  margin: 1pc;
  width: 20vw;
  p {
    text-align: center;
    margin: 1pc;
    color: grey;
    font-size: large;
    font-weight: bold;
  }
`;