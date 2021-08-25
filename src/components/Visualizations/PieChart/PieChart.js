import styled from "styled-components";
import { Pie } from "react-chartjs-2";

const PieChart = ({ title, labels, data_ }) => {
  const data = {
    labels: labels,
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
      <Pie data={data} />
      <p>{title}</p>
    </Container>
  );
};

export default PieChart;

const Container = styled.div`
  width: 20vw;
  margin: 1pc;
  p {
    text-align: center;
    margin: 1pc;
    font-size: large;
    font-weight: bold;
    color: grey;
  }
  @media screen and (max-width: 1000px) {
    width: 300px;
  }
  @media screen and (max-width: 500px) {
    width: 280px;
  }
`;
