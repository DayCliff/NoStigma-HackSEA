import './App.css';
import styled from '@emotion/styled';
import { LinkButton } from '../LinkButton';

function App() {
  return (
    <Container>
      <LinkButton to="/questionnaire" text="Report" />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;
