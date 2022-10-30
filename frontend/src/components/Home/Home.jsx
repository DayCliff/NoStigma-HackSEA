import styled from '@emotion/styled';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { LinkButton } from '../LinkButton';

function Home() {
  return (
    <Container>
      <Header />
      <LinkButton to="/questionnaire" text="Report" />
      <Footer />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;