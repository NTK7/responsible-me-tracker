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
          "rgba(65, 152, 215, 0.4)",
          "rgba(216, 182, 85, 0.4)",
          "rgba(122, 97, 186, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(70, 211, 154, 0.4)",
          "rgba(229, 87, 89, 0.4)",
        ],
        borderColor: [
          "rgba(65, 152, 215, 1)",
          "rgba(216, 182, 85, 1)",
          "rgba(122, 97, 186, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(70, 211, 154, 1)",
          "rgba(229, 87, 89, 1)",
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
  width: 25vw;
  margin: 2pc 0;

  p {
    text-align: center;
    margin: 1pc;
    font-size: large;
    font-weight: bold;
    color: black;
  }
  @media screen and (max-width: 1000px) {
    width: 300px;
  }
  @media screen and (max-width: 500px) {
    width: 280px;
  }
`;
