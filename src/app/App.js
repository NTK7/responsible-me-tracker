import styled from "styled-components";

const App = () => {
  


  return (
    <Container className="container mt-3">
      <h2>Responsible Me Tracker</h2>

      <section>
        <p>This is some text</p>
      </section>
    </Container>
  );
};

export default App;

const Container = styled.div`
  > h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #3f3f3f;
  }
`;
