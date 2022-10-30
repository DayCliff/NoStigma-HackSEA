import styled from "@emotion/styled";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Page(props) {
  return (
    <Container>
      <Header />
      <Main>{props.content}</Main>
      <Footer />
    </Container>
  );
}

export default Page;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Main = styled.main`
  flex-grow: 1;
`;
