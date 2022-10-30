import styled from '@emotion/styled';
import { LinkButton } from '../LinkButton';

function Home() {
  return (
    <Container>
      <LinkButton to="/questionnaire" text="Report" />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100vw;
`;